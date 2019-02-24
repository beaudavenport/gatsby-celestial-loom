import { Link } from 'gatsby';
import { ListItem } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const ToolboxRow = ({
  path, title, excerpt, icon,
}) => (
  <ListItem
    primaryText={title}
    secondaryText={excerpt}
    leftIcon={<p style={{ fontSize: '30px' }}>{icon}</p>}
    component={Link}
    to={path}
  />
);

ToolboxRow.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ToolboxRow;
