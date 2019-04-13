import { Paper, Button } from 'react-md';
import React from 'react';

import Astroglobe from '../../images/astroglobe.jpg';

const Jumbotron = () => (
  <Paper
    style={{
      background: `url(${Astroglobe})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      padding: 25,
      minHeight: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 10,
    }}
    zDepth={0}
  >
    <div>
      <p style={{
        fontStyle: 'italic', fontSize: '3rem', lineHeight: '3rem', color: 'white', fontFamily: 'Berkshire Swash',
      }}
      >
The Celestial Loom
      </p>
      <p style={{
        fontStyle: 'italic', fontSize: '2rem', lineHeight: '2rem', color: 'white', fontFamily: 'Berkshire Swash',
      }}
      >
Astrological Services
      </p>
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
  </Paper>
);

export default Jumbotron;
