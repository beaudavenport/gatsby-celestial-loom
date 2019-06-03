import { Button, CardText, Media } from 'react-md';
import { Link } from 'gatsby';
import React from 'react';

import Nikki from '../../images/nikki.jpg';

const AboutNikkiCard = () => (
  <div>
    <div className="about-nikki--container">
      <Media aspectRatio="1-1" className="about-nikki--avatar">
        <img src={Nikki} alt="at da club" />
      </Media>
    </div>
    <CardText className="flex-column">
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
    </CardText>
  </div>
);

export default AboutNikkiCard;
