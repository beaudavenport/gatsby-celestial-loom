import './layout.scss';

import Media from 'react-media';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import NavDrawer from './NavDrawer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
    render={data => (
      <div>
        <NavDrawer className="desktop-nav-drawer" title={data.site.siteMetadata.title} defaultMedia="desktop">
          {children}
        </NavDrawer>
        <NavDrawer className="mobile-nav-drawer" title={data.site.siteMetadata.title} defaultMedia="mobile">
          {children}
        </NavDrawer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
