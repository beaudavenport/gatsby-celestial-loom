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
  const [firstBlogNode, ...otherBlogNodes] = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout title="Home">
      <Jumbotron />
      <Grid style={{ maxWidth: 900 }}>
        <Cell size={8}>
          <FeaturedCard
            path={firstBlogNode.fields.slug}
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
        <Cell desktopOffset={1} size={3}>
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
          publishDate(formatString: "MMMM YYYY")
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`;
