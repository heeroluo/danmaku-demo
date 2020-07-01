import '@/style/style.css';
import Danmaku from './danmaku';
import init from '@/utils/init';

const container = document.getElementById('container');

const danmaku = new Danmaku({
  container
});

init(danmaku, container);
