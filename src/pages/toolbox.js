import { Grid, GridCell } from "@react-md/utils"
import { Card } from "@react-md/card"
import React, { Fragment } from 'react';

import {
  BackLink, Subheader, Subtitle, Title,
} from '../components/Common';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ToolboxArchive from '../components/ToolboxArchive';
import ZodiacWheel from '../components/ZodiacWheel';

const Toolbox = (props) => (
  <Layout
    title="Astro Toolbox"
    sidebarChildren={(
      <Fragment>
        <ToolboxArchive />
        <SidebarContents eventsQuantity={2} postsQuantity={2} />
      </Fragment>
    )}
    pageProps={props}
  >
    <BackLink to="/" title="Home" />
    <Grid>
      <GridCell colSpan={10}>
        <Title>Your Astrology Toolbox</Title>
        <Subtitle>Explore the interactive zodiac wheel, or select a sign, house or planet</Subtitle>
      </GridCell>
      <GridCell colSpan={12}>
        <div className="content-container">
          <Subheader>Click on an element to learn more.</Subheader>
        </div>
        <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ZodiacWheel />
        </Card>
      </GridCell>
    </Grid>
  </Layout>
);

export default Toolbox;
