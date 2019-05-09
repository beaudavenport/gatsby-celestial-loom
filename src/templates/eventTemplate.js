import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { HeyMom } from '../components/Common';
import EventPage from '../components/EventPage';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';

function EventTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Layout
      title="Events"
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
      <EventPage
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        image={frontmatter.image}
        priceDescription={frontmatter.priceDescription}
        eventDate={frontmatter.eventDate}
        eventTime={frontmatter.eventTime}
        eventPrice={frontmatter.eventPrice}
        location={frontmatter.location}
        mapsLink={frontmatter.mapsLink}
        html={html}
        slug={fields.slug}
      />
    </Layout>
  );
}

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default EventTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        eventDate(formatString: "MMMM DD, YYYY")
        eventTime
        title
        subtitle
        image
        location
        mapsLink
        eventPrice
        priceDescription
      }
      fields {
        slug
      }
    }
  }
`;
