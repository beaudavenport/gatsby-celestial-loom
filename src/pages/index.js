import { Card, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import AboutNikkiCard from '../components/AboutNikkiCard';
import CardCornerHighlight from '../components/CardCornerHighlight';
import FeaturedCard from '../components/FeaturedCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';
import WesternChart from '../images/western-chart.jpg';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.blog.edges.map(edge => edge.node);
  const [firstEventNode] = data.events.edges.map(edge => edge.node);
  return (
    <Layout
      title="Home"
      sidebarChildren={(
        <Grid noSpacing>
          <Cell size={12} tabletSize={4}>
            <AboutNikkiCard />
            <Card>
              <div style={{ paddingRight: 1 }}>
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/nikiastro?ref_src=twsrc%5Etfw"
                  data-tweet-limit="1"
                >
                  Tweets by nikiastro
                </a>
              </div>
            </Card>
          </Cell>
        </Grid>
      )}
    >
      <Jumbotron />
      <Card>
        <Grid noSpacing>
          <Cell size={12} style={{ borderBottom: '1px solid rgba(15,70,100,.12)' }}>
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
                title={node.frontmatter.title}
                caption={node.frontmatter.publishDate}
                thumbnailChildren={<ImageThumbnail imageUrl={node.frontmatter.image} />}
              />
            </Cell>
          ))
          }
        </Grid>
      </Card>
      <Card style={{ marginTop: 10 }}>
        <Grid noSpacing>
          <Cell size={12}>
            <FeaturedCard
              style={{ marginBottom: 10 }}
              path={firstEventNode.fields.slug}
              title={firstEventNode.frontmatter.title}
              eventDate={firstEventNode.frontmatter.eventDate}
              image={firstEventNode.frontmatter.image}
              excerpt={firstEventNode.excerpt}
              cornerIconName="event"
              cornerTitle="Event"
            />
          </Cell>
        </Grid>
      </Card>
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
          publishDate(formatString: "MMM DD, YYYY")
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
          publishDate(formatString: "MMM DD, YYYY")
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
