import { Card, FontIcon } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small, cornerIconName, cornerTitle,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Card className="thumbnail-card">
      {thumbnailChildren}
      <div className="thumbnail-text">
        <div style={{ padding: 10 }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'rgb(47, 47, 47)' }}>{title}</h4>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)' }}>
            {caption}
            {' '}
- 2 min read
          </p>
        </div>
        <div style={{
          padding: 5, display: 'flex', justifyContent: 'flex-start',
        }}
        >
          <FontIcon style={{ marginLeft: 5, marginRight: 5, color: 'rgb(47, 47, 47)' }}>local_offer</FontIcon>
          <p style={{
            marginLeft: 5, fontStyle: 'italic', marginRight: 5, fontWeight: 'bold', color: 'rgb(47, 47, 47)',
          }}
          >
Aries, Potatoes, 2019
          </p>
        </div>
      </div>
    </Card>
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
