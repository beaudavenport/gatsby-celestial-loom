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
        <MediaOverlay style={{ marginBottom: '5px' }}>
          <CardTitle title={title} subtitle={publishDate} />
        </MediaOverlay>
      </div>
      <CardText>
        <div style={{ display: 'flex', marginBottom: 10 }}>
          <FontIcon style={{ color: 'rgb(255, 128, 19)' }}>create</FontIcon>
          <p style={{
            color: 'rgb(255, 128, 19)', fontStyle: 'italic', lineHeight: '24px', marginLeft: 5,
          }}
          >
          Blog
          </p>
        </div>
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
