import PropTypes from 'prop-types';
import React from 'react';

import TouchableLink from '../TouchableLink';

const ThumbnailEventCard = ({
  title, path = '/', location, eventTime, image, eventDateShort,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    <div className="thumbnail-image" style={{ backgroundImage: `url(${image})`, position: 'relative' }} />
    <div className="thumbnail-text">
      <p className="thumbnail-text--subtitle" style={{ color: '#ec6602', fontSize: '1rem' }}>{eventDateShort}</p>
      <p className="thumbnail-text--title">{title}</p>
      <p className="thumbnail-text--subtitle">{location}</p>
      <p className="thumbnail-text--subtitle">{eventTime}</p>
    </div>
  </TouchableLink>
);

ThumbnailEventCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDateShort: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
};

export default ThumbnailEventCard;
