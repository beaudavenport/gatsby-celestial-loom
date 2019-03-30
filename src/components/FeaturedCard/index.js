import {
  Card, CardText, CardTitle, FontIcon, MediaOverlay,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import CardCornerHighlight from '../CardCornerHighlight';

const FeaturedCard = ({
  path, image, title, subtitle, excerpt, style, publishDate, cornerIconName, cornerTitle,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Card style={{ backgroundColor: 'white', ...style }}>
      <div style={{ position: 'relative' }}>
        <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
        {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
        <MediaOverlay style={{ marginBottom: '5px' }}>
          <CardTitle title={title} subtitle={publishDate} />
        </MediaOverlay>
      </div>
      <CardText>
        <p style={{ textDecoration: 'none' }}>
          {excerpt}
          {' '}
          <span style={{ fontWeight: 'bold' }}>
            {' '}
Read More
            <FontIcon style={{ fontSize: '14px' }}>chevron_right</FontIcon>
          </span>
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
  cornerIconName: PropTypes.string,
  cornerTitle: PropTypes.string,
};

FeaturedCard.defaultProps = {
  cornerIconName: '',
  cornerTitle: '',
};

export default FeaturedCard;
