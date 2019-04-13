import {
  Button, Card, CardText, FontIcon,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function EventPage(props) {
  const {
    title, image, eventDate, price, html, location, mapsLink, slug, eventTime, priceDescription,
  } = props;
  return (
    <Card style={{ padding: 10 }}>
      <h1 style={{ textAlign: 'center', color: 'black' }}>{title}</h1>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img style={{ maxWidth: '100%' }} src={image} alt="event" />
      </div>
      <CardText style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
            <a href={mapsLink}>{location}</a>
          </div>
          <div className="event-detail">
            <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
            <p>{`${eventDate} - ${eventTime}`}</p>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        <div className="event-signup">
          <p className="event-signup--price">{`${priceDescription} • $${Number(price).toFixed(2)}`}</p>
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
        </div>
      </CardText>
    </Card>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
};

export default EventPage;
