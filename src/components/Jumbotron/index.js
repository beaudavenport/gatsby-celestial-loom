import React from 'react';
import {
  Paper, Grid, Cell, Button,
} from 'react-md';
import Astroglobe from '../../images/astroglobe.jpg';

const Jumbotron = () => (
  <Paper style={{
    background: `url(${Astroglobe})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    padding: '100px 50px 0 50px',
  }}
  >
    <Grid style={{ maxWidth: 900 }}>
      <Cell size={6}>
        <p style={{
          fontStyle: 'italic', fontSize: 'xx-large', color: 'white', fontFamily: 'Berkshire Swash',
        }}
        >
The Celestial Loom
        </p>
        <p style={{
          fontStyle: 'italic', fontSize: 'x-large', color: 'white', fontFamily: 'Berkshire Swash',
        }}
        >
Astrological Services
        </p>
      </Cell>
      <Cell size={6}>
        <p style={{
          fontStyle: 'italic', textAlign: 'right', fontSize: 'large', color: 'white', fontFamily: 'Martel',
        }}
        >
            Nikki Davenport, Licensed Astrologer,
            brings the wisdom of the zodiac to your door (and inbox!)
        </p>
        <div style={{ textAlign: 'right' }}>
          <Button flat primary swapTheming style={{ fontStyle: 'bold', fontFamily: 'Martel' }}>Get My Chart</Button>
        </div>
      </Cell>
    </Grid>
  </Paper>
);

export default Jumbotron;
