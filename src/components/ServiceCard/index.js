import { Card, CardText } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ServiceCard = ({
  path, image, title, excerpt,
}) => (
  <Link to={path}>
    <Card style={{ backgroundColor: 'white' }}>
      <div style={{ backgroundColor: 'black', padding: '10px' }}>
        <h3 style={{ color: 'white', fontSize: '15px' }}>
          <span style={{ fontSize: '50px' }}>☿</span>
          WESTERN
        </h3>
      </div>
      <CardText>
        <h3>{title}</h3>
      </CardText>
    </Card>
  </Link>
);

ServiceCard.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServiceCard;
