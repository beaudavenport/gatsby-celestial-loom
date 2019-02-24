const originMap = new Map();

originMap.set('Western', {
  icon: '☉',
  color: 'black',
});
originMap.set('Vedic', {
  icon: '🕉︎',
  color: 'orange',
});
originMap.set('Celtic', {
  icon: '🕈',
  color: 'green',
});
originMap.set('Native American', {
  icon: '⊕',
  color: 'yellow',
});

const getOrigin = originName => originMap.get(originName);

export default getOrigin;
