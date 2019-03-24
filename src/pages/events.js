import {
  Grid, Cell,
} from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import DateThumbnail from '../components/ThumbnailCard/dateThumbnail';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';

const Events = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstEventNode, ...otherEventNodes] = nodes.filter(node => node.frontmatter.type === 'events');

  return (
    <Layout title="Events">
      <Grid style={{ maxWidth: 1100 }}>
        <Cell size={8}>
          <h1>Upcoming events</h1>
          <ThumbnailCard
            path={firstEventNode.fields.slug}
            title={firstEventNode.frontmatter.title}
            caption="subtitle here"
            thumbnailChildren={<DateThumbnail day="4" month="July" />}
          />
          <h1 style={{ fontStyle: 'italic' }}>Past Events</h1>
          { otherEventNodes && otherEventNodes.map(node => (
            <ThumbnailCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<DateThumbnail day="12" month="JUN" />}
            />
          ))
        }
        </Cell>
        <Cell size={4}>
          <SidebarContents eventsQuantity={0} postsQuantity={2} />
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
            title
            eventImage
            publishDate(formatString: "DD MMMM, YYYY")
            type
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
