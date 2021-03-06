import { Card, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { BigSubheader, ForwardLink } from '../components/Common';
import AboutNikkiCard from '../components/AboutNikkiCard';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import RelatedItemChipList from '../components/RelatedItemChipList';
import ServiceCard from '../components/ServiceCard';
import SidebarHeader from '../components/SidebarHeader';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.blog.edges.map(edge => edge.node);
  const firstEventNode = data.events.edges.map(edge => edge.node)
    .find(node => moment().isBefore(moment(node.frontmatter.eventDate, 'MMMM DD, YYYY')));
  const { featuredService } = data;

  return (
    <Layout
      title="Home"
      jumbotron={<Jumbotron />}
      sidebarChildren={(
        <Grid noSpacing>
          <Cell size={12}>
            <SidebarHeader title="About Nikki" />
          </Cell>
          <Cell size={12} tabletSize={4} className="about-nikki--card">
            <AboutNikkiCard />
          </Cell>
          <Cell size={12}>
            <SidebarHeader title="Stay Connected" />
          </Cell>
          <Cell size={12} tabletSize={4}>
            <div style={{ paddingRight: 1 }}>
              <a
                className="twitter-timeline"
                href="https://twitter.com/nikiastro?ref_src=twsrc%5Etfw"
                data-tweet-limit="1"
              >
                  Tweets by nikiastro
              </a>
            </div>
          </Cell>
        </Grid>
      )}
    >
      <Grid className="separated--grid">
        <Cell size={12}>
          <BigSubheader>Featured Post</BigSubheader>
        </Cell>
        <Cell size={12} style={{ marginBottom: 10 }}>
          <FeaturedCard
            path={firstBlogNode.fields.slug}
            title={firstBlogNode.frontmatter.title}
            publishDate={firstBlogNode.frontmatter.publishDate}
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
            relatedItemChips={
              firstBlogNode.frontmatter.relatedItems && (
              <RelatedItemChipList relatedItems={firstBlogNode.frontmatter.relatedItems} />
              )
            }
          />
        </Cell>
      </Grid>
      <Grid className="separated--grid">
        <Cell size={12}>
          <div className="homepage--header">
            <BigSubheader>Previous Posts</BigSubheader>
            <ForwardLink to="/posts" title="All Posts" />
          </div>
        </Cell>
        { otherBlogNodes && otherBlogNodes.map(node => (
          <Cell key={node.frontmatter.title} size={6} tabletSize={4} className="content-container">
            <ThumbnailCard
              style={{ marginBottom: 10 }}
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              image={node.frontmatter.image}
            />
          </Cell>
        ))
          }
      </Grid>
      { firstEventNode && (
        <Grid className="separated--grid">
          <Cell size={12}>
            <div className="homepage--header">
              <BigSubheader>Next Event</BigSubheader>
              <ForwardLink to="/events" title="All Events" />
            </div>
          </Cell>
          <Cell size={12}>
            <FeaturedEventCard
              path={firstEventNode.fields.slug}
              title={firstEventNode.frontmatter.title}
              eventDate={firstEventNode.frontmatter.eventDate}
              eventTime={firstEventNode.frontmatter.eventTime}
              eventDateShort={firstEventNode.frontmatter.eventDateShort}
              image={firstEventNode.frontmatter.image}
              eventPrice={firstEventNode.frontmatter.eventPrice}
              priceDescription={firstEventNode.frontmatter.priceDescription}
              location={firstEventNode.frontmatter.location}
            />
          </Cell>
        </Grid>
      )}
      <Grid className="separated--grid">
        <Cell size={12}>
          <div className="homepage--header">
            <BigSubheader>Featured Service</BigSubheader>
            <ForwardLink to="/services" title="All Services" />
          </div>
        </Cell>
        <Cell size={12}>
          <Card>
            <ServiceCard
              path={featuredService.fields.slug}
              title={featuredService.frontmatter.title}
              origin={featuredService.frontmatter.origin}
              onlinePrice={featuredService.frontmatter.onlinePrice}
              inPersonPrice={featuredService.frontmatter.inPersonPrice}
              excerpt={featuredService.excerpt}
            />
          </Card>
        </Cell>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
query {
  blog: allMarkdownRemark(
    limit: 3
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
    sort: { fields: [frontmatter___eventDate], order: ASC }
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
  featuredService: markdownRemark(frontmatter: { type: { eq: "services" } isFeatured: { eq: true} }) {
    excerpt(format: HTML, pruneLength: 250)
    frontmatter {
      title
      origin
      onlinePrice
      inPersonPrice
    }
    fields {
      slug
    }
  }
}
`;
