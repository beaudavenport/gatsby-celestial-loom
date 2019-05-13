import { Avatar, FontIcon } from 'react-md';
import { StaticQuery, graphql } from 'gatsby';
import { uniq } from 'lodash';
import React from 'react';

import ArchiveCard from '../ArchiveCard';
import SidebarHeader from '../SidebarHeader';

const ServicesArchive = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "services"} } },
          sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                type
                onlinePrice
                inPersonPrice
                origin
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
      const origins = uniq(nodes.map(node => node.frontmatter.origin));
      const sections = origins.map((origin) => {
        const nodesForOrigin = nodes.filter(node => node.frontmatter.origin === origin);
        return {
          primaryText: origin,
          secondaryText: `${nodesForOrigin.length} services`,
          items: nodesForOrigin.map(node => ({
            primaryText: node.frontmatter.title,
            secondaryText: `Online: $${Number(node.frontmatter.onlinePrice).toFixed(2)} | In-person: $${Number(node.frontmatter.inPersonPrice).toFixed(2)} `,
            slug: node.fields.slug,
            avatar: (<Avatar icon={<FontIcon>shopping_cart</FontIcon>} />),
          })),
        };
      });

      return (
        <div style={{ marginBottom: 30, marginTop: 20 }}>
          <SidebarHeader title="Services by Origin" />
          <div>
            <ArchiveCard sections={sections} />
          </div>
        </div>
      );
    }}
  />
);

export default ServicesArchive;
