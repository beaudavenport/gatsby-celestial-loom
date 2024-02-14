import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import SidebarHeader from '../SidebarHeader';
import ThumbnailCard from '../ThumbnailCard';
import ThumbnailEventCard from '../ThumbnailCard/ThumbnailEventCard';

const SidebarContents = ({ eventsQuantity, postsQuantity }) => (
  <StaticQuery
    query={graphql`
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
       }
     `}
    render={(data) => {
      const blogNodes = data.blog.edges.map(edge => edge.node).slice(0, postsQuantity);
      const eventNodes = data.events.edges.map(edge => edge.node)
        .filter(node => moment().isBefore(moment(node.frontmatter.eventDate, 'MMMM DD, YYYY')))
        .slice(0, eventsQuantity);
      return (
        <div>
          <SidebarHeader title="Latest Updates" />
          <div className="content-container">
            { eventNodes.length > 0 && eventNodes.map(node => (
              <ThumbnailEventCard
                key={node.frontmatter.title}
                path={node.fields.slug}
                title={node.frontmatter.title}
                image={node.frontmatter.image}
                location={node.frontmatter.location}
                eventTime={node.frontmatter.eventTime}
                eventDate={node.frontmatter.eventDate}
              />
            ))
           }
            { blogNodes.length > 0 && blogNodes.map(node => (
              <ThumbnailCard
                small
                key={node.frontmatter.title}
                path={node.fields.slug}
                title={node.frontmatter.title}
                caption={node.frontmatter.publishDate}
                image={node.frontmatter.image}
              />
            ))
           }
          </div>
        </div>
      );
    }}
  />
);

SidebarContents.propTypes = {
  eventsQuantity: PropTypes.number.isRequired,
  postsQuantity: PropTypes.number.isRequired,
};

export default SidebarContents;
