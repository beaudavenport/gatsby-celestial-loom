import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const CardCornerHighlight = ({ iconName, title }) => (
  <div style={{
    padding: 5, position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'middle', marginBottom: 10, backgroundColor: '#ff6d00',
  }}
  >
    <FontIcon style={{ color: 'white' }}>{iconName}</FontIcon>
    <p style={{
      color: 'white', fontStyle: 'italic', lineHeight: '24px', marginLeft: 3, marginBottom: 0,
    }}
    >
      {title}
    </p>
  </div>
);

CardCornerHighlight.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardCornerHighlight;
