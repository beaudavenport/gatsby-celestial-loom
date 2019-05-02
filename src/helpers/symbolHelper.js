import React from 'react';

const symbolMap = new Map();

symbolMap.set('aries', 'a');
symbolMap.set('taurus', 'b');

const getSymbol = (symbolName = '') => symbolMap.get(symbolName.toLowerCase());

export const getSymbolSpan = symbol => (
  <span style={{ fontFamily: 'AstroGadget' }}>{getSymbol(symbol)}</span>
);

export default getSymbol;
