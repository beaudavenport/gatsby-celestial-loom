import React from 'react';
import PropTypes from 'prop-types';
import { Card, Media, Button } from 'react-md';

function EventPage(props) {
  const {
    title, image, eventDate, price, html,
  } = props;
  return (
    <Card>
      <Media>
        <img src={image} alt="event" />
      </Media>
      <h2>
        {title}
      </h2>
      <h3>
        {eventDate}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>{price}</p>
      <Button raised primary>
          Share
      </Button>
      <Button raised>
          Learn More
      </Button>
    </Card>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default EventPage;
