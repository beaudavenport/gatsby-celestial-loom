import { Paper } from 'react-md';
import React from 'react';

import { ForwardLink } from '../Common';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Jumbotron = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "astroglobe.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Paper>
      <BackgroundImage
        className="jumbotron--bg" 
        Tag="section"
        fluid={data.desktop.childImageSharp.fluid}
        zDepth={0}
      >
        <div className="jumbotron--container">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
            <div>
              <h1 className="jumbotron--title">The Celestial Loom</h1>
              <p className="jumbotron--subtitle">Astrological Services</p>
            </div>
          </div>
          <div className="jumbotron--subtext--container">
            <p className="jumbotron--subtext">
                Nikki Davenport, Astrological Consultant,
                weaves timeless wisdom with modern service.
            </p>
            <div style={{ textAlign: 'right' }}>
              <ForwardLink to="/getting-started" title="Get Started" alignRight titleStyle={{ fontSize: '1.5rem' }} />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Paper>
  );
}

export default Jumbotron;
