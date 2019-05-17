import { Button } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const AddToCartButton = ({
  title, price, description, style, slug,
}) => (
  <Button
    raised
    primary
    style={style}
    data-item-id={slug}
    className="snipcart-add-item"
    data-item-name={title}
    data-item-price={price}
    data-item-description={description}
    data-item-url={slug}
    data-item-custom1-name="Name*"
    data-item-custom1-required="true"
    data-item-custom2-name="Month of Birth*"
    data-item-custom2-required="true"
    data-item-custom3-name="Day of Birth*"
    data-item-custom3-required="true"
    data-item-custom4-name="Year of Birth*"
    data-item-custom4-required="true"
    data-item-custom5-name="Time of Birth, if known"
    data-item-custom5-required="false"
    data-item-custom6-name="Birth Location (City, State, Country), if known"
    data-item-custom6-required="false"
  >
    Add to Cart
  </Button>
);

AddToCartButton.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  style: PropTypes.object // eslint-disable-line
};
export default AddToCartButton;
