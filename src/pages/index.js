import { Grid, Cell } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FeaturedCard from '../components/FeaturedCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Pleiades from '../images/pleiades.jpg';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstBlogNode, ...otherBlogNodes] = nodes.filter(node => node.frontmatter.type === 'blog');

  return (
    <Layout>
      <Jumbotron />
      <Grid style={{ padding: '20px' }}>
        <Cell size={8}>
          <FeaturedCard
            path={firstBlogNode.frontmatter.path}
            title={firstBlogNode.frontmatter.title}
            subtitle="subtitle here"
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
          />
          <h1 style={{ fontStyle: 'italic' }}>Earlier Articles</h1>
          { otherBlogNodes && otherBlogNodes.map(node => (
            <ThumbnailCard
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<ImageThumbnail imageUrl={Pleiades} />}
            />
          ))
          }
        </Cell>
        <Cell size={4}>
          <SidebarContents eventsQuantity={2} postsQuantity={0} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            image
            publishDate(formatString: "DD MMMM, YYYY")
            type
          }
          excerpt
        }
      }
    }
  }
`;
