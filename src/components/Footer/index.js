import { Grid, GridCell } from "@react-md/utils"
import { FontIcon } from "@react-md/icon"

import { Link } from 'gatsby';
import React from 'react';

import { FacebookIcon, Subheader, TwitterIcon } from '../Common';
import CelestialLogo from '../../images/celestial-logo-no-bg.png';

const Footer = () => (
  <Grid className="footer--grid">
    <GridCell colSpan={6} tabletSize={8}>
      <div className="flex-center">
        <div style={{ marginRight: 10 }}>
          <img src={CelestialLogo} alt="Celestial Loom Logo" style={{ width: 50 }} />
        </div>
        <h3 className="footer--title">The Celestial Loom</h3>
      </div>
      <div className="content-container">
        <p className="footer--text">
&copy;
          {` Copyright ${new Date().getFullYear()}, Nikki Davenport.`}
        </p>
        <p className="footer--text">Cover photography by Photo by Anastasia Dulgier on Unsplash.</p>
        <p className="footer--text">Built with Gatsby and Netflify CMS.</p>
      </div>
    </GridCell>
    <GridCell colSpan={6} tabletSize={8}>
      <Grid>
        <GridCell colSpan={6} tabletSize={4}>
          <Subheader>Links</Subheader>
          <ul className="footer--list">
            <li className="footer--line-item">
              <Link to="/home/" style={{ color: 'white' }}>Home</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/about-nikki/" style={{ color: 'white' }}>About Nikki</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/getting-started/" style={{ color: 'white' }}>Getting Started</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/posts/" style={{ color: 'white' }}>Posts</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/events/" style={{ color: 'white' }}>Events</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/services/" style={{ color: 'white' }}>Services</Link>
            </li>
            <li className="footer--line-item">
              <Link to="/toolbox/" style={{ color: 'white' }}>Astro Toolbox</Link>
            </li>
          </ul>
        </GridCell>
        <GridCell colSpan={6} tabletSize={4}>
          <Subheader>Contact</Subheader>
          <ul className="footer--list">
            <li>
              <div className="footer--link">
                <FontIcon style={{ color: 'white' }}>email</FontIcon>
                <a className="footer--link__link" href="mailto: nikiastro@att.net">
              Email Nikki
                </a>
              </div>
            </li>
            <li>
              <div className="footer--link">
                <FacebookIcon height={20} width={20} fill="white" />
                <a className="footer--link__link" href="https://www.facebook.com/celestialloom/">
              Facebook
                </a>
              </div>
            </li>
            <li>
              <div className="footer--link">
                <TwitterIcon height={20} width={20} fill="white" />
                <a className="footer--link__link" href="https://twitter.com/nikiastro">
              Twitter
                </a>
              </div>
            </li>
          </ul>
        </GridCell>
      </Grid>
    </GridCell>
  </Grid>
);

export default Footer;
