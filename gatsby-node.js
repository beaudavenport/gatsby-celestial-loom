const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___publishDate] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`,
        ),
        context: {}, // additional data can be passed via context
      });
    });
  });
};
