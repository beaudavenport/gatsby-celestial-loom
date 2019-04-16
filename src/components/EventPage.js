import { Button, Card, FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function EventPage(props) {
  const {
    title, image, eventDate, eventPrice, html, location, mapsLink, slug, eventTime, priceDescription,
  } = props;
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: 'black' }}>{title}</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <img style={{ maxWidth: '100%' }} src={image} alt="event" />
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
        <div className="event-signup">
          <div>
            <p className="event-signup--price-description">{priceDescription}</p>
            <p className="event-signup--price">{`$${Number(eventPrice).toFixed(2)}`}</p>
          </div>
          <Button
            primary
            flat
            style={{
              height: 'auto', fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Martel', border: '1px solid',
            }}
            className="snipcart-add-item"
            data-item-id="2"
            data-item-name={title}
            data-item-price={eventPrice}
            data-item-weight="20"
            data-item-url={slug}
            data-item-description="Event"
            data-item-custom1-name="Name"
            data-item-custom1-required="true"
            data-item-custom2-name="Date of Birth"
            data-item-custom2-required="true"
          >
          Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventPrice: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
};

export default EventPage;
