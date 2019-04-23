import { Card, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import AboutNikkiCard from '../components/AboutNikkiCard';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import SidebarHeader from '../components/SidebarHeader';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.blog.edges.map(edge => edge.node);
  const [firstEventNode] = data.events.edges.map(edge => edge.node);
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
      <Grid style={{ borderBottom: '1px solid rgba(15,70,100,.2)', marginBottom: 20 }}>
        <Cell size={12} style={{ borderBottom: '1px solid rgba(15,70,100,.2)' }}>
          <FeaturedCard
            style={{ marginBottom: 10 }}
            path={firstBlogNode.fields.slug}
            title={firstBlogNode.frontmatter.title}
            publishDate={firstBlogNode.frontmatter.publishDate}
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
            cornerIconName="create"
            cornerTitle="Blog"
          />
        </Cell>
        { otherBlogNodes && otherBlogNodes.map(node => (
          <Cell size={6} tabletSize={4} style={{ padding: 10 }}>
            <ThumbnailCard
              style={{ marginBottom: 10 }}
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              thumbnailChildren={<ImageThumbnail imageUrl={node.frontmatter.image} />}
            />
          </Cell>
        ))
          }
      </Grid>
      <Grid style={{ borderBottom: '1px solid rgba(15,70,100,.2)', marginBottom: 20 }}>
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
}
`;
