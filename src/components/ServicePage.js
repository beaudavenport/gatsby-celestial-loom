import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Title } from './Common';
import getOrigin from '../helpers/originService';

function ServicePage(props) {
  const {
    title,
    origin = 'Western',
    onlinePrice,
    inPersonPrice,
    html,
    slug,
  } = props;
  const { backgroundUrl, overlayColor } = getOrigin(origin);
  return (
    <div>
      <div style={{
        background: `url(${backgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '75px',
        padding: 0,
      }}
      >
        <div style={{
          background: overlayColor,
          overflow: 'hidden',
          height: '75px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          justifyContent: 'center',
        }}
        >
          <p style={{
            color: 'white', fontSize: '1.3rem', fontWeight: 'bold', opacity: 0.9,
          }}
          >
            {origin}
          </p>
        </div>
      </div>
      <CardText>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Grid>
          <Cell size={12}>
            <h3>Choose an Option:</h3>
          </Cell>
          <Cell size={6}>
            <Card>
              <Link to={`${slug}/online`}>
                <p>Online Consultation</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{`$${Number(onlinePrice).toFixed(2)}`}</p>
              </Link>
            </Card>
          </Cell>
          <Cell>
            <Card>
              <Link to={`${slug}/in-person`}>
                <p>In-Person Consultation</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{`$${Number(inPersonPrice).toFixed(2)}`}</p>
              </Link>
            </Card>
          </Cell>
        </Grid>
      </CardText>
    </div>
  );
}

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onlinePrice: PropTypes.string.isRequired,
  inPersonPrice: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ServicePage;
