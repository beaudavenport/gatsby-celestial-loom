import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { HeyMom, Subtitle } from '../components/Common';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import ThumbnailCard from '../components/ThumbnailCard';

const GettingStarted = ({ data }) => {
  const [firstBlogNode] = data.blog.edges.map(edge => edge.node);
  const [firstEventNode] = data.events.edges.map(edge => edge.node);

  return (
    <Layout
      title="Astrology 101"
      sidebarChildren={(
        <Fragment>
          <SidebarHeader title="Welcom to... Astrology?" />
          <div style={{
            width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
          }}
          >
            <HeyMom>What do you want here?</HeyMom>
          </div>
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
      )}
    >
      <Grid>
        <Cell size={12}>
          <h3>Welcome to the world of Astrology!</h3>
        </Cell>
        <Cell size={6}>
          <Card>
            <CardText>
              <p>Get you a chart</p>
              <div style={{
                width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
              }}
              >
                <HeyMom><span style={{ fontWeight: 'bold' }}>Thinking maybe a service card here?</span></HeyMom>
              </div>
            </CardText>
          </Card>
        </Cell>
        <Cell size={6}>
          <div style={{
            width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
          }}
          >
            <HeyMom><span style={{ fontWeight: 'bold' }}>And a description here?</span></HeyMom>
          </div>
        </Cell>
        <Cell size={6}>
          <ThumbnailCard
            style={{ marginBottom: 10 }}
            path={firstBlogNode.fields.slug}
            title={firstBlogNode.frontmatter.title}
            caption={firstBlogNode.frontmatter.publishDate}
            thumbnailChildren={<ImageThumbnail imageUrl={firstBlogNode.frontmatter.image} />}
          />
        </Cell>
        <Cell size={6}>
          <Subtitle>Blog</Subtitle>
          <CardText>Ut suscipit neque non pharetra vestibulum. at condimentum finibus, diam tellus gravida felis, eu rhoncus felis quam at augue. Suspendisse malesuada, orci nec placerat vestibulum, nulla sem interdum mauris, nec rhoncus eros felis sollicitudin nunc. Nullam erat nibh, vulputate nec lacus vel ornare sit amet </CardText>
        </Cell>
        <Cell size={6}>
          <Card>
            <CardText>
              <p>Attend you an event</p>
              <div style={{
                width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
              }}
              >
                <HeyMom>What do you want here?</HeyMom>
              </div>
            </CardText>
          </Card>
        </Cell>
        <Cell size={6}>
          <h3>See what all the fuss is about!</h3>
        </Cell>
      </Grid>
    </Layout>
  );
};

GettingStarted.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default GettingStarted;

export const query = graphql`
query {
  blog: allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "blog"} } },
    sort: { fields: [frontmatter___publishDate], order: DESC }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          publishDate(formatString: "MMMM DD, YYYY")
          relatedItems
        }
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
  events: allMarkdownRemark(
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
          eventDate(formatString: "MMMM DD, YYYY")
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
