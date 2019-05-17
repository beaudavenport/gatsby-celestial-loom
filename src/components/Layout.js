import './layout.scss';

import {
  Cell, FontIcon, Grid, ListItem, NavigationDrawer,
} from 'react-md';
import { StaticQuery, graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderCart from './HeaderCart';
import HeaderSearch from './HeaderSearch';

const navItems = [
  { icon: 'home', to: '/', title: 'Home' },
  { icon: 'create', to: '/posts', title: 'Posts' },
  { icon: 'event', to: '/events', title: 'Events' },
  { icon: 'shopping_cart', to: '/services', title: 'Services' },
  { icon: 'work', to: '/toolbox', title: 'Astro Toolbox' },
  { icon: 'info', to: '/getting-started', title: 'Astrology 101' },
];

const getNavItem = ({ divider, subheader, ...route }) => {
  if (divider || subheader) {
    return { divider, subheader, ...route };
  }

  return (
    <ListItem
      primaryText={route.title}
      primaryTextStyle={{ color: 'white' }}
      leftIcon={<FontIcon style={{ color: 'white' }}>{route.icon}</FontIcon>}
      component={Link}
      to={route.to}
    />
  );
};

const DrawerTitle = () => (
  <div style={{
    height: 64, paddingTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 105, 0)',
  }}
  >
    <h1 className="md-headline" style={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic', color: 'white' }}>The Celestial Loom</h1>
  </div>
);

const Layout = ({
  jumbotron, children, sidebarChildren, title,
}) => (
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
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        position="left"
        drawerStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
        defaultVisible={false}
        temporaryIcon={(<FontIcon iconClassName="material-icons">menu</FontIcon>)}
        navStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
        toolbarTitle={title}
        toolbarActions={(
          <div className="header-icons-container">
            <HeaderCart />
            <HeaderSearch />
          </div>
        )}
        drawerHeader={<DrawerTitle />}
        toolbarTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
        drawerTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
        toolbarSingleColor
        toolbarStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
        navItems={navItems.map(getNavItem)}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="Y2NiNmUxNzEtMGNlZS00NTlkLTg1NDEtZjJjMGRjMWNjZThjNjM2ODU2Njg0NDE5MzU2MDg3" id="snipcart" />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Helmet>
        {jumbotron}
        <Grid style={{ maxWidth: 1100 }} noSpacing>
          <Cell className="main-contents" size={8}>
            {children}
          </Cell>
          <Cell size={4} tabletSize={8} className="sidebar-contents">
            {sidebarChildren}
          </Cell>
        </Grid>
        <div style={{ backgroundColor: 'rgb(47, 47, 47)', padding: 30 }}>
          <h6 style={{ textAlign: 'center', color: 'white', marginBottom: 0 }}>Copyright 2019, The Celestial Loom. Cover photography by Photo by Anastasia Dulgier on Unsplash. Built with Gatsby and Netflify CMS.</h6>
        </div>
      </NavigationDrawer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarChildren: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
