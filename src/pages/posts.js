import { Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import ArchiveCard from '../components/ArchiveCard';
import FeaturedCard from '../components/FeaturedCard';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

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
             publishDate(formatString: "MMMM DD, YYYY")
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
  const first3Nodes = data.allMarkdownRemark.edges.slice(0, 3).map(edge => edge.node);

  return (
    <Layout
      title="Posts"
      sidebarChildren={(
        <Fragment>
          <ArchiveCard />
          <SidebarContents eventsQuantity={2} postsQuantity={0} />
        </Fragment>
      )}
    >
      <Grid>
        { first3Nodes.map(node => (
          <Cell size={12}>
            <FeaturedCard
              style={{ marginBottom: 30 }}
              path={node.fields.slug}
              title={node.frontmatter.title}
              publishDate={node.frontmatter.publishDate}
              image={node.frontmatter.image}
              excerpt={node.excerpt}
            />
          </Cell>
        ))
      }
      </Grid>
    </Layout>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Posts;
