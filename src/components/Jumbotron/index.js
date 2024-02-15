import React from 'react';

import { ForwardLink } from '../Common';
import Astroglobe from '../../images/astroglobe.jpg';

const Jumbotron = () => (
  <div className="jumbotron--bg" style={{ backgroundImage: `url(${Astroglobe})` }} zDepth={0}>
    <div className="jumbotron--container">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
        <div>
          <h1 className="jumbotron--title">The Celestial Loom</h1>
          <p className="jumbotron--subtitle">Astrological Services</p>
        </div>
      </div>
      <div className="jumbotron--subtext--container">
        <p className="jumbotron--subtext">
            Nikki Davenport, Astrological Consultant,
            weaves timeless wisdom with modern service.
        </p>
        <div style={{ textAlign: 'right' }}>
          <ForwardLink to="/getting-started" title="Get Started" alignRight titleStyle={{ fontSize: '1.5rem' }} />
        </div>
      </div>
    </div>
  </div>
);

export default Jumbotron;
