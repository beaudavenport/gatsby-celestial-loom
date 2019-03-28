import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BlogEntry from '../components/BlogEntry';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      title="Posts"
      sidebarChildren={(
        <SidebarContents eventsQuantity={2} postsQuantity={0} />
      )}
    >
      <BlogEntry
        title={frontmatter.title}
        image={frontmatter.image}
        html={html}
        publishDate={frontmatter.publishDate}
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
      }
    }
  }
`;
