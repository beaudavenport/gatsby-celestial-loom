import { Cell, Grid, Paper } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

const Services = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstServiceNode, ...otherServiceNodes] = nodes.filter(node => node.frontmatter.type === 'services');

  return (
    <Layout
      title="Services"
      sidebarChildren={(
        <Fragment>
          <ServicesArchive />
          <SidebarContents eventsQuantity={1} postsQuantity={1} />
        </Fragment>
  )}

    >
      <Grid>
        <Cell size={12}>
          <Paper style={{ backgroundColor: 'white' }}>
            <p>Not sure where to begin? Check out our GETTING STARTED GUIDE</p>
          </Paper>
        </Cell>
        <Cell size={6} tabletSize={4}>
          <ServiceCard
            path={firstServiceNode.fields.slug}
            title={firstServiceNode.frontmatter.title}
            origin={firstServiceNode.frontmatter.origin}
            onlinePrice={firstServiceNode.frontmatter.onlinePrice}
            inPersonPrice={firstServiceNode.frontmatter.inPersonPrice}
            excerpt={firstServiceNode.excerpt}
          />
        </Cell>
        { otherServiceNodes && otherServiceNodes.map(node => (
          <Cell size={6} tabletSize={4}>
            <ServiceCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              origin={node.frontmatter.origin}
              onlinePrice={node.frontmatter.onlinePrice}
              inPersonPrice={node.frontmatter.inPersonPrice}
              excerpt={node.excerpt}
            />
          </Cell>
        ))
            }
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
            onlinePrice
            inPersonPrice
            origin
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
