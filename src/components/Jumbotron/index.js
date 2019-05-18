import { Paper } from 'react-md';
import React from 'react';

import { ForwardLink } from '../Common';
import Astroglobe from '../../images/astroglobe.jpg';

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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
        <div>
          <h1 style={{
            fontStyle: 'italic', marginTop: 0, marginBottom: 0, fontSize: '3.5rem', lineHeight: '4rem', color: 'white', fontFamily: 'Berkshire Swash',
          }}
          >
The Celestial Loom
          </h1>
          <p style={{
            fontStyle: 'italic', fontSize: '2rem', lineHeight: '2rem', color: 'white', fontFamily: 'Berkshire Swash',
          }}
          >
Astrological Services
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 500, alignSelf: 'flex-end' }}>
        <p style={{
          fontStyle: 'italic', textAlign: 'right', fontSize: 'large', color: 'white', fontFamily: 'Martel',
        }}
        >
            Nikki Davenport, Astrological Consultant,
            weaves timeless wisdom with modern service.
        </p>
        <div style={{ textAlign: 'right' }}>
          <ForwardLink to="/getting-started" title="Get Started" />
        </div>
      </div>
    </div>
  </Paper>
);

export default Jumbotron;
