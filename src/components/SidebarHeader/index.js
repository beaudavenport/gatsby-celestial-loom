import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = ({ title }) => (
  <div className="sidebar-header">
    <h5 className="sidebar-header--title">
      {title}
    </h5>
  </div>
);

SidebarHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarHeader;
