import { Card, CardText, Button } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function EventPage(props) {
  const {
    title, image, eventDate, price, html, location, mapsLink, slug,
  } = props;
  return (
    <Card>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <h2 style={{ textAlign: 'center' }}>{eventDate}</h2>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img style={{ maxWidth: '100%' }} src={image} alt="event" />
      </div>
      <CardText style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>{location}</h3>
        <a href={mapsLink}>View on Google Maps</a>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <strong>{`$${Number(price).toFixed(2)}`}</strong>
        <br />
        <Button
          raised
          primary
          className="snipcart-add-item"
          data-item-id="2"
          data-item-name={title}
          data-item-price={price}
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
      </CardText>
    </Card>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
};

export default EventPage;
