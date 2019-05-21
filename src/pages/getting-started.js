import {
  Avatar, Card, Cell, FontIcon, Grid, List, ListItem,
} from 'react-md';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
  BackLink,
  BigSubheader,
  Caption,
  ContentWithIcon,
  ForwardLink,
  Subheader,
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
          <SidebarHeader title="Learn More" />
          <div style={{
            margin: 10, padding: 10,
          }}
          >
            <ContentWithIcon fontIconStyle={{ fontSize: '2.5rem' }} fontIconName="search"><p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Try a search in the upper-right-hand corner</p></ContentWithIcon>
            <ContentWithIcon fontIconStyle={{ fontSize: '2.5rem' }} fontIconName="shopping_cart"><p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>See items in your cart, next to search</p></ContentWithIcon>
            <ContentWithIcon fontIconStyle={{ fontSize: '2.5rem' }} fontIconName="menu"><p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>View all pages using the menu in the upper-left-hand corner</p></ContentWithIcon>
          </div>
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
      )}
    >
      <BackLink to="/" title="Home" />
      <Grid>
        <Cell size={12}>
          <Title>Welcome to The Celestial Loom!</Title>
        </Cell>
        <Cell size={12}>
          <BigSubheader>New to Astrology? Here's how to get started:</BigSubheader>
        </Cell>
        <Cell size={12}>
          <Card>
            <Grid>
              <CenteredCell fontIconName="person" title="Order an Astrological Consultation">
                <Caption>Select an online or in-person astrological consultation from a wide array of astrological origins.</Caption>
                <ForwardLink title="View all Services" to="/services" />
              </CenteredCell>
              <Cell size={6} tabletSize={4}>
                <Subheader>Get your first chart:</Subheader>
                <ServiceCard
                  path={natalChart.fields.slug}
                  title={natalChart.frontmatter.title}
                  origin={natalChart.frontmatter.origin}
                  onlinePrice={natalChart.frontmatter.onlinePrice}
                  inPersonPrice={natalChart.frontmatter.inPersonPrice}
                  excerpt={natalChart.excerpt}
                  showPrices={false}
                />
              </Cell>
            </Grid>
          </Card>
        </Cell>
        <Cell size={12}>
          <Card>
            <Grid>
              <CenteredCell fontIconName="create" title="Read the Latest Post">
                <Caption>See what the Stars are up to with Nikki's astrology blog!</Caption>
                <ForwardLink title="View all posts" to="/posts" />
              </CenteredCell>
              <CenteredCell>
                <Subheader>Read the latest post:</Subheader>
                <ThumbnailCard
                  style={{ marginBottom: 10 }}
                  path={firstBlogNode.fields.slug}
                  title={firstBlogNode.frontmatter.title}
                  caption={firstBlogNode.frontmatter.publishDate}
                  image={firstBlogNode.frontmatter.image}
                />
              </CenteredCell>
            </Grid>
          </Card>
        </Cell>
        <Cell size={12}>
          <Card>
            <Grid>
              <CenteredCell fontIconName="event" title="Attend an Event">
                <Caption>Meet Nikki in-person and get involved in your astro-community! Sign up to attend an event.</Caption>
                <ForwardLink title="View upcoming events" to="/events" />
              </CenteredCell>
              <CenteredCell>
                <Subheader>Attend our next event:</Subheader>
                <ThumbnailEventCard
                  path={firstEventNode.fields.slug}
                  title={firstEventNode.frontmatter.title}
                  image={firstEventNode.frontmatter.image}
                  location={firstEventNode.frontmatter.location}
                  eventTime={firstEventNode.frontmatter.eventTime}
                  eventDate={firstEventNode.frontmatter.eventDate}
                />
              </CenteredCell>
            </Grid>
          </Card>
        </Cell>
        <Cell size={12}>
          <Card>
            <Grid>
              <CenteredCell fontIconName="build" title="Explore your Astrological Toolbox">
                <Caption>Learn more about the Signs, Planets, and Houses that make up your Astrological Toolbox using our interactive Zodiac Wheel!</Caption>
                <ForwardLink title="Open your Toolbox" to="/toolbox" />
              </CenteredCell>
              <CenteredCell>
                <Subheader>Learn about Planets, Houses, and Signs:</Subheader>
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
            </Grid>
          </Card>
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
        excerpt(format: HTML, pruneLength: 250)
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
        excerpt(format: HTML, pruneLength: 250)
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
    excerpt(format: HTML, pruneLength: 250)
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
