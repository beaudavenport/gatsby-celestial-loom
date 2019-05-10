import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ children }) => (
  <h2 className="title">{children}</h2>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subtitle = ({ children }) => (
  <h4 className="subtitle">{children}</h4>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const HeyMom = ({ children }) => (
  <p style={{ fontSize: '1rem', color: 'red' }}>
    <span style={{ fontWeight: 'bold' }}>HEY MOM: </span>
    {children}
  </p>
);

export { Title, Subtitle, HeyMom };