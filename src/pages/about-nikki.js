import { GridCell, Grid } from '@react-md/utils';
import { Card } from '@react-md/card';
import React, { Fragment } from 'react';

import { BackLink, BigSubheader } from '../components/Common';
import FacebookIcon from '../images/iconmonstr-facebook-4.svg';
import Layout from '../components/Layout';
import Nikki from '../images/nikki.jpg';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import TwitterIcon from '../images/iconmonstr-twitter-4.svg';

const AboutNikki = (props) => (
  <Layout
    title="About Nikki"
    sidebarChildren={(
      <Fragment>
        <div className="archive--container">
          <SidebarHeader title="The Astrologer is In!" />
          <div style={{ padding: '20px 10px' }}>
            <p style={{ fontWeight: 'bold' }}>
              Questions? Reach out to Nikki directly at
              <a href="mailto: nikiastro@att.net"> nikiastro@att.net!</a>
            </p>
          </div>
        </div>
        <SidebarContents eventsQuantity={2} postsQuantity={2} />
      </Fragment>
    )}
    pageProps={props}
  >
    <BackLink to="/" title="Home" />
    <Grid>
      <GridCell colSpan={12}>
        <h1 className='header'>Meet Nikki, your guide to the Zodiac!</h1>
        <Card>
          <Grid>
            <GridCell colSpan={6}>
              <div style={{ width: '80%', margin: '0 auto' }}>
                <img src={Nikki} alt="at da club" style={{ maxWidth: '100%' }} />
              </div>
            </GridCell>
            <GridCell colSpan={6}>
              <p>
              Currently practicing and teaching in St. Louis, Missouri, Nikki
             is a board member of the Astrological Association of St. Louis.
              Her Astrological view is from a spiritual perspective.
               She has a multi-cultural approach to the science of astrology,
                incorporating Western, Hindu, Mayan, Native American, Tibetan,
                and Chinese astrological cultures and services.
              </p>
              <BigSubheader>Stay connected on Facebook and Twitter!</BigSubheader>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <a href="https://www.facebook.com/celestialloom/">
                  <img src={FacebookIcon} alt="Facebook Icon" style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://twitter.com/nikiastro">
                  <img src={TwitterIcon} alt="Twitter Icon" style={{ width: '50px', height: '50px' }} />
                </a>
              </div>
            </GridCell>
          </Grid>
        </Card>
      </GridCell>
    </Grid>
  </Layout>
);

export default AboutNikki;
