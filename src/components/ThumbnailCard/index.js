import PropTypes from 'prop-types';
import React from 'react';

import ImageThumbnail from './imageThumbnail';
import TouchableLink from '../TouchableLink';

const ThumbnailCard = ({
  title, path = '/', caption, image,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    <ImageThumbnail imageUrl={image} />
    <div className="thumbnail-text">
      <p className="thumbnail-text--title">{title}</p>
      <p className="thumbnail-text--subtitle">
        {caption}
      </p>
    </div>
  </TouchableLink>
);

ThumbnailCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ThumbnailCard;
