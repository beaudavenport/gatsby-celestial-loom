import { CardContent } from "@react-md/card";
import { Divider } from "@react-md/divider";

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { TitleH2 } from '../Common';
import OriginHeader from '../OriginHeader';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const ServiceCard = ({
  path, title, origin = 'Western', onlinePrice, excerpt, showPrices,
}) => (
  <TouchableLink to={path}>
    <OriginHeader origin={origin} />
    <CardContent>
      <TitleH2>{title}</TitleH2>
      <div className="service--excerpt body-copy" dangerouslySetInnerHTML={{ __html: excerpt }} />
      { showPrices && (
        <Fragment>
          <Divider />
          <div className="service--prices--container">
            <div>
              <p className="service-price--description">Starting at</p>
              <p className="service-price--price">{`$${Number(onlinePrice).toFixed(2)}`}</p>
            </div>
            <TextWithChevron text="Order Now" />
          </div>
        </Fragment>
      )}
    </CardContent>
  </TouchableLink>
);

ServiceCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onlinePrice: PropTypes.number,
  excerpt: PropTypes.string.isRequired,
  showPrices: PropTypes.bool,
};

ServiceCard.defaultProps = {
  showPrices: true,
  onlinePrice: 0,
};

export default ServiceCard;
