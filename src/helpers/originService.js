import WesternChart from '../images/western-chart.jpg';
import NativeAmerican from '../images/native-american.jpg';
import Celtic from '../images/celtic.jpg';
import Mayan from '../images/mayan.jpg';
import Vedic from '../images/vedic.jpg';
import Chinese from '../images/chinese.jpg';

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
  backgroundUrl: Vedic,
  overlayColor: 'rgba(92, 56, 138, 0.65)',
});
originMap.set('Celtic', {
  backgroundUrl: Celtic,
  overlayColor: 'rgba(42, 142, 92, 0.65)',
});
originMap.set('Mayan', {
  backgroundUrl: Mayan,
  overlayColor: 'rgba(142, 93, 42, 0.65)',
});
originMap.set('Chinese', {
  backgroundUrl: Chinese,
  overlayColor: 'rgba(121, 19, 8, 0.65)',
});

const getOrigin = originName => originMap.get(originName);

export default getOrigin;
