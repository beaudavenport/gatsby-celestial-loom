import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import TouchableLink from '../TouchableLink';

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

const BigSubheader = ({ children }) => (
  <p className="subheader subheader__big">{children}</p>
);

BigSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subheader = ({ children }) => (
  <p className="subheader">{children}</p>
);

Subheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const BackLink = ({ to, title }) => (
  <div className="back-link--container">
    <TouchableLink to={to}>
      <div className="flex-center">
        <FontIcon style={{ color: '#ec6602', fontSize: '2rem', marginRight: 5 }}>arrow_back</FontIcon>
        <p className="back-title">{title}</p>
      </div>
    </TouchableLink>
  </div>
);

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const HeyMom = ({ children }) => (
  <p style={{ fontSize: '1rem', color: 'red' }}>
    <span style={{ fontWeight: 'bold' }}>HEY MOM: </span>
    {children}
  </p>
);

export {
  Title,
  Subtitle,
  HeyMom,
  BigSubheader,
  Subheader,
  BackLink,
};
