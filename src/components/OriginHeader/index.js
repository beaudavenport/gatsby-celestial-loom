import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import getOrigin from '../../helpers/originService';

const OriginHeader = ({ origin }) => {
  const { backgroundUrl, overlayColor } = getOrigin(origin);

  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "western-chart.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className="origin--header--bg">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            objectFit="Cover"
            objectPosition="Center"
            style={{ position: 'absolute', width: '100%', height: '90px' }}
          />
          <div className="origin--header--overlay" style={{ background: overlayColor }}>
            <p className="origin--header--title">{origin}</p>
          </div>
        </div>
      )}
    />

  );
};

OriginHeader.propTypes = {
  origin: PropTypes.string.isRequired,
};

export default OriginHeader;
