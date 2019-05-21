import { Card, CardText, Divider } from 'react-md';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Title } from '../Common';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';
import getOrigin from '../../helpers/originService';

const ServiceCard = ({
  path, title, origin = 'Western', onlinePrice, excerpt, showPrices,
}) => {
  const { backgroundUrl, overlayColor } = getOrigin(origin);

  return (
    <TouchableLink to={path}>
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
        <div style={{ paddingTop: 15, paddingBottom: 15 }} dangerouslySetInnerHTML={{ __html: excerpt }} />
        { showPrices && (
        <Fragment>
          <Divider />
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: '10px 0 0 10px', alignItems: 'center',
          }}
          >
            <div>
              <p className="event-signup-thumbnail--price-description" style={{ color: 'rgba(0, 0, 0, 0.54)', marginBottom: 2, fontSize: '.9rem' }}>Starting at</p>
              <p className="event-signup-thumbnail--price" style={{ fontSize: '1.5rem' }}>{`$${Number(onlinePrice).toFixed(2)}`}</p>
            </div>
            <TextWithChevron text="Order Now" />
          </div>
        </Fragment>
        )}
      </CardText>
    </TouchableLink>
  );
};

ServiceCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onlinePrice: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  showPrices: PropTypes.bool,
};

ServiceCard.defaultProps = {
  showPrices: true,
};

export default ServiceCard;
