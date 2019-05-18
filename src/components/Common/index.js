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

const BigSubtitle = ({ children }) => (
  <h4 className="subtitle" style={{ fontSize: '1.5rem' }}>{children}</h4>
);

BigSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subheader = ({ children }) => (
  <p className="subheader">{children}</p>
);

Subheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const BigSubheader = ({ children }) => (
  <p className="subheader" style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}>{children}</p>
);

BigSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const JumboSubheader = ({ children }) => (
  <p className="subheader" style={{ fontSize: '2rem', lineHeight: '2.5rem' }}>{children}</p>
);

JumboSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const Caption = ({ children }) => (
  <p className="caption">{children}</p>
);

Caption.propTypes = {
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

const ForwardLink = ({ to, title }) => (
  <div className="back-link--container">
    <TouchableLink to={to}>
      <div className="flex-center">
        <p className="back-title">{title}</p>
        <FontIcon style={{ color: '#ec6602', fontSize: '2rem', marginLeft: 5 }}>arrow_forward</FontIcon>
      </div>
    </TouchableLink>
  </div>
);

ForwardLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ContentWithIcon = ({ fontIconName, fontIconStyle, children }) => (
  <div className="content-with-icon">
    <FontIcon style={{ marginRight: 5, ...fontIconStyle }}>{fontIconName}</FontIcon>
    {children}
  </div>
);

ContentWithIcon.propTypes = {
  fontIconName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  fontIconStyle: PropTypes.object, // eslint-disable-line
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
  BigSubtitle,
  HeyMom,
  Subheader,
  BigSubheader,
  JumboSubheader,
  BackLink,
  ForwardLink,
  ContentWithIcon,
  Caption,
};
