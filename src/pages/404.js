import React from 'react';
import { BackLink } from '../components/Common';
import CelestialLogo from '../images/celestial-logo-no-bg.png';

const NotFoundPage = (props) => (
  <div className='notfound--grid'>
    <div className="flex-center">
      <div style={{ marginRight: 10 }}>
        <img src={CelestialLogo} alt="Celestial Loom Logo" style={{ width: 50 }} />
      </div>
      <h3 className="footer--title">The Celestial Loom</h3>
    </div>
    <div className="content-container">
      <h1 className="footer--text">
        Page "Void of Course" (not found!)
      </h1>
      <p className='footer--text'>Follow the zodiac back home to get started!</p>
      <BackLink to="/" title="Home" />
    </div>
  </div>
);

export default NotFoundPage;
