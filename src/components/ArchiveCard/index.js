import {
  Card, CardText, CardTitle, List, ListItem,
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
                 publishDate(formatString: "MMMM YYYY")
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
        <div>
          <Card>
            <CardTitle
              title="Archive"
              subtitle="Browse previous entries by month and year"
            />
            <CardText>
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
            </CardText>
          </Card>
        </div>
      );
    }}
  />
);

export default SidebarContents;
