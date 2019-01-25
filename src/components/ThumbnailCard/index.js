import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

const ThumbnailCard = ({ title, caption, thumbnailChildren }) => (
  <Card>
    <div className="flex-row">
      {thumbnailChildren}
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
  thumbnailChildren: PropTypes.node.isRequired,
};
export default ThumbnailCard;
