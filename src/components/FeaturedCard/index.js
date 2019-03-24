import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardText, MediaOverlay,
} from 'react-md';
import { Link } from 'gatsby';

const FeaturedCard = ({
  path, image, title, subtitle, excerpt, style,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Card style={{ backgroundColor: 'white', ...style }}>
      <div style={{ position: 'relative' }}>
        <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
        <MediaOverlay style={{ marginBottom: '5px' }}>
          <CardTitle title={title} subtitle={subtitle} />
        </MediaOverlay>
      </div>
      <CardText>
        <p style={{ textDecoration: 'none' }}>{excerpt}</p>
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
