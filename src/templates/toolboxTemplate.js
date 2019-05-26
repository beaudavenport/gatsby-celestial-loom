import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ToolboxArchive from '../components/ToolboxArchive';
import ToolboxPage from '../components/ToolboxPage';

function ToolboxTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log('toolbox template: ', JSON.stringify(data));
  const { markdownRemark, blog, events } = data;
  const blogNodes = blog.edges.map(edge => edge.node)
    .filter((node) => {
      const { relatedItems } = node.frontmatter;
      return relatedItems && relatedItems.includes(markdownRemark.frontmatter.title);
    })
    .slice(0, 10);
  const eventNodes = events.edges.map(edge => edge.node)
    .filter((node) => {
      const { relatedItems } = node.frontmatter;
      return relatedItems && relatedItems.includes(markdownRemark.frontmatter.title);
    })
    .slice(0, 10);
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout
      title="Astro Toolbox"
      sidebarChildren={(
        <Fragment>
          <ToolboxArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
      )}
    >
      <BackLink to="/toolbox" title="Astro Toolbox" />
      <ToolboxPage
        title={frontmatter.title}
        toolboxType={frontmatter.toolboxType}
        html={html}
        blogNodes={blogNodes}
        eventNodes={eventNodes}
      />
    </Layout>
  );
}

ToolboxTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ToolboxTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        toolboxType
      }
      fields {
        slug
      }
    }
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
    events: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "events"} } },
      sort: { fields: [frontmatter___eventDate], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            eventDate(formatString: "dddd, MMM DD")
            eventTime
            eventDateShort: eventDate(formatString: "MMM DD")
            eventPrice
            priceDescription
            location
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
