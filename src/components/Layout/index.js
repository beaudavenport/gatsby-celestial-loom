import '../main.scss';

import {
  Cell, FontIcon, ListItem,
} from 'react-md';
import { Grid, GridCell } from "@react-md/utils"
import { Configuration, ConfigurationProps } from "@react-md/layout";

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
      key={route.title}
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
  <Configuration>
    <SEOAndScripts
      title={seoTitle}
      description={seoDescription || ''}
      image={seoImage}
      pathname={seoPathname}
      article={isArticle}
    />
    <div>hello world</div>
    <div>{seoTitle}</div>
    <Grid style={{ maxWidth: 1100 }} noSpacing>
      <GridCell className="main-contents" size={8}>
        {children}
      </GridCell>
    </Grid>
    {/* 
    <Grid style={{ maxWidth: 1100 }} noSpacing>
      <GridCell className="main-contents" size={8}>
        {children}
      </GridCell>
      <GridCell size={4} tabletSize={8} className="sidebar-contents">
        {sidebarChildren}
      </GridCell>
    </Grid>
    <Footer /> */}
  </Configuration>
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
