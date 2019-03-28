import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import EventPage from '../components/EventPage';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

function EventTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout
      title="Events"
      sidebarChildren={(
        <SidebarContents eventsQuantity={0} postsQuantity={2} />
    )}
    >
      <EventPage
        title={frontmatter.title}
        image={frontmatter.eventImage}
        eventDate={frontmatter.eventDate}
        price={frontmatter.eventPrice}
        location={frontmatter.location}
        mapsLink={frontmatter.mapsLink}
        html={html}
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
        title
        eventImage
        location
        mapsLink
        eventPrice
      }
      fields {
        slug
      }
    }
  }
`;
