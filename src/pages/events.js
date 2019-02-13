import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Cell,
} from 'react-md';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedCard from '../components/FeaturedCard';
import ThumbnailCard from '../components/ThumbnailCard';
import DateThumbnail from '../components/ThumbnailCard/dateThumbnail';

const Events = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstEventNode, ...otherEventNodes] = nodes.filter(node => node.frontmatter.type === 'events');

  return (
    <Layout>
      <h1>EVENTS</h1>
      <Grid style={{ padding: '20px' }}>
        <Cell size={8}>
          <FeaturedCard
            path={firstEventNode.frontmatter.path}
            title={firstEventNode.frontmatter.title}
            subtitle="subtitle here"
            image={firstEventNode.frontmatter.eventImage}
            excerpt={firstEventNode.excerpt}
          />
          <h1 style={{ fontStyle: 'italic' }}>Past Events</h1>
          { otherEventNodes && otherEventNodes.map(node => (
            <ThumbnailCard
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<DateThumbnail day="12" month="JUN" />}
            />
          ))
        }
        </Cell>
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
    allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            eventImage
            publishDate(formatString: "DD MMMM, YYYY")
            type
          }
          excerpt
        }
      }
    }
  }
`;
