import WesternChart from '../images/western-chart.jpg';
import NativeAmerican from '../images/native-american.jpg';

const originMap = new Map();

originMap.set('Western', {
  backgroundUrl: WesternChart,
  overlayColor: 'rgba(39,62,84,0.75)',
});
originMap.set('Native American', {
  backgroundUrl: NativeAmerican,
  overlayColor: 'rgba(150, 148, 62, 0.75)',
});
originMap.set('Vedic', {
  icon: '🕉︎',
  color: 'orange',
});
originMap.set('Celtic', {
  icon: '🕈',
  color: 'green',
});

const getOrigin = originName => originMap.get(originName);

export default getOrigin;
