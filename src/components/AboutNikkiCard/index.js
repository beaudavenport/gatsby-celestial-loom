import {
  Button, Card, CardText, Media,
} from 'react-md';
import { Link } from 'gatsby';
import React from 'react';

import Nikki from '../../images/nikki.jpg';

const AboutNikkiCard = () => (
  <div>
    <div style={{ width: '40%', margin: '0 auto', paddingTop: '20px' }}>
      <Media aspectRatio="1-1" style={{ borderRadius: '50%', border: '2px solid #ff8013' }}>
        <img src={Nikki} alt="at da club" />
      </Media>
    </div>
    <CardText style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{
        fontSize: 'smaller', color: 'rgb(236, 102, 2)', fontWeight: 'bold', textAlign: 'center',
      }}
      >
      Nikki Davenport, astrological consultant, has been a professional
      astrologer for over 35 years.
      </p>
      <Button
        flat
        primary
        style={{
          height: 'auto', color: 'rgb(236, 102, 2)', fontWeight: 'bold', lineHeight: '14px', fontFamily: 'Martel', border: '1px solid', margin: '0 auto',
        }}
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
