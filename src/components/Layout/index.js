import '../main.scss';
import { Grid, GridCell } from "@react-md/utils"
import PropTypes from 'prop-types';
import React from 'react';
import { HomeSVGIcon, InfoSVGIcon, CreateSVGIcon, EventSVGIcon, ShoppingCartSVGIcon, BuildSVGIcon } from "@react-md/material-icons";
import {
  DEFAULT_PHONE_LAYOUT,
  Layout,
  useLayoutNavigation,
  Configuration
} from "@react-md/layout";
import { Link } from 'gatsby';

import Footer from '../Footer';
import SEOAndScripts from '../SEOAndScripts';

const navItems = {
  "/": { itemId: "/", children: "Home", to: '/', parentId: null, leftAddon: <HomeSVGIcon /> },
  "/info": { itemId: "/getting-started", children: "Getting Started", to: '/getting-started', parentId: null, leftAddon: <InfoSVGIcon /> },
  "/posts": { itemId: "/posts", children: "Posts", to: '/posts', parentId: null, leftAddon: <CreateSVGIcon /> },
  "/events": { itemId: "/events", children: "Events", to: '/events', parentId: null, leftAddon: <EventSVGIcon /> },
  "/services": { itemId: "/services", children: "Services", to: '/services', parentId: null, leftAddon: <ShoppingCartSVGIcon /> },
  "/toolbox": { itemId: "/toolbox", children: "Astro Toolbox", to: '/toolbox', parentId: null, leftAddon: <BuildSVGIcon /> }
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
}) => {

  return (
    <Configuration>
      <Layout
        id="configurable-layout"
        title={title}
        navHeaderTitle="The Celesial Loom"
        phoneLayout={DEFAULT_PHONE_LAYOUT}
        tabletLayout={"temporary"}
        landscapeTabletLayout={"temporary"}
        desktopLayout={"temporary"}
        treeProps={useLayoutNavigation(navItems, window.location.pathname, Link)}
      >
        <SEOAndScripts
          title={seoTitle}
          description={seoDescription || ''}
          image={seoImage}
          pathname={seoPathname}
          article={isArticle}
        />
        {jumbotron}
        <Grid style={{ maxWidth: 1100 }}>
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
