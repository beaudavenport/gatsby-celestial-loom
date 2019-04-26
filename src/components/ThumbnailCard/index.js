import { Link } from 'gatsby';
import { injectInk } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small, cornerIconName, cornerTitle, ink,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div className="thumbnail-card" style={{ position: 'relative' }}>
      {ink}
      {thumbnailChildren}
      <div className="thumbnail-text">
        <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'rgb(47, 47, 47)' }}>{title}</h2>
        <div style={{
          display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',
        }}
        >
          <h3 style={{
            color: 'rgba(0, 0, 0, 0.54)', fontWeight: 'bold', marginBottom: 0, marginLeft: 5, fontSize: '0.9rem',
          }}
          >
            {caption}
          </h3>
        </div>
      </div>
    </div>
  </Link>
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

export default injectInk(ThumbnailCard);
