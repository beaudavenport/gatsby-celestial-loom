module.exports = {
  siteMetadata: {
    title: 'The Celestial Loom',
    titleTemplate: '%s | The Celestial Loom',
    description: 'Nikki Davenport, Astrological Consultant, weaves timeless wisdom with modern service.',
    url: 'https://celestialloomastrology.com',
    image: '/assets/2019-cosmic-preview.jpg',
    twitterUsername: 'nikiastro',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'markdown-pages',
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        /**
         * One convention is to place your Decap CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: 'Celestial Loom Admin',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f3f3f3',
        theme_color: '#f3f3f3',
        display: 'minimal-ui',
        icon: 'src/images/celestial-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        fields: ['title'],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            type: node => node.frontmatter.type,
            publishDate: node => node.frontmatter.publishDate,
            path: node => node.fields.slug,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
