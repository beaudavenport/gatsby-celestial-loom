import { Button, Card, CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import getOrigin from '../helpers/originService';

function ServicePage(props) {
  const {
    title,
    origin = 'Western',
    price,
    html,
  } = props;
  const { color, icon } = getOrigin(origin);
  return (
    <Card>
      <CardText>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <h3 style={{ backgroundColor: color, color: 'white', fontSize: '15px' }}>
          <span style={{ fontSize: '50px' }}>{icon}</span>
          {origin.toUpperCase()}
        </h3>
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
          data-item-url="/"
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

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default ServicePage;
