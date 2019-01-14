import React from 'react';
import {
  Paper, Grid, Cell, Button, Card, CardTitle, CardText,
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
          <div style={{ textAlign: 'center' }}>
            <Button flat primary swapTheming style={{ fontStyle: 'bold', fontFamily: 'Merriweather' }}>Get My Chart</Button>
          </div>
        </Cell>
      </Grid>
    </Paper>
    <Grid>
      <h1>Home</h1>
      <Cell size={12}>
        <Card style={{ backgroundColor: 'white' }}>
          <CardTitle title="Crossroads in 2019" subtitle="01/12/19" />
          <CardText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit lacus nec velit bibendum, fringilla venenatis tortor pulvinar. Nam rhoncus molestie luctus. Duis ac ultricies velit. Aliquam tempor leo ut mattis consectetur. Mauris id ex vel dolor faucibus vehicula. Praesent volutpat, orci id maximus consectetur, neque magna dignissim urna, hendrerit consectetur diam lectus a lorem. Maecenas ultricies feugiat dui in dictum. Donec mattis tincidunt ligula, eget pretium purus blandit vitae. Nam mattis vel magna volutpat luctus. Etiam blandit dui in tellus lacinia, quis congue urna lacinia. Nullam lectus nibh, rhoncus non volutpat ac, auctor in turpis. Nullam tellus elit, venenatis.</p>
          </CardText>
        </Card>
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
