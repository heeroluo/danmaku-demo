import DistanceDanmaku from '../demo-distance/danmaku';
import {
  getTranslateX,
  hiddenProp,
  visibilityChangeEvent
} from '@/utils/dom';
import { SPEED_ARG } from '@/utils/constants';

export default class Danmaku extends DistanceDanmaku {
  constructor(options) {
    // 是否暂停
    // this._paused = false;
    // 从暂停到恢复的定时器，visibilitychange 事件中用到
    // this._resumeTimer = null;
    super(options);

    // 页面不可见（退到后台）时暂停，可见时恢复
    this._onVisibilityChange = () => {
      if (document[hiddenProp]) {
        this.pause();
      } else {
        // 必须异步执行，否则恢复后动画速度可能会加快，从而导致弹幕消失或重叠，原因不明
        this._resumeTimer = setTimeout(() => { this.resume(); }, 200);
      }
    };
    document.addEventListener(visibilityChangeEvent, this._onVisibilityChange, false);
  }

  // 轮询渲染
  _render() {
    if (this._paused) { return; }
    try {
      this._renderToDOM();
    } finally {
      this._renderEnd();
    }
  }

  // 暂停弹幕
  pause() {
    if (this._resumeTimer) { clearTimeout(this._resumeTimer); }
    if (this._renderTimer) {
      clearTimeout(this._renderTimer);
      this._renderTimer = null;
    }

    if (this._paused) { return; }
    this._paused = true;

    this._eachDanmakuNode((node, y, id) => {
      const data = this._findData(y, id);
      if (data) {
        // 获取已滚动距离
        data.rolledDistance = -getTranslateX(node);

        // 移除动画，计算出弹幕所在的位置，固定样式
        node.style.transition = '';
        node.style.transform = `translateX(-${data.rolledDistance}px)`;
      }
    });
  }

  // 继续滚动弹幕
  resume() {
    if (!this._paused) { return; }

    this._eachDanmakuNode((node, y, id) => {
      const data = this._findData(y, id);
      if (data) {
        data.startTime = Date.now();
        // 重新计算滚完剩余距离需要多少时间
        data.rollTime = (data.totalDistance - data.rolledDistance) / data.rollSpeed;
        node.style.transition = `transform ${data.rollTime}s linear`;
        node.style.transform = `translateX(-${data.totalDistance}px)`;
      }
    });

    this._paused = false;

    if (!this._renderTimer) { this._render(); }
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
        node.addEventListener('transitionend', () => {
          // node.style.transition 为空时，是暂停状态，不用移除
          if (node.style.transition) {
            this._removeFromTrack(data.y, data.autoId);
            this._container.removeChild(node);
          }
        }, false);

      } else {
        // 当前弹幕要排队，继续处理下一条
        i++;
      }

      // 处理一条，减掉一条
      count--;
    }
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

        distance = lastItem.rolledDistance +
          lastItem.rollSpeed * (now - lastItem.startTime) / 1000;

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
      if (y.length && y.length >= data.useTracks) {
        data.y = y;
        data.startTime = Date.now() + 80;
        y.forEach((i) => {
          this._tracks[i].push(data);
        });
        break;
      }
    }
  }
}
