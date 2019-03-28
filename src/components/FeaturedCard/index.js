import {
  Card, CardText, CardTitle, FontIcon, MediaOverlay,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const FeaturedCard = ({
  path, image, title, subtitle, excerpt, style, publishDate,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Card style={{ backgroundColor: 'white', ...style }}>
      <div style={{ position: 'relative' }}>
        <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
        <div style={{
          position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'middle', marginBottom: 10, backgroundColor: '#ff6d00',
        }}
        >
          <FontIcon style={{ color: 'white' }}>create</FontIcon>
          <p style={{
            color: 'white', fontStyle: 'italic', lineHeight: '24px', marginLeft: 5,
          }}
          >
        Blog
          </p>
        </div>
        <MediaOverlay style={{ marginBottom: '5px' }}>
          <CardTitle title={title} subtitle={publishDate} />
        </MediaOverlay>
      </div>
      <CardText>
        <p style={{ textDecoration: 'none' }}>
          {excerpt}
          {' '}
          <span style={{ fontWeight: 'bold' }}> Read More...</span>
        </p>
      </CardText>
    </Card>
  </Link>
);

FeaturedCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default FeaturedCard;
