import { Card, CardText } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import getOrigin from '../../helpers/originService';

const ServiceCard = ({
  path, title, origin = 'Western', price, excerpt,
}) => {
  const { color, icon } = getOrigin(origin);

  return (
    <Link to={path}>
      <Card style={{ backgroundColor: 'white' }}>
        <div style={{ backgroundColor: color, padding: '10px' }}>
          <h3 style={{ color: 'white', fontSize: '15px' }}>
            <span style={{ fontSize: '50px' }}>{icon}</span>
            {origin.toUpperCase()}
          </h3>
        </div>
        <CardText>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <strong>{`$${Number(price).toFixed(2)}`}</strong>
        </CardText>
      </Card>
    </Link>
  );
};

ServiceCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServiceCard;
