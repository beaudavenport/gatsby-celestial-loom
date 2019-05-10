import { Avatar, Chip } from 'react-md';
import { StaticQuery, graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { getSymbolSpan } from '../../helpers/symbolHelper';

const RelatedItemChip = ({ title, style }) => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "toolbox"} } },
        sort: { fields: [frontmatter___publishDate], order: DESC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              type
              toolboxType
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
      const item = nodes.find(node => node.frontmatter.title === title);
      return Boolean(item) && (
        <Chip
          style={{ ...style, cursor: 'pointer' }}
          onClick={() => item.fields.slug && navigate(item.fields.slug)}
          label={item.frontmatter.title}
          avatar={<Avatar iconSized>{getSymbolSpan(item.frontmatter.title)}</Avatar>}
        />
      );
    }}
  />
);

RelatedItemChip.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
};

export default RelatedItemChip;
