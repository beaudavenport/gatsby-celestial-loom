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
          {eventNodes.length > 0 && <h5 style={{ fontStyle: 'italic' }}>Upcoming events</h5>}
          { eventNodes.length > 0 && eventNodes.map(node => (
            <ThumbnailCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<DateThumbnail day="12" month="JUN" />}
            />
          ))
           }
          {blogNodes.length > 0 && <h5 style={{ fontStyle: 'italic' }}>Latest Articles</h5>}
          { blogNodes.length > 0 && blogNodes.map(node => (
            <ThumbnailCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption="07/12/16"
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
