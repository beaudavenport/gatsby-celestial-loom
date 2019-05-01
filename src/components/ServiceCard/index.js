import { Card, CardText } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Title } from '../Common';
import WesternChart from '../../images/western-chart.jpg';
import getOrigin from '../../helpers/originService';

const ServiceCard = ({
  path, title, origin = 'Western', price, excerpt,
}) => {
  const { color, icon } = getOrigin(origin);

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Card style={{ backgroundColor: 'white' }}>
        <div style={{
          background: `url(${WesternChart})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '75px',
          padding: 0,
        }}
        >
          <div style={{
            background: 'rgba(39,62,84,0.75)',
            overflow: 'hidden',
            height: '75px',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            justifyContent: 'center',
          }}
          >
            <p style={{
              color: 'white', fontSize: '1.3rem', fontWeight: 'bold', opacity: 0.9,
            }}
            >
              Western Astrology
            </p>
          </div>
        </div>
        <CardText>
          <Title>{title}</Title>
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
