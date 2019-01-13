import React from 'react';
import {
  Paper, Grid, Cell, Button,
} from 'react-md';
import Layout from '../components/Layout';
import Stars from '../images/astrology-sunscreen.jpg';

const IndexPage = () => (
  <Layout>
    <Paper style={{
      background: `url(${Stars})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      padding: '50px',
    }}
    >
      <Grid>
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
            fontStyle: 'italic', fontSize: 'large', color: 'white', fontFamily: 'Berkshire Swash',
          }}
          >
            Nikki Davenport, Licensed Astrologer,
            brings the wisdom of the zodiac to your door (and inbox!)
          </p>
          <Button style={{ fontSize: 'bigger', color: 'white', fontFamily: 'Berkshire Swash' }}>Get My Chart</Button>
        </Cell>
      </Grid>
    </Paper>
    <Grid>
      <h1>Home</h1>
      <Cell size={12}>
        <Paper style={{ backgroundColor: 'white' }}>
          <h1>Blog Post</h1>
        </Paper>
      </Cell>
    </Grid>
    <Grid>
      <Cell size={6}>
        <Paper style={{ backgroundColor: 'white' }}>
          <h1>Event</h1>
        </Paper>
      </Cell>
      <Cell size={6}>
        <Paper style={{ backgroundColor: 'white' }}>
          <h1>Service</h1>
        </Paper>
      </Cell>
    </Grid>
  </Layout>
);

export default (IndexPage);
