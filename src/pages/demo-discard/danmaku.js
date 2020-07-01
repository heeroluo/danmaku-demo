import {
  SPEED_ARG,
  defaultDanmakuData
} from '@/utils/constants';
import PauseDanmaku from '../demo-pause/danmaku';

export default class Danmaku extends PauseDanmaku {
  constructor(options) {
    super(options);

    // 是否允许丢弃弹幕
    this._allowDiscard = options.allowDiscard === true ?
      5000 :
      (parseInt(options.allowDiscard) || 0);
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

  // 数据解析与复制
  _parseData(data) {
    const autoId = ++this._autoId;
    // Math.pow(2, 53) - 1 即 Number.MAX_SAFE_INTEGER
    if (autoId >= Math.pow(2, 53) - 1) {
      this._autoId = 0;
    }
    return Object.assign({
      autoId,
      timestamp: Date.now()
    }, defaultDanmakuData, data);
  }
}
