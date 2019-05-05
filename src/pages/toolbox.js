import { CardText, List } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import ToolboxRow from '../components/ToolboxRow';

const Toolbox = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const planetNodes = nodes.filter(node => node.frontmatter.toolboxType === 'planets');
  const signNodes = nodes.filter(node => node.frontmatter.toolboxType === 'signs');
  const houseNodes = nodes.filter(node => node.frontmatter.toolboxType === 'houses');

  return (
    <Layout
      title="Astro Toolbox"
      sidebarChildren={(
        <Fragment>
          <div style={{ marginBottom: 30, marginTop: 20 }}>
            <SidebarHeader title="Your Toolbox" />
            <CardText>
              <p>Your Astro Toolbox is your guide to understanding the planets, signs, houses, and what they mean!</p>
            </CardText>
          </div>
          <SidebarContents eventsQuantity={2} postsQuantity={0} />
        </Fragment>
  )}
    >
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
    </Layout>
  );
};

Toolbox.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Toolbox;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "toolbox"} } },
      sort: { fields: [frontmatter___publishDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            toolboxType
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
