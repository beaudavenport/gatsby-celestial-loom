import { useStaticQuery, graphql } from 'gatsby';

const useAllToolboxNodes = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "toolbox"} } },
        sort: { fields: [frontmatter___order], order: ASC }
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
  `,
  );
  return allMarkdownRemark.edges.map(edge => edge.node);
};

export default useAllToolboxNodes;
