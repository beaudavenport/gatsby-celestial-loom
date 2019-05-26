import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';


function ServiceTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log('service template: ', JSON.stringify(data));
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Layout
      title="Services"
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
    )}
    >
      <BackLink to="/services" title="All Services" />
      <ServicePage
        title={frontmatter.title}
        onlinePrice={frontmatter.onlinePrice}
        inPersonPrice={frontmatter.inPersonPrice}
        origin={frontmatter.origin}
        html={html}
        slug={fields.slug}
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
        onlinePrice
        inPersonPrice
      }
      fields {
        slug
      }
    }
  }
`;
