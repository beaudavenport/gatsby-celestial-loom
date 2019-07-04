import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

const ImageThumbnail = ({ fluidImage }) => (
  <Img fluid={fluidImage} className="thumbnail-image" alt="Thumbnail for thing" />
);

ImageThumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ImageThumbnail;
