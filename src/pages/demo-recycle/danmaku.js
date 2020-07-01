import DiscardDanmaku from '../demo-discard/danmaku';
import { SPEED_ARG } from '@/utils/constants';

export default class Danmaku extends DiscardDanmaku {
  constructor(options) {
    super(options);
    // 弹幕节点回收站（回收的节点可以再利用）
    this._nodeRecycleBin = [];
  }

  // 回收节点
  _recycleNode(node) {
    if (this._nodeRecycleBin.length <= this._tracks.length * 2) {
      node.removeAttribute('data-y');
      node.removeAttribute('data-id');
      node.ontransitionstart = node.ontransitionend = null;
      this._nodeRecycleBin.push(node);
    } else {
      this._container.removeChild(node);
    }
  }

  // 请求节点
  _requireNode(data) {
    let node;
    let isNewNode;
    if (this._nodeRecycleBin.length) {
      node = this._nodeRecycleBin.shift();
      node.style.transition = node.style.transform = '';
    } else {
      node = document.createElement('div');
      node.style.position = 'absolute';
      node.style.left = '100%';
      node.style.whiteSpace = 'nowrap';
      node.style.willChange = 'transform';
      isNewNode = true;
    }
    node.innerText = data.msg;
    node.style.color = data.fontColor;
    node.style.fontSize = data.fontSize + 'px';
    node.ontransitionstart = () => {
      data.startTime = Date.now();
    };
    node.ontransitionend = () => {
      // node.style.transition 为空时，是暂停状态，不用移除
      if (node.style.transition) {
        this._removeFromTrack(data.y, data.autoId);
        this._recycleNode(node);
      }
    };

    if (isNewNode) { this._container.appendChild(node); }

    return node;
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
        // 超时丢弃弹幕
        if (this._allowDiscard &&
          this._queue.length > this._tracks.length &&
          Date.now() - data.timestamp > this._allowDiscard
        ) {
          this._queue.splice(i, 1);
          continue;
        }

        data.node = node = this._requireNode(data);

        data.useTracks = Math.ceil(node.offsetHeight / this._trackSize);
        // 占用的轨道数多于轨道总数，则忽略此数据
        if (data.useTracks > this._tracks.length) {
          this._queue.splice(i, 1);
          this._recycleNode(node);
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
      } else {
        // 当前弹幕要排队，继续处理下一条
        i++;
      }

      // 处理一条，减掉一条
      count--;
    }
  }
}
