import PropTypes from 'prop-types';
import React from 'react';

import TouchableLink from '../TouchableLink';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small, cornerIconName, cornerTitle,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    {thumbnailChildren}
    <div className="thumbnail-text">
      <p style={{
        fontWeight: 'bold', fontSize: '1.1rem', color: 'rgb(47, 47, 47)', marginBottom: 0,
      }}
      >
        {title}
      </p>
      <div style={{
        display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',
      }}
      >
        <p style={{
          color: 'rgba(0, 0, 0, 0.54)', fontWeight: 'bold', marginBottom: 20, marginLeft: 5, fontSize: '0.8rem',
        }}
        >
          {caption}
        </p>
      </div>
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
