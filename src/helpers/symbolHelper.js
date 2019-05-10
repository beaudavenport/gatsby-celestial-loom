import React from 'react';

const symbolMap = new Map();

symbolMap.set('aries', 'a');
symbolMap.set('taurus', 'b');
symbolMap.set('gemini', 'c');
symbolMap.set('cancer', 'd');
symbolMap.set('leo', 'e');
symbolMap.set('virgo', 'f');
symbolMap.set('libra', 'g');
symbolMap.set('scorpio', 'h');
symbolMap.set('sagittarius', 'i');
symbolMap.set('capricorn', 'j');
symbolMap.set('aquarius', 'k');
symbolMap.set('pisces', 'l');

symbolMap.set('first house', '1');
symbolMap.set('second house', '2');
symbolMap.set('third house', '3');
symbolMap.set('fourth house', '4');
symbolMap.set('fifth house', '5');
symbolMap.set('sixth house', '6');
symbolMap.set('seventh house', '7');
symbolMap.set('eigth house', '8');
symbolMap.set('ninth house', '9');
symbolMap.set('tenth house', '10');
symbolMap.set('eleventh house', '11');
symbolMap.set('twelfth house', '12');

symbolMap.set('sun', 'A');
symbolMap.set('moon', 'B');
symbolMap.set('mercury', 'C');
symbolMap.set('venus', 'D');
symbolMap.set('mars', 'E');
symbolMap.set('jupiter', 'F');
symbolMap.set('saturn', 'G');
symbolMap.set('uranus', 'H');
symbolMap.set('neptune', 'I');
symbolMap.set('pluto', 'J');

const getSymbol = (symbolName = '') => symbolMap.get(symbolName.toLowerCase());

export const getSymbolSpan = symbol => (
  <span style={{ fontFamily: 'AstroGadget' }}>{getSymbol(symbol)}</span>
);

export default getSymbol;
