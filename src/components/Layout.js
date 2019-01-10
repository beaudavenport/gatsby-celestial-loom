import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { NavigationDrawer, FontIcon } from 'react-md';
import Header from './header';
import './layout.scss';

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
      <NavigationDrawer
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        position="left"
        defaultVisible={false}
        temporaryIcon={(<FontIcon iconClassName="material-icons">menu</FontIcon>)}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
        />
        <div>
          <div
            style={{
              margin: 'auto',
            }}
          >
            {children}
          </div>
        </div>
      </NavigationDrawer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
