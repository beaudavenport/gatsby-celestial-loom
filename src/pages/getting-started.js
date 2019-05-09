import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { HeyMom } from '../components/Common';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';

const Posts = ({ data }) => (
  <Layout
    title="Astrology 101"
    sidebarChildren={(
      <Fragment>
        <SidebarHeader title="Welcom to... Astrology?" />
        <div style={{
          width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
        }}
        >
          <HeyMom>What do you want here?</HeyMom>
        </div>
        <SidebarContents eventsQuantity={2} postsQuantity={2} />
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
            <div style={{
              width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
            }}
            >
              <HeyMom><span style={{ fontWeight: 'bold' }}>Thinking maybe a service card here?</span></HeyMom>
            </div>
          </CardText>
        </Card>
      </Cell>
      <Cell size={6}>
        <div style={{
          width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
        }}
        >
          <HeyMom><span style={{ fontWeight: 'bold' }}>And a description here?</span></HeyMom>
        </div>
      </Cell>
      <Cell size={6}>
        <Card>
          <CardText>
            <p>Read you a blog</p>
            <div style={{
              width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
            }}
            >
              <HeyMom>What do you want here?</HeyMom>
            </div>
          </CardText>
        </Card>
      </Cell>
      <Cell size={6}>
        <h3>Wisdom from the zodiac!</h3>
        <div style={{
          width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
        }}
        >
          <HeyMom>What do you want here?</HeyMom>
        </div>
      </Cell>
      <Cell size={6}>
        <Card>
          <CardText>
            <p>Attend you an event</p>
            <div style={{
              width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
            }}
            >
              <HeyMom>What do you want here?</HeyMom>
            </div>
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
