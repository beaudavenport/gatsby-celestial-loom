import {
  Avatar, Card, Cell, FontIcon, Grid, List, ListItem,
} from 'react-md';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
  BigSubheader,
  Caption,
  ForwardLink,
  HeyMom,
  Title,
} from '../components/Common';
import { getSymbolSpan } from '../helpers/symbolHelper';
import CenteredCell from '../components/CenteredCell';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import ThumbnailCard from '../components/ThumbnailCard';
import ThumbnailEventCard from '../components/ThumbnailCard/ThumbnailEventCard';

const GettingStarted = ({ data }) => {
  const [firstBlogNode] = data.blog.edges.map(edge => edge.node);
  const [firstEventNode] = data.events.edges.map(edge => edge.node);
  const toolboxNodes = data.toolboxItems.edges.map(edge => edge.node);
  const { natalChart } = data;

  return (
    <Layout
      title="Getting Started"
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
          <Title>Welcome to The Celestial Loom!</Title>
        </Cell>
        <Cell size={12}>
          <BigSubheader>New to Astrology? Here's how to get started:</BigSubheader>
        </Cell>
        <Cell size={12}>
          <Grid>
            <CenteredCell fontIconName="person" title="Order an Astrological Consultation">
              <Caption>Select an online or in-person astrological consultation from a wide array of astrological origins.</Caption>
              <ForwardLink title="View all Services" to="/services" />
            </CenteredCell>
            <Cell size={6} tabletSize={4}>
              <Card>
                <ServiceCard
                  path={natalChart.fields.slug}
                  title={natalChart.frontmatter.title}
                  origin={natalChart.frontmatter.origin}
                  onlinePrice={natalChart.frontmatter.onlinePrice}
                  inPersonPrice={natalChart.frontmatter.inPersonPrice}
                  excerpt={natalChart.excerpt}
                  showPrices={false}
                />
              </Card>
            </Cell>
          </Grid>
        </Cell>
        <Cell size={12}>
          <Grid>
            <CenteredCell>
              <Card>
                <ThumbnailCard
                  style={{ marginBottom: 10 }}
                  path={firstBlogNode.fields.slug}
                  title={firstBlogNode.frontmatter.title}
                  caption={firstBlogNode.frontmatter.publishDate}
                  image={firstBlogNode.frontmatter.image}
                />
              </Card>
            </CenteredCell>
            <CenteredCell fontIconName="create" title="Read the Latest Post">
              <Caption>See what the Stars are up to with Nikki's astrology blog!</Caption>
              <ForwardLink title="View all posts" to="/posts" />
            </CenteredCell>
          </Grid>
        </Cell>
        <Cell size={12}>
          <Grid>
            <CenteredCell fontIconName="event" title="Attend an Event">
              <Caption>Meet Nikki in-person and get involved in your astro-community! Sign up to attend an event.</Caption>
              <ForwardLink title="View upcoming events" to="/events" />
            </CenteredCell>
            <CenteredCell>
              <Card>
                <ThumbnailEventCard
                  path={firstEventNode.fields.slug}
                  title={firstEventNode.frontmatter.title}
                  image={firstEventNode.frontmatter.image}
                  location={firstEventNode.frontmatter.location}
                  eventTime={firstEventNode.frontmatter.eventTime}
                  eventDate={firstEventNode.frontmatter.eventDate}
                />
              </Card>
            </CenteredCell>
          </Grid>
        </Cell>
        <Cell size={12}>
          <Grid>
            <CenteredCell>
              <List>
                {toolboxNodes.map(item => (
                  <ListItem
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    primaryText={item.frontmatter.title}
                    primaryTextStyle={{ fontWeight: 'bold' }}
                    leftAvatar={<Avatar icon={<FontIcon>{getSymbolSpan(item.frontmatter.title)}</FontIcon>} />}
                    secondaryText={item.frontmatter.toolboxType}
                    component={Link}
                    to={item.fields.slug}
                  />
                ))}
              </List>
            </CenteredCell>
            <CenteredCell fontIconName="build" title="Explore your Astrological Toolbox">
              <Caption>Learn more about the Signs, Planets, and Houses that make up your Astrological Toolbox using our interactive Zodiac Wheel!</Caption>
              <ForwardLink title="Open your Toolbox" to="/toolbox" />
            </CenteredCell>
          </Grid>
        </Cell>
      </Grid>
    </Layout>
  );
};

GettingStarted.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default GettingStarted;

export const query = graphql`
query {
  blog: allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "blog"} } },
    sort: { fields: [frontmatter___publishDate], order: DESC }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          publishDate(formatString: "MMMM DD, YYYY")
          relatedItems
        }
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
  events: allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "events"} } },
    sort: { fields: [frontmatter___publishDate], order: DESC }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          eventDate(formatString: "MMMM DD, YYYY")
          eventTime
          eventDateShort: eventDate(formatString: "MMM DD")
          eventPrice
          priceDescription
          location
        }
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
  natalChart: markdownRemark(frontmatter: { type: { eq: "services"} title: { eq: "Natal Chart"}}) {
    id
    frontmatter {
      title
      type
      onlinePrice
      inPersonPrice
      origin
    }
    excerpt(pruneLength: 250)
    fields {
      slug
    }
  }
  toolboxItems: allMarkdownRemark(
    filter: { frontmatter: { title: { in: ["Aries", "Sun", "First House"]}} }
  ) {
    edges {
      node {
        frontmatter {
          title
          toolboxType
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
