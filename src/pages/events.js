import { Card, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FeaturedEventCard from '../components/FeaturedEventCard';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';

const Events = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout
      title="Events"
      sidebarChildren={(
        <SidebarContents eventsQuantity={0} postsQuantity={2} />
      )}
    >
      <Grid>
        {nodes.map(node => (
          <Cell size={12}>
            <Card style={{ padding: 10 }}>
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
            </Card>
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
      sort: { fields: [frontmatter___publishDate], order: DESC }
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
          excerpt(pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`;
