import { CardContent } from "@react-md/card";
import { MediaContainer } from "@react-md/media";
import React from 'react';

import Nikki from '../../images/nikki.jpg';
import { ForwardLink } from '../Common';

const AboutNikkiCard = () => (
  <div>
    <div className="about-nikki--container">
      <MediaContainer height={1} width={1} className="about-nikki--avatar">
        <img src={Nikki} alt="nikki-profile-picture" />
      </MediaContainer>
    </div>
    <CardContent className="flex-column">
      <p className="subheader">
        Nikki Davenport, astrological consultant, has been a professional
        astrologer for over 35 years.
      </p>
      <div className="about-nikki--link-container">
        <ForwardLink to="/about-nikki" title="Learn more" />
      </div>
    </CardContent>
  </div>
);

export default AboutNikkiCard;
