import { CardText, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import { partition } from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink, BigSubheader, JumboSubheader } from '../components/Common';
import EventsArchive from '../components/EventsArchive';
import FeaturedEventCard from '../components/FeaturedEventCard';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import { isPastEvent } from './../helpers/dateHelper';

const Events = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [pastEvents, upcomingEvents] = partition(
    nodes,
    node => isPastEvent(node.frontmatter.eventDate),
  );

  return (
    <Layout
      title="Events"
      sidebarChildren={(
        <Fragment>
          <EventsArchive />
          <SidebarContents eventsQuantity={0} postsQuantity={2} />
        </Fragment>
      )}
    >
      <BackLink to="/" title="Home" />
      <Grid>
        <Cell size={12}>
          <div style={{ marginBottom: 30 }}>
            <JumboSubheader>Join us in-person!</JumboSubheader>
            <p style={{ fontWeight: 'bold' }}>Nikki provides playshops, speaking engagements, and more around the St. Louis area.</p>
          </div>
        </Cell>
        {Boolean(upcomingEvents.length) && <BigSubheader>Upcoming Events</BigSubheader>}
        {upcomingEvents.map(node => (
          <Cell key={node.frontmatter.title} size={12} style={{ padding: '20px 0px' }}>
            <FeaturedEventCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              eventDate={node.frontmatter.eventDate}
              eventTime={node.frontmatter.eventTime}
              eventDateShort={node.frontmatter.eventDateShort}
              image={node.frontmatter.image}
              eventPrice={node.frontmatter.eventPrice}
              priceDescription={node.frontmatter.priceDescription}
              location={node.frontmatter.location}
            />
          </Cell>
        ))}
        <BigSubheader>Past Events</BigSubheader>
        {pastEvents.map(node => (
          <Cell key={node.frontmatter.title} size={12} style={{ padding: '20px 0px' }}>
            <FeaturedEventCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              eventDate={node.frontmatter.eventDate}
              eventTime={node.frontmatter.eventTime}
              eventDateShort={node.frontmatter.eventDateShort}
              image={node.frontmatter.image}
              eventPrice={node.frontmatter.eventPrice}
              priceDescription={node.frontmatter.priceDescription}
              location={node.frontmatter.location}
            />
          </Cell>
        ))}
      </Grid>
    </Layout>
  );
};

Events.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Events;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "events"} } },
      sort: { fields: [frontmatter___eventDate], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            eventDate
            eventTime
            eventDateShort: eventDate
            eventPrice
            priceDescription
            location
          }
          excerpt(format: HTML, pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`;
