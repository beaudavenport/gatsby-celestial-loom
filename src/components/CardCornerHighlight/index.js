import { FontIcon } from '@react-md/icon';
import PropTypes from 'prop-types';
import React from 'react';

const CardCornerHighlight = ({ iconName, title, isExpired }) => (
  <div style={{
    padding: '5px 10px',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'middle',
    marginBottom: 10,
    backgroundColor: isExpired ? 'rgb(136, 136, 136)' : 'rgb(247, 105, 0)',
  }}
  >
    <FontIcon style={{ color: 'white' }}>{iconName}</FontIcon>
    <p style={{
      color: 'white', fontStyle: 'italic', fontWeight: 'bold', lineHeight: '24px', marginLeft: 3, marginBottom: 0,
    }}
    >
      {title}
    </p>
  </div>
);

CardCornerHighlight.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isExpired: PropTypes.bool.isRequired,
};

export default CardCornerHighlight;
