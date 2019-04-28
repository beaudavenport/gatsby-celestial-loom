import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

const Posts = ({ data }) => (
  <Layout
    title="Astrology 101"
    sidebarChildren={(
      <Fragment>
        <SidebarContents eventsQuantity={1} postsQuantity={1} />
      </Fragment>
      )}
  >
    <Grid>
      <Cell size={12}>
        <h3>Welcome to the world of Astrology!</h3>
      </Cell>
      <Cell size={6}>
        <Card>
          <CardText>
            <p>Get you a chart</p>
          </CardText>
        </Card>
      </Cell>
      <Cell size={6}>
        <h3>A chart is a good way to start</h3>
      </Cell>
      <Cell size={6}>
        <Card>
          <CardText>
            <p>Read you a blog</p>
          </CardText>
        </Card>
      </Cell>
      <Cell size={6}>
        <h3>Wisdom from the zodiac!</h3>
      </Cell>
      <Cell size={6}>
        <Card>
          <CardText>
            <p>Attend you an event</p>
          </CardText>
        </Card>
      </Cell>
      <Cell size={6}>
        <h3>See what all the fuss is about!</h3>
      </Cell>
    </Grid>
  </Layout>
);

Posts.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Posts;
