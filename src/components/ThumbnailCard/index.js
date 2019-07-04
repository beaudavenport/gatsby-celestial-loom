import PropTypes from 'prop-types';
import React from 'react';

import ImageThumbnail from './imageThumbnail';
import TouchableLink from '../TouchableLink';

const ThumbnailCard = ({
  title, path = '/', caption, fluidImage,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    <ImageThumbnail fluidImage={fluidImage} />
    <div className="thumbnail-text">
      <p className="thumbnail-text--title">{title}</p>
      <p className="thumbnail-text--subtitle">
Posted on:
        {' '}
        <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.87)' }}>{caption}</span>
      </p>
    </div>
  </TouchableLink>
);

ThumbnailCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  fluidImage: PropTypes.object.isRequired, // eslint-disable-line
};

export default ThumbnailCard;
