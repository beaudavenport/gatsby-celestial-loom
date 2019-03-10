import {
  CardText,
  FontIcon,
  ListItem,
  Media,
  NavigationDrawer,
} from 'react-md';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderSearch from '../HeaderSearch';
import Nikki from '../../images/nikki.jpg';

const navItems = [
  { to: '/posts', children: (<p style={{ color: 'white', fontSize: '14px' }}>Posts</p>) },
  { to: '/events', children: (<p style={{ color: 'white', fontSize: '14px' }}>Events</p>) },
  { to: '/services', children: (<p style={{ color: 'white', fontSize: '14px' }}>Services</p>) },
  { to: '/toolbox', children: (<p style={{ color: 'white', fontSize: '14px' }}>Astro Toolbox</p>) },
];

const DrawerHeader = () => (
  <Link to="/about-nikki">
    <div style={{
      width: '80%', margin: '0 auto',
    }}
    >
      <div style={{ width: '60%', margin: '0 auto', padding: '20px' }}>
        <Media aspectRatio="1-1" style={{ borderRadius: '50%', border: '2px solid #ff8013' }}>
          <img src={Nikki} alt="at da club" />
        </Media>
      </div>
      <CardText>
        <p style={{ fontSize: 'smaller', color: '#ff8013', textAlign: 'center' }}>
          Nikki Davenport, astrological consultant, has been a professional
          astrologer for over 35 years.
        </p>
      </CardText>
    </div>
  </Link>
);

const DrawerTitle = () => (
  <div style={{ paddingTop: '10px', paddingLeft: '10px' }}>
    <h1 className="md-headline" style={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic', color: 'white' }}>The Celestial Loom</h1>
  </div>
);

const NavDrawer = ({
  defaultMedia, children, title, style, className,
}) => {
  console.log('rendered this sumbitch with:', defaultMedia);
  return (
    <NavigationDrawer
      className={className}
      autoclose
      style={style}
      desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      position="left"
      drawerStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
      defaultVisible={false}
      temporaryIcon={(<FontIcon iconClassName="material-icons">menu</FontIcon>)}
      navStyle={{ height: '30%', backgroundColor: 'rgb(47, 47, 47)' }}
      drawerChildren={<DrawerHeader />}
      toolbarTitle={defaultMedia === 'desktop' ? null : 'The Celestial Loom'}
      toolbarActions={<HeaderSearch />}
      drawerHeader={defaultMedia !== 'desktop' ? null : (<DrawerTitle />)}
      toolbarTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
      drawerTitleStyle={{ fontFamily: 'Berkshire Swash', fontStyle: 'italic' }}
      toolbarSingleColor
      toolbarStyle={{ backgroundColor: 'rgb(47, 47, 47)' }}
      defaultMedia={defaultMedia}
      navItems={navItems.map(({ divider, subheader, ...route }) => {
        if (divider || subheader) {
          return { divider, subheader, ...route };
        }

        return (
          <ListItem
            tileStyle={{ color: 'white', textAlign: 'left' }}
            primaryText={route.children}
            style={{ padding: '0px 10px', color: 'white' }}
            component={Link}
            to={route.to}
          />
        );
      })}
    >
      <Helmet
        title={title}
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
      {children}
      <div>
        <hr />
        <h6 style={{ textAlign: 'center' }}>Copyright 2019, The Celestial Loom. Cover photography by Photo by Anastasia Dulgier on Unsplash. Built with Gatsby and Netflify CMS.</h6>
      </div>
    </NavigationDrawer>
  );
};

NavDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  defaultMedia: PropTypes.string.isRequired,
};

export default NavDrawer;
