import { Cell, FontIcon, Grid } from 'react-md';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import AboutNikkiCard from '../components/AboutNikkiCard';
import FeaturedCard from '../components/FeaturedCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout
      title="Home"
      sidebarChildren={(
        <Grid>
          <Cell size={12} tabletSize={4}>
            <AboutNikkiCard />
          </Cell>
          <Cell size={12} tabletSize={4}>
            <SidebarContents eventsQuantity={2} postsQuantity={0} />
          </Cell>
        </Grid>
      )}
    >
      <Jumbotron />
      <Grid>
        <Cell size={12}>
          <FeaturedCard
            style={{ marginBottom: 10, marginTop: 20 }}
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
          <Cell size={6} tabletSize={4}>
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
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
query {
  allMarkdownRemark(
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
}
`;
