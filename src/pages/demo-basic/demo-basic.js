import Danmaku from './danmaku';
import init from '@/utils/init';
import './basic.css';

const container = document.getElementById('container');

const danmaku = new Danmaku({
  container
});

init(danmaku, container);
