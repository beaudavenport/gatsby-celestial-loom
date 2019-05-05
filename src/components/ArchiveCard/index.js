import {
  Avatar, FontIcon, List, ListItem,
} from 'react-md';
import { Link, StaticQuery, graphql } from 'gatsby';
import { uniq } from 'lodash';
import React from 'react';

import SidebarHeader from '../SidebarHeader';

const ArchiveCard = () => (
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
                 publishMonthAndYear: publishDate(formatString: "MMMM YYYY")
                 publishDate(formatString: "MMMM DD, YYYY")
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
      const sections = monthsAndYears.map(monthAndYear => ({
        monthAndYear,
        posts: nodes.filter(node => node.frontmatter.publishMonthAndYear === monthAndYear),
      }));

      return (
        <div style={{ marginBottom: 30, marginTop: 20 }}>
          <SidebarHeader title="Archives" />
          <div>
            <List>
              {sections.map(section => (
                <div>
                  <ListItem
                    primaryTextStyle={{ fontWeight: 'bold' }}
                    primaryText={section.monthAndYear}
                    secondaryText={`${section.posts && section.posts.length} entries`}
                    nestedItems={section.posts.map(post => (
                      <div>
                        <ListItem
                          leftAvatar={<Avatar icon={<FontIcon>create</FontIcon>} />}
                          primaryTextStyle={{ fontWeight: 'bold' }}
                          primaryText={post.frontmatter.title}
                          secondaryText={post.frontmatter.publishDate}
                          component={Link}
                          to={post.fields.slug}
                        />
                      </div>
                    ))}
                  />
                </div>
              ))}
            </List>
          </div>
        </div>
      );
    }}
  />
);

export default ArchiveCard;
