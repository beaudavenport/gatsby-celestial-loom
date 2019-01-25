import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

const ThumbnailCard = ({ title, caption, imageUrl }) => (
  <Card>
    <div className="flex-row">
      <div className="thumbnail-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div style={{ padding: '10px' }}>
        <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
        <caption>{caption}</caption>
      </div>
    </div>
  </Card>
);

ThumbnailCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default ThumbnailCard;
