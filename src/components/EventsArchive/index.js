import { FontIcon } from '@react-md/icon';
import { Avatar } from "@react-md/avatar";
import { StaticQuery, graphql } from 'gatsby';
import { uniq } from 'lodash';
import React from 'react';

import ArchiveCard from '../ArchiveCard';
import SidebarHeader from '../SidebarHeader';

const EventsArchive = () => (
  <StaticQuery
    query={graphql`
       query {
         allMarkdownRemark(
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
                 eventMonthAndYear: eventDate(formatString: "MMMM YYYY")
                 eventDateShort: eventDate(formatString: "MMMM DD, YYYY")
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
      const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
      const monthAndYears = uniq(nodes.map(node => node.frontmatter.eventMonthAndYear));
      const sections = monthAndYears.map((monthAndYear) => {
        const nodesForMonth = nodes.filter(node => node.frontmatter.eventMonthAndYear === monthAndYear);
        return {
          primaryText: monthAndYear,
          secondaryText: `${nodesForMonth.length} events`,
          items: nodesForMonth.map(node => ({
            primaryText: node.frontmatter.title,
            secondaryText: `${node.frontmatter.eventDateShort} - ${node.frontmatter.location}`,
            slug: node.fields.slug,
            avatar: (<Avatar><FontIcon>event</FontIcon></Avatar>),
          })),
        };
      });

      return (
        <div className="archive--container">
          <SidebarHeader title="Events Calendar" />
          <div>
            <ArchiveCard sections={sections} />
          </div>
        </div>
      );
    }}
  />
);

export default EventsArchive;
