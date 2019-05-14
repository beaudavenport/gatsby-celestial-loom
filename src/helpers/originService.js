import WesternChart from '../images/western-chart.jpg';
import NativeAmerican from '../images/native-american.jpg';
import Celtic from '../images/celtic.jpg';
import Mayan from '../images/mayan.jpg';

const originMap = new Map();

originMap.set('Western', {
  backgroundUrl: WesternChart,
  overlayColor: 'rgba(39,62,84,0.65)',
});
originMap.set('Native American', {
  backgroundUrl: NativeAmerican,
  overlayColor: 'rgba(150, 148, 62, 0.65)',
});
originMap.set('Vedic', {
  icon: '🕉︎',
  color: 'orange',
});
originMap.set('Celtic', {
  backgroundUrl: Celtic,
  overlayColor: 'rgba(42, 142, 92, 0.65)',
});
originMap.set('Mayan', {
  backgroundUrl: Mayan,
  overlayColor: 'rgba(142, 93, 42, 0.65)',
});

const getOrigin = originName => originMap.get(originName);

export default getOrigin;
