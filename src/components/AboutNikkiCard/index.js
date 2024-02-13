import { CardContent } from "@react-md/card";
import { Button } from "@react-md/button";
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
      <Button
        flat
        primary
        className="about-nikki--button"
        to="/about-nikki"
        type={null}
        component={Link}
      >
      About Nikki
      </Button>
    </CardContent>
  </div>
);

export default AboutNikkiCard;
