import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, Media, Button, CardTitle,
} from 'react-md';

function EventPage(props) {
  const {
    title, image, eventDate, price, html,
  } = props;
  return (
    <Card style={{ width: '80%', margin: '0 auto' }}>
      <Media>
        <img src={image} alt="event" />
      </Media>
      <CardTitle title={title} subtitle={eventDate} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>{price}</p>
        <Button raised primary>
          Share
        </Button>
        <Button raised>
          Learn More
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
};

export default EventPage;
