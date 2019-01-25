import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ imageUrl }) => (
  <div className="thumbnail-image" style={{ backgroundImage: `url(${imageUrl})` }} />
);

ImageThumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ImageThumbnail;
