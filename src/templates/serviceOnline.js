import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import ServicePageOnline from '../components/ServicePageOnline';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

function ServiceTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, fields, excerpt } = markdownRemark;
  return (
    <Layout
      title="Service - Online"
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={1} postsQuantity={1} />
        </Fragment>
    )}
    >
      <ServicePageOnline
        title={frontmatter.title}
        origin={frontmatter.origin}
        price={frontmatter.onlinePrice}
        slug={fields.slug}
        excerpt={excerpt}
      />
    </Layout>
  );
}

ServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ServiceTemplate;

export const pageQuery = graphql`
  query($serviceSlug: String!) {
    markdownRemark(fields: { slug: { eq: $serviceSlug } }) {
      frontmatter {
        title
        onlinePrice
        origin
      }
      excerpt(pruneLength: 250)
      fields {
        slug
      }
    }
  }
`;
