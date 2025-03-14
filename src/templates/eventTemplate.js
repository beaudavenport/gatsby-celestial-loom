import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import EventPage from '../components/EventPage';
import EventsArchive from '../components/EventsArchive';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

function EventTemplate(props) {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter, html, fields, description,
  } = markdownRemark;
  return (
    <Layout
      title="Events"
      seoTitle={frontmatter.title}
      seoDescription={description || ''}
      seoImage={frontmatter.image}
      seoPathname={fields.slug}
      sidebarChildren={(
        <Fragment>
          <EventsArchive />
          <SidebarContents eventsQuantity={0} postsQuantity={2} />
        </Fragment>
      )}
      pageProps={props}
    >
      <BackLink to="/events" title="All Events" />
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
      description: excerpt(pruneLength: 130)
    }
  }
`;
