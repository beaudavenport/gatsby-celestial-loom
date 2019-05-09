import { Link } from 'gatsby';
import { ListItem } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const ToolboxRow = ({
  path, title, excerpt, avatar,
}) => (
  <ListItem
    primaryTextStyle={{ fontWeight: 'bold' }}
    primaryText={title}
    secondaryText={excerpt}
    leftAvatar={avatar}
    component={Link}
    to={path}
  />
);

ToolboxRow.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ToolboxRow;
