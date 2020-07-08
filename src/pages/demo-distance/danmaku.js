import { SPEED_ARG } from '@/utils/constants';
import SkipDanmaku from '../demo-skip/danmaku';

export default class Danmaku extends SkipDanmaku {
  constructor(options) {
    super(options);
  }

  // 把弹幕数据加到合适的轨道
  _addToTrack(data) {
    // 单条轨道
    let track;
    // 轨道的最后一项弹幕数据
    let lastItem;
    // 弹幕已经走的路程
    let distance;
    // 弹幕数据最终坐落的轨道索引
    // 有些弹幕会占多条轨道，所以 y 是个数组
    let y = [];

    const now = Date.now();

    for (let i = 0; i < this._tracks.length; i++) {
      track = this._tracks[i];

      if (track.length) {
        // 轨道被占用，要计算是否会重叠
        // 只需要跟轨道最后一条弹幕比较即可
        lastItem = track[track.length - 1];

        // 计算已滚动距离
        distance = lastItem.rollSpeed * (now - lastItem.startTime) / 1000;

        // 通过速度差，计算最后一条弹幕全部消失前，是否会与新增弹幕重叠
        // 如果不会重叠，则可以使用当前轨道
        if (
          (distance > lastItem.width) &&
          (
            (data.rollSpeed <= lastItem.rollSpeed) ||
            ((distance - lastItem.width) / (data.rollSpeed - lastItem.rollSpeed) >
              (this._totalWidth + lastItem.width - distance) / lastItem.rollSpeed)
          )
        ) {
          y.push(i);
        } else {
          y = [];
        }

      } else {
        // 轨道未被占用
        y.push(i);
      }

      // 有足够的轨道可以用时，就可以新增弹幕了，否则等下一次轮询
      if (y.length >= data.useTracks) {
        data.y = y;
        y.forEach((i) => {
          this._tracks[i].push(data);
        });
        break;
      }
    }
  }

  // 渲染为 DOM 节点
  _renderToDOM() {
    // 根据轨道数量每次处理一定数量的弹幕数据
    // 数量越大，弹幕越密集
    let count = this._maxAmountPerRender;

    let i = 0;
    while (count && i < this._queue.length) {
      const data = this._queue[i];
      let node = data.node;

      if (!node) {
        // 弹幕节点基本样式
        data.node = node = document.createElement('div');
        node.innerText = data.msg;
        node.style.position = 'absolute';
        node.style.left = '100%';
        node.style.whiteSpace = 'nowrap';
        node.style.color = data.fontColor;
        node.style.fontSize = data.fontSize + 'px';
        node.style.willChange = 'transform';
        this._container.appendChild(node);

        data.useTracks = Math.ceil(node.offsetHeight / this._trackSize);
        // 占用的轨道数多于轨道总数，则忽略此数据
        if (data.useTracks > this._tracks.length) {
          this._queue.splice(i, 1);
          this._container.removeChild(node);
          continue;
        }

        data.width = node.offsetWidth;
        data.totalDistance = data.width + this._totalWidth;
        data.rollTime = data.rollTime ||
          Math.floor(data.totalDistance * SPEED_ARG * (Math.random() * 0.3 + 0.7));
        data.rollSpeed = data.totalDistance / data.rollTime;
      }

      this._addToTrack(data);

      if (data.y) {
        this._queue.splice(i, 1);

        node.setAttribute('data-id', data.autoId);
        node.setAttribute('data-y', data.y[0]);
        node.style.top = data.y[0] * this._trackSize + 'px';
        node.style.transition = `transform ${data.rollTime}s linear`;
        node.style.transform = `translateX(-${data.totalDistance}px)`;
        node.addEventListener('transitionstart', () => {
          data.startTime = Date.now();
        }, false);
        node.addEventListener('transitionend', () => {
          this._removeFromTrack(data.y, data.autoId);
          this._container.removeChild(node);
        }, false);

        data.startTime = Date.now() + 80;

      } else {
        // 当前弹幕要排队，继续处理下一条
        i++;
      }

      // 处理一条，减掉一条
      count--;
    }
  }
}
