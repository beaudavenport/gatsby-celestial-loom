import { Avatar, FontIcon } from 'react-md';
import { StaticQuery, graphql } from 'gatsby';
import { uniq } from 'lodash';
import React from 'react';

import ArchiveCard from '../ArchiveCard';
import SidebarHeader from '../SidebarHeader';

const PostsArchive = () => (
  <StaticQuery
    query={graphql`
       query {
         allMarkdownRemark(
           filter: { frontmatter: { type: { eq: "blog"} } },
           sort: { fields: [frontmatter___publishDate], order: DESC }
         ) {
           totalCount
           edges {
             node {
               id
               frontmatter {
                 title
                 publishMonthAndYear: publishDate
                 publishDate
               }
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
      const monthsAndYears = uniq(nodes.map(node => node.frontmatter.publishMonthAndYear));
      const sections = monthsAndYears.map((monthAndYear) => {
        const nodesForMonthAndYear = nodes.filter(node => node.frontmatter.publishMonthAndYear === monthAndYear);
        return {
          primaryText: monthAndYear,
          secondaryText: `${nodesForMonthAndYear.length} entries`,
          items: nodesForMonthAndYear.map(node => ({
            primaryText: node.frontmatter.title,
            secondaryText: node.frontmatter.publishDate,
            slug: node.fields.slug,
            avatar: (<Avatar icon={<FontIcon>create</FontIcon>} />),
          })),
        };
      });

      return (
        <div className="archive--container">
          <SidebarHeader title="Post Archives" />
          <div>
            <ArchiveCard sections={sections} />
          </div>
        </div>
      );
    }}
  />
);

export default PostsArchive;
