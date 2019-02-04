import React from 'react';
import {
  Grid, Cell, Card, FontIcon,
} from 'react-md';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import FeaturedCard from '../components/FeaturedCard';
import ThumbnailCard from '../components/ThumbnailCard';
import DateThumbnail from '../components/ThumbnailCard/dateThumbnail';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Pleiades from '../images/pleiades.jpg';
import Preview from '../images/2019-Cosmic-Preview.jpg';

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Grid style={{ padding: '20px' }}>
      <Cell size={8}>
        <FeaturedCard
          path="/someplace"
          title="The Celestial Loom Year 2019 Cosmic Preview"
          subtitle="Posted 12/18/18"
          image={Preview}
          excerpt="Lorem ipsum and stuff and things, could not even have said it better myself"
        />
        <h1 style={{ fontStyle: 'italic' }}>Earlier Articles</h1>
        <ThumbnailCard
          title="Getting started with Astrology"
          caption="07/12/16"
          thumbnailChildren={<ImageThumbnail imageUrl={Pleiades} />}
        />
      </Cell>
      <Cell size={4}>
        <h3>Upcoming events</h3>
        <Link to="/thing1">
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
        </Link>
      </Cell>
    </Grid>
  </Layout>
);

export default (IndexPage);
