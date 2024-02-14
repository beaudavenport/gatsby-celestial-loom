import { Grid, GridCell } from "@react-md/utils"
import { Card } from '@react-md/card'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { BigSubheader, ForwardLink } from '../components/Common';
import AboutNikkiCard from '../components/AboutNikkiCard';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import RelatedItemChipList from '../components/RelatedItemChipList';
import ServiceCard from '../components/ServiceCard';
import SidebarHeader from '../components/SidebarHeader';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.blog.edges.map(edge => edge.node);
  const firstEventNode = data.events.edges.map(edge => edge.node)
    .find(node => moment().isBefore(moment(node.frontmatter.eventDate, 'MMMM DD, YYYY')));
  const { featuredService } = data;

  return (
    <Layout
      title="Home"
      jumbotron={<Jumbotron />}
      sidebarChildren={(
        <Grid noSpacing>
          <GridCell colSpan={12}>
            <SidebarHeader title="About Nikki" />
          </GridCell>
          <GridCell colSpan={12} tabletSize={4} className="about-nikki--card">
            <AboutNikkiCard />
          </GridCell>
          <GridCell colSpan={12}>
            <SidebarHeader title="Stay Connected" />
          </GridCell>
          <GridCell colSpan={12} tabletSize={4}>
          <div class="fb-page" data-href="https://www.facebook.com/celestialloom" data-tabs="timeline,events" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
          </GridCell>
        </Grid>
      )}
    >
      <Grid className="separated--grid">
        <GridCell colSpan={12}>
          <BigSubheader>Featured Post</BigSubheader>
        </GridCell>
        <GridCell colSpan={12} style={{ marginBottom: 10 }}>
          <FeaturedCard
            path={firstBlogNode.fields.slug}
            title={firstBlogNode.frontmatter.title}
            publishDate={firstBlogNode.frontmatter.publishDate}
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
            relatedItemChips={
              firstBlogNode.frontmatter.relatedItems && (
              <RelatedItemChipList relatedItems={firstBlogNode.frontmatter.relatedItems} />
              )
            }
          />
        </GridCell>
      </Grid>
      <Grid className="separated--grid">
        <GridCell colSpan={12}>
          <div className="homepage--header">
            <BigSubheader>Previous Posts</BigSubheader>
            <ForwardLink to="/posts" title="All Posts" />
          </div>
        </GridCell>
        { otherBlogNodes && otherBlogNodes.map(node => (
          <GridCell key={node.frontmatter.title} colSpan={6} tabletSize={4} className="content-container">
            <ThumbnailCard
              style={{ marginBottom: 10 }}
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              image={node.frontmatter.image}
            />
          </GridCell>
        ))
          }
      </Grid>
      { firstEventNode && (
        <Grid className="separated--grid">
          <GridCell colSpan={12}>
            <div className="homepage--header">
              <BigSubheader>Next Event</BigSubheader>
              <ForwardLink to="/events" title="All Events" />
            </div>
          </GridCell>
          <GridCell colSpan={12}>
            <FeaturedEventCard
              path={firstEventNode.fields.slug}
              title={firstEventNode.frontmatter.title}
              eventDate={firstEventNode.frontmatter.eventDate}
              eventTime={firstEventNode.frontmatter.eventTime}
              eventDateShort={firstEventNode.frontmatter.eventDateShort}
              image={firstEventNode.frontmatter.image}
              eventPrice={firstEventNode.frontmatter.eventPrice}
              priceDescription={firstEventNode.frontmatter.priceDescription}
              location={firstEventNode.frontmatter.location}
            />
          </GridCell>
        </Grid>
      )}
      <Grid className="separated--grid">
        <GridCell colSpan={12}>
          <div className="homepage--header">
            <BigSubheader>Featured Service</BigSubheader>
            <ForwardLink to="/services" title="All Services" />
          </div>
        </GridCell>
        <GridCell colSpan={12}>
          <Card>
            <ServiceCard
              path={featuredService.fields.slug}
              title={featuredService.frontmatter.title}
              origin={featuredService.frontmatter.origin}
              onlinePrice={featuredService.frontmatter.onlinePrice}
              inPersonPrice={featuredService.frontmatter.inPersonPrice}
              excerpt={featuredService.excerpt}
            />
          </Card>
        </GridCell>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
query {
  blog: allMarkdownRemark(
    limit: 3
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
        excerpt(format: HTML, pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
  events: allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "events"} } },
    sort: { fields: [frontmatter___eventDate], order: ASC }
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
          eventDateShort: eventDate
          eventPrice
          priceDescription
          location
        }
        excerpt(format: HTML, pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
  featuredService: markdownRemark(frontmatter: { type: { eq: "services" } isFeatured: { eq: true} }) {
    excerpt(format: HTML, pruneLength: 250)
    frontmatter {
      title
      origin
      onlinePrice
      inPersonPrice
    }
    fields {
      slug
    }
  }
}
`;
