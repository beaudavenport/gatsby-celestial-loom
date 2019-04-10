import { Card, FontIcon } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small, cornerIconName, cornerTitle,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div className="thumbnail-card" style={{ backgroundColor: 'white' }}>
      {thumbnailChildren}
      <div className="thumbnail-text">
        <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'rgb(47, 47, 47)' }}>{title}</h4>
        <div style={{
          display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',
        }}
        >
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)' }}>
            {caption}
            {' '}
- 2 min read
          </p>
          <p style={{
            fontStyle: 'italic', marginRight: 5, fontWeight: 'bold', color: 'rgb(47, 47, 47)',
          }}
          >
          #aries, #potatoes, #2019
          </p>
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

export default ThumbnailCard;
