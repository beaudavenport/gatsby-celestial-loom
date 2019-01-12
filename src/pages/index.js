import React from 'react';
import { Paper, Grid, Cell } from 'react-md';
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
      <h1 style={{ color: 'white', fontFamily: 'Berkshire Swash' }}>Welcome to the Celestial Loom, where wisdom and service interweave!</h1>
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
