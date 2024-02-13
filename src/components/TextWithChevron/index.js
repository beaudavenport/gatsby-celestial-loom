import { FontIcon } from '@react-md/icon';
import PropTypes from 'prop-types';
import React from 'react';

const TextWithChevron = ({ text }) => (
  <div className="chevron-text">
    <p className="chevron-text--text">{text}</p>
    <FontIcon className="chevron-text--chevron">chevron_right</FontIcon>
  </div>
);

TextWithChevron.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextWithChevron;
