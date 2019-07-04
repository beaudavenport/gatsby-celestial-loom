const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const basePath = `data/${node.frontmatter.type}/`;
    const slug = createFilePath({ node, getNode, basePath });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

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
              templateKey
              title
              relatedItems
              type
            }
            fields {
              slug
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
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`,
        ),
        context: {}, // additional data can be passed via context
      });
      if (node.frontmatter.type === 'services') {
        createPage({
          path: `${node.fields.slug}online/`,
          component: path.resolve(
            'src/templates/serviceOnline.js',
          ),
          context: {
            serviceSlug: node.fields.slug,
          },
        });
        createPage({
          path: `${node.fields.slug}in-person/`,
          component: path.resolve(
            'src/templates/serviceInPerson.js',
          ),
          context: {
            serviceSlug: node.fields.slug,
          },
        });
      }
    });
    Promise.resolve();
  });
};
