import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const CardCornerHighlight = ({ iconName, title }) => (
  <div style={{
    padding: '5px 10px', position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'middle', marginBottom: 10, backgroundColor: 'rgb(247, 105, 0)',
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
