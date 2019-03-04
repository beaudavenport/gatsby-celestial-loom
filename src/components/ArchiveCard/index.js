import { Card, CardText } from 'react-md';
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
          <h3>Archive</h3>
          <Card>
            <CardText>
              {sections.map(section => (
                <div>
                  <h5>{section.monthAndYear}</h5>
                  <ul>
                    {section.posts.map(post => (
                      <li><Link to={post.fields.slug}>{post.frontmatter.title}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardText>
          </Card>
        </div>
      );
    }}
  />
);

export default SidebarContents;
