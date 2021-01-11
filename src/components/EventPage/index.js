import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { PageImage, Subtitle, Title } from '../Common';
import AddToCartButton from '../AddToCartButton';
import { isPastEvent } from './../../helpers/dateHelper';

function EventPage(props) {
  const {
    title,
    subtitle,
    image,
    eventDate,
    eventPrice,
    html,
    location,
    mapsLink,
    slug,
    eventTime,
    priceDescription,
  } = props;
  const isExpired = isPastEvent(eventDate);

  return (
    <div className="content-container">
      <div className="event-title--container">
        {isExpired && <Subtitle>Past Event</Subtitle>}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <PageImage image={image} alt="event" />
      <div className="event-page--detail-container">
        <div className="flex-column flex-center">
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
            <a href={mapsLink}>{location}</a>
          </div>
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
            <p style={{ fontSize: '1.1rem' }}>{`${eventDate} • ${eventTime}`}</p>
          </div>
        </div>
        <div className="bordered-content" dangerouslySetInnerHTML={{ __html: html }} />
        { !isExpired && (
          <div className="event-signup">
            <div style={{ flex: 1 }}>
              <p className="event-signup--price-description">{priceDescription}</p>
              <p className="event-signup--price">{`$${Number(eventPrice).toFixed(2)}`}</p>
            </div>
            <div className="event-page--button">
              <AddToCartButton
                title={title}
                price={eventPrice}
                slug={slug}
                description="Event Sign-Up"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventPrice: PropTypes.number.isRequired,
  html: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  priceDescription: PropTypes.string.isRequired,
};

export default EventPage;
