import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import Layout from '../components/Layout';
import ServicePageOnline from '../components/ServicePage/ServicePageOnline';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

function ServiceTemplate(props) {
  const { data } = props;
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
      pageProps={props}
    >
      <BackLink to={fields.slug} title="Back to Details" />
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
      excerpt(format: HTML, pruneLength: 250)
      fields {
        slug
      }
    }
  }
`;
