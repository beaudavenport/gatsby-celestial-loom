import { Card, CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function EventPage(props) {
  const {
    title,
  } = props;
  return (
    <Card>
      <CardText>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
      </CardText>
    </Card>
  );
}

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EventPage;
