import React from 'react';
import {
  Paper, Grid, Cell, Button, Card, CardTitle, CardText, MediaOverlay,
} from 'react-md';
import Layout from '../components/Layout';
import Stars from '../images/astrology-sunscreen.jpg';
import Preview from '../images/2019-Cosmic-Preview.jpg';
import Pleiades from '../images/pleiades.jpg';

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
      <Cell>
        <h1 style={{ fontStyle: 'italic' }}>Latest Post</h1>
      </Cell>
      <Cell size={12}>
        <Card style={{ backgroundColor: 'white' }}>
          <div style={{ position: 'relative' }}>
            <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={Preview} alt="Preview of feature post" />
            <MediaOverlay style={{ marginBottom: '5px' }}>
              <CardTitle title="The Celestial Loom Year 2019 Cosmic Preview" subtitle="12/24/18" />
            </MediaOverlay>
          </div>
          <CardText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit lacus nec velit bibendum, fringilla venenatis tortor pulvinar. Nam rhoncus molestie luctus. Duis ac ultricies velit. Aliquam tempor leo ut mattis consectetur. Mauris id ex vel dolor faucibus vehicula. Praesent volutpat, orci id maximus consectetur, neque magna dignissim urna, hendrerit consectetur diam lectus a lorem. Maecenas ultricies feugiat dui in dictum. Donec mattis tincidunt ligula, eget pretium purus blandit vitae. Nam mattis vel magna volutpat luctus. Etiam blandit dui in tellus lacinia, quis congue urna lacinia. Nullam lectus nibh, rhoncus non volutpat ac, auctor in turpis. Nullam tellus elit, venenatis.</p>
          </CardText>
        </Card>
      </Cell>
      <Cell size={12}>
        <Card style={{ backgroundColor: 'white' }}>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div style={{ }}>
              <img style={{ marginBottom: '-5px', objectFit: 'cover' }} src={Pleiades} alt="Preview of next post" />
            </div>
            <div style={{ padding: '20px' }}>
              <p style={{ fontSize: 'large' }}>Getting started with astrology</p>
              <p style={{ fontSize: 'medium' }}>07/30/16</p>
              <CardText>
                <p>
                  It can be difficult to get started with astrology.
                  There can be many resources to understand and it consultant
                  be difficult to know what is reliable.
                </p>
              </CardText>
            </div>
          </div>
        </Card>
      </Cell>
      <Cell>
        <h1 style={{ fontStyle: 'italic' }}>Upcoming Events</h1>
      </Cell>
      <Cell size={12}>
        <Card style={{ backgroundColor: 'white' }}>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div style={{ backgroundColor: 'rgb(255, 128, 19)', padding: '20px 10px' }}>
              <p style={{
                fontStyle: 'italic', fontSize: '60px', textAlign: 'center', color: 'white', marginBottom: '30px',
              }}
              >
15
              </p>
              <p style={{
                fontStyle: 'italic', fontSize: '30px', textAlign: 'center', color: 'white',
              }}
              >
JUN
              </p>
            </div>
            <div style={{ padding: '20px' }}>
              <p style={{ fontSize: 'large' }}>Neptune/Uranus Square PlayShop</p>
              <p style={{ fontSize: 'medium' }}>Divine Inspirations Boutique</p>
              <CardText>
                <p>
                  The Square of the Century is upon us! Join us for a magical
                  PlayShop where we can discuss what this event means for you
                </p>
              </CardText>
            </div>
          </div>
        </Card>
      </Cell>
    </Grid>
  </Layout>
);

export default (IndexPage);
