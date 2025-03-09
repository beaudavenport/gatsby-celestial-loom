import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import Layout from '../components/Layout';
import ServicePageInPerson from '../components/ServicePage/ServicePageInPerson';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

function ServiceTemplate(props) {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, fields, excerpt } = markdownRemark;
  return (
    <Layout
      title="Service - In-Person"
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={1} postsQuantity={1} />
        </Fragment>
      )}
      pageProps={props}
    >
      <BackLink to={fields.slug} title="Back to Details" />
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
      excerpt(format: HTML, pruneLength: 250)
      fields {
        slug
      }
    }
  }
`;
