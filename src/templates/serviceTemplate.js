import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { HeyMom } from '../components/Common';
import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';


function ServiceTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Layout
      title="Services"
      sidebarChildren={(
        <Fragment>
          <SidebarHeader title="Toolbox Stuff ?????" />
          <div style={{
            width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
          }}
          >
            <HeyMom>What do you want here?</HeyMom>
          </div>
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
    )}
    >
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
