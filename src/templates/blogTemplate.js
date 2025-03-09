import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import BlogEntry from '../components/BlogEntry';
import Layout from '../components/Layout';
import PostsArchive from '../components/PostsArchive';
import RelatedItemChipList from '../components/RelatedItemChipList';
import SidebarContents from '../components/SidebarContents';

export default function BlogTemplate(props) {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter, html, description, fields,
  } = markdownRemark;

  return (
    <Layout
      title="Posts"
      seoTitle={frontmatter.title}
      seoDescription={description || ''}
      seoImage={frontmatter.image}
      seoPathname={fields.slug}
      isArticle
      sidebarChildren={(
        <Fragment>
          <PostsArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={1} />
        </Fragment>
      )}
      pageProps={props}
    >
      <BackLink to="/posts" title="All Posts" />
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
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
  }
`;
