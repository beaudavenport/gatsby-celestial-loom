import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import ServicePageInPerson from '../components/ServicePageInPerson';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

function ServiceTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, fields, excerpt } = markdownRemark;
  return (
    <Layout
      title="Service - In-Person"
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
    )}
    >
      <ServicePageInPerson
        title={frontmatter.title}
        origin={frontmatter.origin}
        price={frontmatter.inPersonPrice}
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
        inPersonPrice
        origin
      }
      excerpt(pruneLength: 250)
      fields {
        slug
      }
    }
  }
`;
