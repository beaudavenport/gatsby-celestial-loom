import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { Subtitle, Title } from './Common';
import AddToCartButton from './AddToCartButton';

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
  const isExpired = moment().isAfter(moment(eventDate));

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        {isExpired && <Subtitle>Past Event</Subtitle>}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <div style={{ margin: '0 auto', maxWidth: 400 }}>
        <img style={{ width: '100%', objectFit: 'cover', margin: '0 auto' }} src={image} alt="event-page" />
      </div>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10,
        }}
        >
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
            <a href={mapsLink}>{location}</a>
          </div>
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
            <p style={{ fontSize: '1.1rem' }}>{`${eventDate} • ${eventTime}`}</p>
          </div>
        </div>
        <div style={{ padding: 20, border: '1px solid rgba(15,70,100,.12)', borderRadius: 5 }} dangerouslySetInnerHTML={{ __html: html }} />
        { !isExpired && (
          <div className="event-signup">
            <div style={{ flex: 1 }}>
              <p className="event-signup--price-description">{priceDescription}</p>
              <p className="event-signup--price">{`$${Number(eventPrice).toFixed(2)}`}</p>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
  eventPrice: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  priceDescription: PropTypes.string.isRequired,
};

export default EventPage;
