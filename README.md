# 弹幕 demo

[弹幕实现原理](https://mrluo.life/article/detail/146/danmaku-implement) 的 demo，详见文章内容。

## 本地运行

```bash
npm ci
npm run dev
```

## Demo 列表

| 序号 | Demo 说明 | 本地访问地址 | 在线地址 |
| --- | --- | --- | --- |
| 1 | 基础 demo，可以看到“黑箱”操作 | http://localhost:8585/demo-basic/demo-basic.html | https://heeroluo.github.io/danmaku-demo/demo-basic/demo-basic.html |
| 2 | 1 + 跳过阻塞的弹幕（密集度增加） | http://localhost:8585/demo-skip/demo-skip.html | https://heeroluo.github.io/danmaku-demo/demo-skip/demo-skip.html |
| 3 | 2 + 已滚动距离计算方式的优化（性能提升） | http://localhost:8585/demo-distance/demo-distance.html | https://heeroluo.github.io/danmaku-demo/demo-distance/demo-distance.html |
| 4 | 3 + 页面不可见时暂停 | http://localhost:8585/demo-pause/demo-pause.html | https://heeroluo.github.io/danmaku-demo/demo-pause/demo-pause.html |
| 5 | 4 + 丢弃排队时间过长的弹幕 | http://localhost:8585/demo-discard/demo-discard.html | https://heeroluo.github.io/danmaku-demo/demo-discard/demo-discard.html |
| 6 | 5 + 回收弹幕节点 | http://localhost:8585/demo-recycle/demo-recycle.html | https://heeroluo.github.io/danmaku-demo/demo-recycle/demo-recycle.html |
