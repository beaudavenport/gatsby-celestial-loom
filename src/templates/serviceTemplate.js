import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';
import SidebarContents from '../components/SidebarContents';

function ServiceTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout
      title="Services"
      sidebarChildren={(
        <SidebarContents eventsQuantity={2} postsQuantity={2} />
    )}
    >
      <ServicePage
        title={frontmatter.title}
        price={frontmatter.price}
        origin={frontmatter.origin}
        html={html}
      />
    </Layout>
  );
}

ServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ServiceTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        origin
        price
      }
      fields {
        slug
      }
    }
  }
`;
