import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import DateThumbnail from '../ThumbnailCard/dateThumbnail';
import ImageThumbnail from '../ThumbnailCard/imageThumbnail';
import ThumbnailCard from '../ThumbnailCard';

const SidebarContents = ({ eventsQuantity, postsQuantity }) => (
  <StaticQuery
    query={graphql`
       query {
         allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
           totalCount
           edges {
             node {
               id
               frontmatter {
                 title
                 image
                 publishDate(formatString: "DD MMMM, YYYY")
                 eventDay: publishDate(formatString: "DD")
                 eventMonth: publishDate(formatString: "MMM")
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
     `}
    render={(data) => {
      const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
      const eventNodes = nodes.filter(node => node.frontmatter.type === 'events').slice(0, eventsQuantity);
      const blogNodes = nodes.filter(node => node.frontmatter.type === 'blog').slice(0, postsQuantity);
      return (
        <div>
          {eventNodes.length > 0 && <h5 className="sidebar-header">Upcoming Events</h5>}
          { eventNodes.length > 0 && eventNodes.map(node => (
            <ThumbnailCard
              small
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              thumbnailChildren={(
                <DateThumbnail
                  day={node.frontmatter.eventDay}
                  month={node.frontmatter.eventMonth}
                />
)}
            />
          ))
           }
          {blogNodes.length > 0 && <h5 className="sidebar-header">Latest Articles</h5>}
          { blogNodes.length > 0 && blogNodes.map(node => (
            <ThumbnailCard
              small
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              thumbnailChildren={<ImageThumbnail imageUrl={node.frontmatter.image} />}
            />
          ))
           }
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
