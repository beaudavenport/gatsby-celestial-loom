import { CardContent } from "@react-md/card";
import { MediaContainer } from "@react-md/media";

import { Link } from 'gatsby';
import React from 'react';

import Nikki from '../../images/nikki.jpg';

const AboutNikkiCard = () => (
  <div>
    <div className="about-nikki--container">
      <MediaContainer aspectRatio="1-1" className="about-nikki--avatar">
        <img src={Nikki} alt="at da club" />
      </MediaContainer>
    </div>
    <CardContent className="flex-column">
      <p className="about-nikki--text">
      Nikki Davenport, astrological consultant, has been a professional
      astrologer for over 35 years.
      </p>
      <Link to={"/about-nikki"} style={{ textDecoration: 'none' }}>
        <p className="about-nikki--button">About Nikki</p>
      </Link>
    </CardContent>
  </div>
);

export default AboutNikkiCard;
