import { Link } from 'gatsby';
import { injectInk } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const TouchableLink = ({
  to, ink, style, children, className,
}) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <div className={`touchable-link ${className}`} style={{ ...style }}>
      {ink}
      {children}
    </div>
  </Link>
);

TouchableLink.propTypes = {
  to: PropTypes.string.isRequired,
  ink: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
};

TouchableLink.defaultProps = {
  className: '',
  style: {},
};
export default injectInk(TouchableLink);
