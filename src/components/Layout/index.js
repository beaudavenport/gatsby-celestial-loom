import '../main.scss';
import { Grid, GridCell } from "@react-md/utils"
import PropTypes from 'prop-types';
import React from 'react';
import {
  DEFAULT_PHONE_LAYOUT,
  Layout,
  useLayoutNavigation,
  Configuration
} from "@react-md/layout";
import { Link } from 'gatsby';
import { FontIcon } from '@react-md/icon';

import Footer from '../Footer';
import HeaderCart from '../HeaderCart';
import HeaderSearch from '../HeaderSearch';
import SEOAndScripts from '../SEOAndScripts';

const navItems = {
  "/": { itemId: "/", children: "Home", to: '/', parentId: null, leftAddon: <FontIcon className='nav-icon'>home</FontIcon> },
  "/info": { itemId: "/getting-started", children: "Getting Started", to: '/getting-started', parentId: null, leftAddon: <FontIcon className='nav-icon'>info</FontIcon> },
  "/posts": { itemId: "/posts", children: "Posts", to: '/posts', parentId: null, leftAddon: <FontIcon className='nav-icon'>create</FontIcon> },
  "/events": { itemId: "/events", children: "Events", to: '/events', parentId: null, leftAddon: <FontIcon className='nav-icon'>event</FontIcon> },
  "/services": { itemId: "/services", children: "Services", to: '/services', parentId: null, leftAddon: <FontIcon className='nav-icon'>shopping_cart</FontIcon> },
  "/toolbox": { itemId: "/toolbox", children: "Astro Toolbox", to: '/toolbox', parentId: null, leftAddon: <FontIcon className='nav-icon'>build</FontIcon> }
}

const SiteLayout = ({
  jumbotron,
  children,
  sidebarChildren,
  title,
  seoTitle,
  seoDescription,
  seoImage,
  seoPathname,
  isArticle,
  pageProps
}) => {
  const { location } = pageProps;
  return (
    <Configuration>
      <Layout
        id="configurable-layout"
        title={title}
        navHeaderTitle="The Celestial Loom"
        phoneLayout={DEFAULT_PHONE_LAYOUT}
        tabletLayout={"temporary"}
        landscapeTabletLayout={"temporary"}
        desktopLayout={"temporary"}
        treeProps={{
          ...useLayoutNavigation(navItems, location?.pathname, Link),
          style: { backgroundColor: "#2f2f2f", color: "white"}
        }}
        appBarProps={{
          children: 
            <div className="header-icons-container">
              <HeaderCart />
              <HeaderSearch />
            </div>
        }}
      >
        <SEOAndScripts
          title={seoTitle}
          description={seoDescription || ''}
          image={seoImage}
          pathname={seoPathname}
          article={isArticle}
        />
        {jumbotron}
        <Grid style={{ maxWidth: 1100, margin: "0 auto" }}>
          <GridCell className="main-contents" colSpan={8}>
            {children}
          </GridCell>
          <GridCell colSpan={4} className="sidebar-contents">
            {sidebarChildren}
          </GridCell>
        </Grid>
        <Footer />
      </Layout>
    </Configuration>
  )
};

SiteLayout.propTypes = {
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

SiteLayout.defaultProps = {
  jumbotron: null,
  seoTitle: null,
  seoDescription: null,
  seoImage: null,
  seoPathname: null,
  isArticle: false,
};

export default SiteLayout;
