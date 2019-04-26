import { Card, CardText } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import getOrigin from '../helpers/originService';

function ServicePage(props) {
  const {
    title,
    origin = 'Western',
    price,
    html,
    slug,
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
        <Link to={`${slug}/online`}>Buy Online</Link>
        <Link to={`${slug}/in-person`}>Buy In-Person</Link>
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
