import { Card, Cell, Grid } from 'react-md';
import React, { Fragment } from 'react';

import {
  BackLink, Subheader, Subtitle, Title,
} from '../components/Common';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ToolboxArchive from '../components/ToolboxArchive';
import ZodiacWheel from '../components/ZodiacWheel';

const Toolbox = () => (
  <Layout
    title="Astro Toolbox"
    sidebarChildren={(
      <Fragment>
        <ToolboxArchive />
        <SidebarContents eventsQuantity={2} postsQuantity={2} />
      </Fragment>
  )}
  >
    <BackLink to="/" title="Home" />
    <Grid>
      <Cell size={10}>
        <Title>Your Astrology Toolbox</Title>
        <Subtitle>Explore the interactive zodiac wheel, or select a sign, house or planet</Subtitle>
      </Cell>
      <Cell size={12}>
        <div className="content-container">
          <Subheader>Click on an element to learn more.</Subheader>
        </div>
        <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ZodiacWheel />
        </Card>
      </Cell>
    </Grid>
  </Layout>
);

export default Toolbox;
