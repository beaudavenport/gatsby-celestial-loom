import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  NavigationDrawer, FontIcon, Media, Paper,
} from 'react-md';
import Nikki from '../images/nikki.jpg';

import './layout.scss';

const navItems = [
  { to: '/posts', children: 'Posts' },
  { to: '/events', children: 'Events' },
  { to: '/services', children: 'Services' },
];

const DrawerHeader = () => (
  <div style={{ backgroundColor: 'rgb(47, 47, 47)', paddingTop: '50px', borderRight: '1px solid white' }}>
    <div style={{ width: '60%', margin: '0 auto', padding: '20px' }}>
      <Media aspectRatio="1-1" style={{ borderRadius: '50%', border: '2px solid white' }}>
        <img src={Nikki} alt="at da club" />
      </Media>
    </div>
    <Paper style={{ padding: '10px' }}>
      <p style={{ color: 'white' }}>
          Nikki Davenport, astrological consultant, has been a professional
          astrologer for over 35 years.
      </p>
    </Paper>
  </div>
);

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
        drawerHeader={<DrawerHeader />}
        position="left"
        defaultVisible={false}
        temporaryIcon={(<FontIcon iconClassName="material-icons">menu</FontIcon>)}
        drawerStyle={{ backgroundColor: 'white' }}
        toolbarTitle="The Celestial Loom"
        toolbarTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
        toolbarSingleColor
        toolbarStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
        navItems={navItems.map(({ divider, subheader, ...route }) => {
          if (divider || subheader) {
            return { divider, subheader, ...route };
          }

          return <Link {...route} />;
        })}
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
        {children}
      </NavigationDrawer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
