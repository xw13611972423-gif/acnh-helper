import acnh from './data/acnh.json';
import residents from './data/residents.json';

export const APP_TITLE = '动森助手';
export const APP_SUBTITLE = '动物森友会攻略 · 图鉴';

const GAMES = [
  { id: 'acnh', name: '集合啦！', sub: '动物森友会', icon: '🏝️', color: '#7EC86E', deep: '#4C9A4C', data: acnh },
  { id: 'residents', name: '动森', sub: '居民图鉴', icon: '🐾', color: '#E8A0A0', deep: '#9E4A4A', data: residents },
];

export default GAMES;
