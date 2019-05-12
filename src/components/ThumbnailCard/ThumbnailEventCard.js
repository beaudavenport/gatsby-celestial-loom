import PropTypes from 'prop-types';
import React from 'react';

import ImageThumbnail from './imageThumbnail';
import TouchableLink from '../TouchableLink';

const ThumbnailEventCard = ({
  title, path = '/', location, eventTime, image, eventDate,
}) => (
  <TouchableLink to={path} className="thumbnail-card">
    <ImageThumbnail imageUrl={image} />
    <div className="thumbnail-text">
      <p className="thumbnail-text--subtitle" style={{ color: '#ec6602', fontSize: '1rem' }}>{eventDate}</p>
      <p className="thumbnail-text--title">{title}</p>
      <p className="thumbnail-text--subtitle">{`${location} • ${eventTime}`}</p>
      <p className="thumbnail-text--subtitle" />
    </div>
  </TouchableLink>
);

ThumbnailEventCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
};

export default ThumbnailEventCard;
