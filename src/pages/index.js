import React from 'react';
import {
  Paper, Grid, Cell, Button, Card, CardTitle, CardText, MediaOverlay, FontIcon,
} from 'react-md';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import ThumbnailCard from '../components/ThumbnailCard';
import DateThumbnail from '../components/ThumbnailCard/dateThumbnail';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Astroglobe from '../images/astroglobe.jpg';
import Preview from '../images/2019-Cosmic-Preview.jpg';
import Pleiades from '../images/pleiades.jpg';

const IndexPage = () => (
  <Layout>
    <Paper style={{
      background: `url(${Astroglobe})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      padding: '100px 50px 0 50px',
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
            fontStyle: 'italic', textAlign: 'right', fontSize: 'large', color: 'white', fontFamily: 'Merriweather',
          }}
          >
            Nikki Davenport, Licensed Astrologer,
            brings the wisdom of the zodiac to your door (and inbox!)
          </p>
          <div style={{ textAlign: 'right' }}>
            <Button flat primary swapTheming style={{ fontStyle: 'bold', fontFamily: 'Merriweather' }}>Get My Chart</Button>
          </div>
        </Cell>
      </Grid>
    </Paper>
    <Grid style={{ padding: '20px' }}>
      <Cell size={8}>
        <Link to="/posts/test1">
          <Card style={{ backgroundColor: 'white' }}>
            <div style={{ position: 'relative' }}>
              <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src={Preview} alt="Preview of feature post" />
              <MediaOverlay style={{ marginBottom: '5px' }}>
                <CardTitle title="The Celestial Loom Year 2019 Cosmic Preview" subtitle="12/24/18" />
              </MediaOverlay>
            </div>
            <CardText>
              <p style={{ textDecoration: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit lacus nec velit bibendum, fringilla venenatis tortor pulvinar. Nam rhoncus molestie luctus. Duis ac ultricies velit. Aliquam tempor leo ut mattis consectetur. Mauris id ex vel dolor faucibus vehicula. Praesent volutpat, orci id maximus consectetur, neque magna dignissim urna, hendrerit consectetur diam lectus a lorem. Maecenas ultricies feugiat dui in dictum. Donec mattis tincidunt ligula, eget pretium purus blandit vitae. Nam mattis vel magna volutpat luctus.</p>
            </CardText>
          </Card>
        </Link>
        <h1 style={{ fontStyle: 'italic' }}>Earlier Articles</h1>
        <ThumbnailCard
          title="Getting started with Astrology"
          caption="07/12/16"
          thumbnailChildren={<ImageThumbnail imageUrl={Pleiades} />}
        />
      </Cell>
      <Cell size={4}>
        <h3>Upcoming events</h3>
        <Card style={{ backgroundColor: 'white' }}>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <DateThumbnail day="12" month="JUN" />
            <div style={{ padding: '10px' }}>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Neptune/Uranus Square PlayShop</p>
              <div style={{ display: 'flex', justifyContent: 'baseline' }}>
                <FontIcon iconClassName="material-icons" style={{ marginBottom: '-5px' }}>near_me</FontIcon>
                <p style={{ fontSize: '10px' }}>Divine Inspirations Boutique</p>
              </div>
            </div>
          </div>
        </Card>
      </Cell>
    </Grid>
  </Layout>
);

export default (IndexPage);
