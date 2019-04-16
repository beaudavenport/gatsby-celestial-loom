import { Paper, Button } from 'react-md';
import React from 'react';

import Astroglobe from '../../images/astroglobe.jpg';
import CelestialLogo from '../../images/celestial-logo.png';

const Jumbotron = () => (
  <Paper
    style={{
      background: `url(${Astroglobe})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      padding: '25px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 10,
    }}
    zDepth={0}
  >
    <div style={{
      width: '90%', maxWidth: 1100, display: 'flex', flexDirection: 'column', minHeight: 250, margin: '0 auto', justifyContent: 'space-between',
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={CelestialLogo} alt="Celestial Loom Logo" />
        <div>
          <p style={{
            fontStyle: 'italic', fontSize: '4rem', lineHeight: '4rem', color: 'white', fontFamily: 'Berkshire Swash',
          }}
          >
The Celestial Loom
          </p>
          <p style={{
            fontStyle: 'italic', fontSize: '2.5rem', lineHeight: '2.5rem', color: 'white', fontFamily: 'Berkshire Swash',
          }}
          >
Astrological Services
          </p>
        </div>
      </div>
      <div>
        <p style={{
          fontStyle: 'italic', textAlign: 'right', fontSize: 'large', color: 'white', fontFamily: 'Martel',
        }}
        >
            Nikki Davenport, Licensed Astrologer,
            brings the wisdom of the zodiac to your door (and inbox!)
        </p>
        <div style={{ textAlign: 'right' }}>
          <Button flat primary swapTheming style={{ fontStyle: 'bold', fontFamily: 'Martel', marginRight: 10 }}>Get My Chart</Button>
        </div>
      </div>
    </div>
  </Paper>
);

export default Jumbotron;
