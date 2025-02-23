import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';


function ServiceTemplate(props) {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter, html, fields, description,
  } = markdownRemark;
  return (
    <Layout
      title="Services"
      seoTitle={frontmatter.title}
      seoDescription={description || ''}
      seoImage={frontmatter.image}
      seoPathname={fields.slug}
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
      )}
      pageProps={props}
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
      description: excerpt(pruneLength: 130)
    }
  }
`;
