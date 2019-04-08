import React from 'react';
import PropTypes from 'prop-types';

const DateThumbnail = ({ day, month }) => (
  <div style={{ backgroundColor: 'rgb(247, 105, 0)', padding: '20px 10px' }}>
    <p className="thumbnail-day">
      { day }
    </p>
    <p className="thumbnail-month">
      { month }
    </p>
  </div>
);

DateThumbnail.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};

export default DateThumbnail;
