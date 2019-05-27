import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEOAndScripts = ({
  title, description, image, pathname, article,
}) => (
  <StaticQuery
    query={
      graphql`query{
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }`
    }
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      };

      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(article ? true : null) && (
            <meta property="og:type" content="article" />
          )}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          <meta name="twitter:card" content="summary_large_image" />
          {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
          )}
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && <meta name="twitter:image" content={seo.image} />}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjQ4NTMxNDAtYWU5NS00MjRkLTliNjItYzU4ZWM3NDM3Mzk5NjM2ODU2Njg0NDE5MzU2MDg3" id="snipcart" />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Helmet>
      );
    }}
  />
);

export default SEOAndScripts;

SEOAndScripts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEOAndScripts.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};
