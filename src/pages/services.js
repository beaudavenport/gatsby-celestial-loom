import {
  Grid, Cell,
} from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import SidebarContents from '../components/SidebarContents';

const Services = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstServiceNode, ...otherServiceNodes] = nodes.filter(node => node.frontmatter.type === 'services');

  return (
    <Layout>
      <Grid style={{ padding: '20px' }}>
        <Cell size={8}>
          <h1>Services</h1>
          <Grid>
            <Cell size={4}>
              <ServiceCard
                path={firstServiceNode.fields.slug}
                title={firstServiceNode.frontmatter.title}
              />
            </Cell>
            { otherServiceNodes && otherServiceNodes.map(node => (
              <Cell size={4}>
                <ServiceCard
                  path={node.fields.slug}
                  title={node.frontmatter.title}
                />
              </Cell>
            ))
            }
          </Grid>
        </Cell>
        <Cell size={4}>
          <SidebarContents eventsQuantity={0} postsQuantity={2} />
        </Cell>
      </Grid>
    </Layout>
  );
};

Services.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Services;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
