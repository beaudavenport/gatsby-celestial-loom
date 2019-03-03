import { Cell, Grid, Paper } from 'react-md';
import React from 'react';

import Layout from '../components/Layout';
import Nikki from '../images/nikki.jpg';
import TwitterIcon from '../images/iconmonstr-twitter-4.svg';
import FacebookIcon from '../images/iconmonstr-facebook-4.svg';

const AboutNikki = () => (
  <Layout>
    <Paper style={{ backgroundColor: 'white' }}>
      <Grid>
        <Cell size={6}>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <img src={Nikki} alt="at da club" style={{ maxWidth: '100%' }} />
          </div>
        </Cell>
        <Cell size={6}>
          <p>
              Currently practicing and teaching in St. Louis, Missouri, Nikki
             is a board member of the Astrological Association of St. Louis.
              Her Astrological view is from a spiritual perspective.
               She has a multi-cultural approach to the science of astrology,
                incorporating Western, Hindu, Mayan, Native American, Tibetan,
                and Chinese astrological cultures and services.
          </p>
          <a href="https://www.facebook.com/celestialloom/">
            <img src={FacebookIcon} alt="Facebook Icon" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://twitter.com/nikiastro">
            <img src={TwitterIcon} alt="Twitter Icon" style={{ width: '50px', height: '50px' }} />
          </a>
        </Cell>
      </Grid>
    </Paper>
  </Layout>
);

export default AboutNikki;
