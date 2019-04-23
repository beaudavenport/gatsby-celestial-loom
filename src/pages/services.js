import {
  CardText, Cell, Grid, Paper,
} from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import WesternChart from '../images/western-chart.jpg';

const Services = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstServiceNode, ...otherServiceNodes] = nodes.filter(node => node.frontmatter.type === 'services');

  return (
    <Layout
      title="Services"
      sidebarChildren={(
        <Fragment>
          <div style={{ marginBottom: 30, marginTop: 20 }}>
            <SidebarHeader title="Services" />
            <CardText>
              <p>Available Online or In-Person, a consultation is the best way to grow your understanding.</p>
            </CardText>
          </div>
          <SidebarContents eventsQuantity={1} postsQuantity={1} />
        </Fragment>
  )}

    >
      <Grid>
        <Cell size={12}>
          <Paper style={{
            background: `url(${WesternChart})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '300px',
            padding: 0,
          }}
          >
            <div style={{
              background: 'rgba(39,62,84,0.82)',
              overflow: 'hidden',
              height: '300px',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              justifyContent: 'center',
            }}
            >
              <p style={{
                fontStyle: 'italic', fontSize: 'xx-large', color: 'white', fontFamily: 'Berkshire Swash',
              }}
              >
          The Wisdom of the Zodiac - online or in person!
              </p>
            </div>
          </Paper>
        </Cell>
        <Cell size={6}>
          <ServiceCard
            path={firstServiceNode.fields.slug}
            title={firstServiceNode.frontmatter.title}
            origin={firstServiceNode.frontmatter.origin}
            price={firstServiceNode.frontmatter.price}
            excerpt={firstServiceNode.excerpt}
          />
        </Cell>
        { otherServiceNodes && otherServiceNodes.map(node => (
          <Cell size={6}>
            <ServiceCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              origin={node.frontmatter.origin}
              price={node.frontmatter.price}
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
            price
            origin
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
