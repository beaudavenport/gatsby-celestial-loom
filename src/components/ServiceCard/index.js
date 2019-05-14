import { Card, CardText } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Title } from '../Common';
import getOrigin from '../../helpers/originService';

const ServiceCard = ({
  path, title, origin = 'Western', onlinePrice, inPersonPrice, excerpt,
}) => {
  const { backgroundUrl, overlayColor } = getOrigin(origin);

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Card style={{ backgroundColor: 'white' }}>
        <div style={{
          background: `url(${backgroundUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '90px',
          padding: 0,
        }}
        >
          <div style={{
            background: overlayColor,
            overflow: 'hidden',
            height: '90px',
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
              {origin}
            </p>
          </div>
        </div>
        <CardText>
          <Title>{title}</Title>
          <p>{excerpt}</p>
          <strong>{`Online: $${Number(onlinePrice).toFixed(2)}`}</strong>
          <strong>{`In-Person: $${Number(inPersonPrice).toFixed(2)}`}</strong>
        </CardText>
      </Card>
    </Link>
  );
};

ServiceCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onlinePrice: PropTypes.string.isRequired,
  inPersonPrice: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServiceCard;
