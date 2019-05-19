import {
  Card, CardText, Cell, Divider, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import {
  BackLink,
  BigSubheader,
  ContentWithIcon,
  Subtitle,
  Title,
} from './Common';
import HeaderCart from './HeaderCart';
import TextWithChevron from './TextWithChevron';
import TouchableLink from './TouchableLink';
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
      <BackLink to="/services" title="Back to Services" />
      <div style={{
        background: `url(${backgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '90px',
        padding: 0,
      }}
      >
        <div style={{
          background: overlayColor,
          overflow: 'hidden',
          height: '90px',
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
            <Subtitle>Choose an Option:</Subtitle>
          </Cell>
          <Cell size={6} tabletSize={4}>
            <TouchableLink to={`${slug}/online`}>
              <Card>
                <div style={{ padding: 15 }}>
                  <BigSubheader>Online Consultation</BigSubheader>
                </div>
                <div style={{ padding: 10 }}>
                  <ContentWithIcon fontIconName="volume_up"><p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>60-Minute Audio MP3</p></ContentWithIcon>
                  <ContentWithIcon fontIconName="picture_as_pdf"><p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>Full-color PDF</p></ContentWithIcon>
                  <ContentWithIcon fontIconName="cloud_download">
                    <p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>
                    Easy email delivery via
                      {' '}
                      <a href="https://www.dropbox.com/">Dropbox</a>
                    </p>
                  </ContentWithIcon>
                </div>
                <Divider />
                <div style={{
                  display: 'flex', justifyContent: 'space-between', padding: 15, alignItems: 'center',
                }}
                >
                  <div>
                    <p className="event-signup-thumbnail--price-description" style={{ color: 'rgba(0, 0, 0, 0.54)', marginBottom: 2, fontSize: '.9rem' }}>Online Total</p>
                    <p className="event-signup-thumbnail--price" style={{ fontSize: '2rem' }}>{`$${Number(onlinePrice).toFixed(2)}`}</p>
                  </div>
                  <TextWithChevron text="Select" />
                </div>
              </Card>
            </TouchableLink>
          </Cell>
          <Cell size={6} tabletSize={4}>
            <TouchableLink to={`${slug}/in-person`}>
              <Card>
                <div style={{ padding: 15 }}>
                  <BigSubheader>In-Person Consultation</BigSubheader>
                </div>
                <div style={{ padding: 10 }}>
                  <ContentWithIcon fontIconName="face"><p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>90-minute in-person discussion</p></ContentWithIcon>
                  <ContentWithIcon fontIconName="picture_as_pdf"><p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>Full-color PDF</p></ContentWithIcon>
                  <ContentWithIcon fontIconName="volume_up"><p style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: 'bold' }}>Free live session recording</p></ContentWithIcon>
                </div>
                <Divider />
                <div style={{
                  display: 'flex', justifyContent: 'space-between', padding: 15, alignItems: 'center',
                }}
                >
                  <div>
                    <p className="event-signup-thumbnail--price-description" style={{ color: 'rgba(0, 0, 0, 0.54)', marginBottom: 2, fontSize: '.9rem' }}>In-Person Total</p>
                    <p className="event-signup-thumbnail--price" style={{ fontSize: '2rem' }}>{`$${Number(inPersonPrice).toFixed(2)}`}</p>
                  </div>
                  <TextWithChevron text="Select" />
                </div>
              </Card>
            </TouchableLink>
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
