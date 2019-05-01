import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ children }) => (
  <h2 className="title">{children}</h2>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subtitle = ({ children }) => (
  <h3 className="subtitle">{children}</h3>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export { Title, Subtitle };
