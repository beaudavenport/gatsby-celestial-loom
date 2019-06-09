import { CardText, Divider } from 'react-md';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Title } from '../Common';
import OriginHeader from '../OriginHeader';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const ServiceCard = ({
  path, title, origin = 'Western', onlinePrice, excerpt, showPrices,
}) => (
  <TouchableLink to={path}>
    <OriginHeader origin={origin} />
    <CardText>
      <Title>{title}</Title>
      <div className="service--excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      { showPrices && (
        <Fragment>
          <Divider />
          <div className="service--prices--container">
            <div>
              <p className="service--price--description">Starting at</p>
              <p className="service--price--price">{`$${Number(onlinePrice).toFixed(2)}`}</p>
            </div>
            <TextWithChevron text="Order Now" />
          </div>
        </Fragment>
      )}
    </CardText>
  </TouchableLink>
);

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
