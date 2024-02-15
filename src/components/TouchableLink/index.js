import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const TouchableLink = ({to, style, children, className}) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <div className={`touchable-link ${className}`} style={{ ...style }}>
      {children}
    </div>
  </Link>
);

TouchableLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
};

TouchableLink.defaultProps = {
  className: '',
  style: {},
};
export default TouchableLink;
