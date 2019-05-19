import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import BlogEntry from '../components/BlogEntry';
import Layout from '../components/Layout';
import PostsArchive from '../components/PostsArchive';
import RelatedItemChipList from '../components/RelatedItemChipList';
import SidebarContents from '../components/SidebarContents';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      title="Posts"
      sidebarChildren={(
        <Fragment>
          <PostsArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={0} />
        </Fragment>
      )}
    >
      <BlogEntry
        title={frontmatter.title}
        image={frontmatter.image}
        html={html}
        publishDate={frontmatter.publishDate}
        relatedItemChips={frontmatter.relatedItems && <RelatedItemChipList relatedItems={frontmatter.relatedItems} />}
      />
    </Layout>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        publishDate(formatString: "MMMM DD, YYYY")
        title
        image
        relatedItems
      }
    }
  }
`;
