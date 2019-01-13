import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  NavigationDrawer, FontIcon, Media, CardText, ListItem, Drawer, Card,
} from 'react-md';
import Nikki from '../images/nikki.jpg';

import './layout.scss';

const navItems = [
  { to: '/posts', children: 'Posts' },
  { to: '/events', children: 'Events' },
  { to: '/services', children: 'Services' },
];

const DrawerHeader = () => (
  <Card style={{
    width: '80%', margin: '0 auto',
  }}
  >
    <div style={{ width: '60%', margin: '0 auto', padding: '20px' }}>
      <Media aspectRatio="1-1" style={{ borderRadius: '50%', border: '2px solid white' }}>
        <img src={Nikki} alt="at da club" />
      </Media>
    </div>
    <CardText>
      <p style={{ fontSize: 'smaller', color: 'black', textAlign: 'center' }}>
          Nikki Davenport, astrological consultant, has been a professional
          astrologer for over 35 years.
      </p>
    </CardText>
  </Card>
);

const Layout = ({ children }) => {
  const { mobile, tablet } = Drawer.getCurrentMedia(Drawer.defaultProps);
  let defaultMedia = 'desktop';
  if (mobile) {
    defaultMedia = 'mobile';
  } else if (tablet) {
    defaultMedia = 'tablet';
  }
  return (
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
          desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          position="left"
          drawerStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
          defaultVisible={false}
          temporaryIcon={(<FontIcon iconClassName="material-icons">menu</FontIcon>)}
          navStyle={{ height: '30%', backgroundColor: 'rgb(47, 47, 47)' }}
          drawerChildren={<DrawerHeader />}
          toolbarTitle="The Celestial Loom"
          toolbarTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
          toolbarSingleColor
          toolbarStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
          defaultMedia={defaultMedia}
          navItems={navItems.map(({ divider, subheader, ...route }) => {
            if (divider || subheader) {
              return { divider, subheader, ...route };
            }

            return (
              <ListItem
                tileStyle={{ color: 'white' }}
                component={Link}
                to={route.to}
              >
                {route.children}
              </ListItem>
            );
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
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
