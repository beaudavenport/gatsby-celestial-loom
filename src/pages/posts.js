import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FeaturedCard from '../components/FeaturedCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';

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

const Posts = ({ data }) => {
  const [firstNode, ...otherNodes] = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout
      title="Posts"
      sidebarChildren={(
        <SidebarContents eventsQuantity={2} postsQuantity={0} />
    )}
    >
      <FeaturedCard
        path={firstNode.fields.slug}
        title={firstNode.frontmatter.title}
        subtitle="subtitle here"
        image={firstNode.frontmatter.image}
        excerpt={firstNode.excerpt}
      />
      <h1 style={{ fontStyle: 'italic' }}>Earlier Articles</h1>
      { otherNodes && otherNodes.map(node => (
        <ThumbnailCard
          title={node.frontmatter.title}
          caption="07/12/16"
          thumbnailChildren={<ImageThumbnail imageUrl={node.frontmatter.image} />}
        />
      ))
      }
    </Layout>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Posts;
