import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ToolboxPage from '../components/ToolboxPage';
import Layout from '../components/Layout';

function ToolboxTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title="Astro Toolbox">
      <ToolboxPage
        title={frontmatter.title}
        icon={frontmatter.icon}
        html={html}
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
        icon
        type
      }
      fields {
        slug
      }
    }
  }
`;
