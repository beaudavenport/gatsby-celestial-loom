import '../main.scss';

import {
  Cell, FontIcon, Grid, ListItem, NavigationDrawer,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import HeaderCart from '../HeaderCart';
import HeaderSearch from '../HeaderSearch';
import SEOAndScripts from '../SEOAndScripts';

const navItems = [
  { icon: 'home', to: '/', title: 'Home' },
  { icon: 'info', to: '/getting-started', title: 'Getting Started' },
  { icon: 'create', to: '/posts', title: 'Posts' },
  { icon: 'event', to: '/events', title: 'Events' },
  { icon: 'shopping_cart', to: '/services', title: 'Services' },
  { icon: 'build', to: '/toolbox', title: 'Astro Toolbox' },
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
  jumbotron,
  children,
  sidebarChildren,
  title,
  seoTitle,
  seoDescription,
  seoImage,
  seoPathname,
  isArticle,
}) => (
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
    <SEOAndScripts
      title={seoTitle}
      description={seoDescription || ''}
      image={seoImage}
      pathname={seoPathname}
      article={isArticle}
    />
    {jumbotron}
    <Grid style={{ maxWidth: 1100 }} noSpacing>
      <Cell className="main-contents" size={8}>
        {children}
      </Cell>
      <Cell size={4} tabletSize={8} className="sidebar-contents">
        {sidebarChildren}
      </Cell>
    </Grid>
    <Footer />
  </NavigationDrawer>
);

Layout.propTypes = {
  jumbotron: PropTypes.node,
  children: PropTypes.node.isRequired,
  sidebarChildren: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoImage: PropTypes.string,
  seoPathname: PropTypes.string,
  isArticle: PropTypes.bool,
};

Layout.defaultProps = {
  jumbotron: null,
  seoTitle: null,
  seoDescription: null,
  seoImage: null,
  seoPathname: null,
  isArticle: false,
};

export default Layout;
