import { Link } from 'gatsby';
import { ListItemLink } from "@react-md/list";
import PropTypes from 'prop-types';
import React from 'react';

const ToolboxRow = ({
  path, title, excerpt, avatar,
}) => (
  <ListItemLink
    primaryTextStyle={{ fontWeight: 'bold' }}
    primaryText={title}
    secondaryText={excerpt}
    leftAddon={avatar}
    leftAddonType="avatar"
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
