import {
  Divider, FontIcon, List, ListItem,
} from 'react-md';
import { Link, StaticQuery, graphql } from 'gatsby';
import { uniq } from 'lodash';
import React from 'react';

const SidebarContents = () => (
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
        <div style={{ marginBottom: 30 }}>
          <div style={{ textAlign: 'right', paddingTop: 20, paddingRight: 10 }}>
            <h3 style={{ marginBottom: 5 }}>
              <FontIcon style={{ marginRight: 10 }}>create</FontIcon>
                Blog Archive
            </h3>
            <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Browse by month and year</p>
          </div>
          <Divider />
          <div>
            <List>
              {sections.map(section => (
                <ListItem
                  primaryText={section.monthAndYear}
                  secondaryText={`${section.posts && section.posts.length} entries`}
                  nestedItems={section.posts.map(post => (
                    <ListItem
                      primaryText={post.frontmatter.title}
                      secondaryText={post.frontmatter.publishDate}
                      component={Link}
                      to={post.fields.slug}
                    />
                  ))}
                />
              ))}
            </List>
          </div>
        </div>
      );
    }}
  />
);

export default SidebarContents;
