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
          <div style={{ borderBottom: '3px solid #ec6602', marginBottom: 20, paddingRight: 10 }}>
            <h4 className="sidebar-header">
              <FontIcon style={{ marginRight: 10 }}>create</FontIcon>
             Blog Archives
            </h4>
          </div>
          <div>
            <List>
              {sections.map((section, index) => (
                <div>
                  { index > 0 && <Divider />}
                  <ListItem
                    primaryText={section.monthAndYear}
                    secondaryText={`${section.posts && section.posts.length} entries`}
                    nestedItems={section.posts.map((post, nestedIndex) => (
                      <div>
                        { nestedIndex > 0 && <Divider inset />}
                        <ListItem
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

export default SidebarContents;
