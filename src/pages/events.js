import { CardText, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink, BigSubheader } from '../components/Common';
import EventsArchive from '../components/EventsArchive';
import FeaturedEventCard from '../components/FeaturedEventCard';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

const Events = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

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
          <CardText>
            <BigSubheader>Join us in-person!</BigSubheader>
            <p style={{ fontWeight: 'bold' }}>Nikki provides playshops, speaking engagements, and more around the St. Louis area.</p>
          </CardText>
        </Cell>
        {nodes.map(node => (
          <Cell size={12} style={{ padding: '20px 0px' }}>
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
            eventDate(formatString: "MMM DD, YYYY")
            eventTime
            eventDateShort: eventDate(formatString: "MMM DD")
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
