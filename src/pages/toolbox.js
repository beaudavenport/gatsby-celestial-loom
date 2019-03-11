import { Cell, Grid, List } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import ToolboxRow from '../components/ToolboxRow';

const Toolbox = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const planetNodes = nodes.filter(node => node.frontmatter.type === 'planets');
  const signNodes = nodes.filter(node => node.frontmatter.type === 'signs');
  const houseNodes = nodes.filter(node => node.frontmatter.type === 'houses');

  return (
    <Layout title="Astro Toolbox">
      <Grid style={{ padding: '20px' }}>
        <Cell size={8}>
          <h3>Your Astro Toolbox</h3>
          <h4>All the components of your Chart</h4>
          <p>Planets</p>
          <p>Signs</p>
          <p>Houses</p>
          <h3>Signs</h3>
          <List>
            { signNodes.map(node => (
              <ToolboxRow
                path={node.fields.slug}
                title={node.frontmatter.title}
                icon={node.frontmatter.icon}
                excerpt={node.frontmatter.excerpt}
              />
            ))
            }
          </List>
          <h3>Houses</h3>
          <List>
            { houseNodes.map(node => (
              <ToolboxRow
                path={node.fields.slug}
                title={node.frontmatter.title}
                icon={node.frontmatter.icon}
                excerpt={node.frontmatter.excerpt}
              />
            ))
            }
          </List>
          <h3>Planets</h3>
          <List>
            { planetNodes.map(node => (
              <ToolboxRow
                path={node.fields.slug}
                title={node.frontmatter.title}
                icon={node.frontmatter.icon}
                excerpt={node.frontmatter.excerpt}
              />
            ))
            }
          </List>
        </Cell>
        <Cell size={4}>
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Cell>
      </Grid>
    </Layout>
  );
};

Toolbox.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Toolbox;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            icon
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
