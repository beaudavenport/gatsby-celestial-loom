import PropTypes from 'prop-types';
import React from 'react';

import TouchableLink from '../TouchableLink';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small, cornerIconName, cornerTitle,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    {thumbnailChildren}
    <div className="thumbnail-text">
      <p className="thumbnail-text--title">{title}</p>
      <p className="thumbnail-text--subtitle">{caption}</p>
    </div>
  </TouchableLink>
);

ThumbnailCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  thumbnailChildren: PropTypes.node.isRequired,
  cornerIconName: PropTypes.string,
  cornerTitle: PropTypes.string,
};

ThumbnailCard.defaultProps = {
  cornerIconName: '',
  cornerTitle: '',
};

export default ThumbnailCard;
