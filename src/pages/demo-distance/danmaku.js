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
        data.startTime = Date.now() + 80;
        y.forEach((i) => {
          this._tracks[i].push(data);
        });
        break;
      }
    }
  }
}
