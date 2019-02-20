import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import EventPage from '../components/EventPage';
import Layout from '../components/Layout';

function EventTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <EventPage
        title={frontmatter.title}
        image={frontmatter.eventImage}
        eventDate={frontmatter.eventDate}
        price={frontmatter.eventPrice}
        location={frontmatter.location}
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
        eventPrice
      }
      fields {
        slug
      }
    }
  }
`;
