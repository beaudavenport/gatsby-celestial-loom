import { Card, Cell, Grid } from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { BackLink } from '../components/Common';
import CenteredCell from '../components/CenteredCell';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import ServicesArchive from '../components/ServicesArchive';
import SidebarContents from '../components/SidebarContents';

const Services = ({ data }) => {
  const { natalChart, otherServices } = data;
  const otherServiceNodes = otherServices.edges.map(edge => edge.node);

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
      <BackLink to="/" title="Home" />
      <Grid>
        <Cell size={12}>
          <Card>
            <Grid>
              <CenteredCell
                title="Your Astrological Foundation - Online or In-Person!"
                fontIconName="person"
              >
                <p style={{ fontWeight: 'bold' }}>
                  Build the foundation of your astrological understanding with a
                  <span className="subheader"> Natal Chart analysis!</span>
                </p>
                <p style={{ fontWeight: 'bold' }}>See how the lifelong insights gained from this service can help enrich your life...</p>
              </CenteredCell>
              <Cell size={6} tabletSize={4}>
                <ServiceCard
                  path={natalChart.fields.slug}
                  title={natalChart.frontmatter.title}
                  origin={natalChart.frontmatter.origin}
                  onlinePrice={natalChart.frontmatter.onlinePrice}
                  inPersonPrice={natalChart.frontmatter.inPersonPrice}
                  excerpt={natalChart.excerpt}
                />
              </Cell>
            </Grid>
          </Card>
        </Cell>
      </Grid>
      <Grid>
        { otherServiceNodes && otherServiceNodes.map(node => (
          <Cell size={6} tabletSize={4}>
            <Card>
              <ServiceCard
                path={node.fields.slug}
                title={node.frontmatter.title}
                origin={node.frontmatter.origin}
                onlinePrice={node.frontmatter.onlinePrice}
                inPersonPrice={node.frontmatter.inPersonPrice}
                excerpt={node.excerpt}
              />
            </Card>
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
    natalChart: markdownRemark(frontmatter: { type: { eq: "services"} title: { eq: "Natal Chart"}}) {
      id
      frontmatter {
        title
        type
        onlinePrice
        inPersonPrice
        origin
      }
      excerpt(format: HTML, pruneLength: 250)
      fields {
        slug
      }
    }
    otherServices: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "services"} title: { ne: "Natal Chart"}} },
      sort: { fields: [frontmatter___publishDate], order: DESC }
    ) {
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
          excerpt(format: HTML, pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`;
