import {
  CardText, CardTitle, FontIcon, MediaOverlay, Paper,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import CardCornerHighlight from '../CardCornerHighlight';

const FeaturedEventCard = ({
  path, image, title, subtitle, excerpt, style, publishDate, cornerIconName, cornerTitle,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div style={{ backgroundColor: 'white', ...style }}>
      <div style={{ position: 'relative' }}>
        <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
        {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
      </div>
      <CardTitle
        style={{ padding: 10 }}
        title={title}
        subtitle={(
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
              <p>Hartford Coffee Company</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
              <p style={{ fontWeight: 'bold' }}>Feb 17, 2019</p>
            </div>
          </div>
)}
      />
    </div>
  </Link>
);

FeaturedEventCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  cornerIconName: PropTypes.string,
  cornerTitle: PropTypes.string,
};

FeaturedEventCard.defaultProps = {
  cornerIconName: '',
  cornerTitle: '',
};

export default FeaturedEventCard;
