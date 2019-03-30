import { Card, FontIcon } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren, small,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Card className="thumbnail-card">
      {thumbnailChildren}
      <div className="thumbnail-text">
        <div style={{ padding: 10 }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{title}</h4>
          <p style={{ fontSize: '1rem', color: 'rgba(0, 0, 0, 0.54)' }}>
            {caption}
            {' '}
- 2 min read
          </p>
        </div>
        <div style={{
          padding: 5, display: 'flex', justifyContent: 'flex-start',
        }}
        >
          <FontIcon style={{ marginLeft: 5, marginRight: 5, color: '#ff8013' }}>local_offer</FontIcon>
          <p style={{
            marginLeft: 5, marginRight: 5, fontWeight: 'bold', color: '#ff8013',
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
};
export default ThumbnailCard;
