import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Grid, GridCell } from "@react-md/utils"

import { BackLink, BigSubheader } from '../components/Common';
import FeaturedCard from '../components/FeaturedCard';
import Layout from '../components/Layout';
import PostsArchive from '../components/PostsArchive';
import RelatedItemChipList from '../components/RelatedItemChipList';
import SidebarContents from '../components/SidebarContents';

export const query = graphql`
   query {
     allMarkdownRemark(
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
   }
 `;

const Posts = (props) => {
  const { data } = props;
  const first3Nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout
      title="Posts"
      sidebarChildren={(
        <Fragment>
          <PostsArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={1} />
        </Fragment>
      )}
      pageProps={props}
    >
      <BackLink to="/" title="Home" />
      <Grid>
        { first3Nodes.map(node => (
          <GridCell colSpan={12} style={{ marginBottom: 30 }}>
            <FeaturedCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              publishDate={node.frontmatter.publishDate}
              image={node.frontmatter.image}
              relatedItemChips={node.frontmatter.relatedItems && <RelatedItemChipList relatedItems={node.frontmatter.relatedItems} />}
              excerpt={node.excerpt}
            />
          </GridCell>
        ))
      }
        <GridCell colSpan={12}>
          <div style={{ padding: 20 }}>
            <BigSubheader>Browse older posts by month in the Posts Archive.</BigSubheader>
          </div>
        </GridCell>
      </Grid>
    </Layout>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Posts;
