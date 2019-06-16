import {
  Card, CardText, Cell, Divider, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import {
  BigSubheader, ContentWithIcon, Subtitle, Title,
} from '../Common';
import OriginHeader from '../OriginHeader';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const ServicePage = ({
  title,
  origin = 'Western',
  onlinePrice,
  inPersonPrice,
  html,
  slug,
}) => (
  <div>
    <OriginHeader origin={origin} />
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
              <div className="content-container">
                <ContentWithIcon fontIconName="volume_up"><p className="service-info">60-Minute Audio MP3</p></ContentWithIcon>
                <ContentWithIcon fontIconName="picture_as_pdf"><p className="service-info">Full-color PDF</p></ContentWithIcon>
                <ContentWithIcon fontIconName="cloud_download">
                  <p className="service-info">
                    Easy email delivery via
                    {' '}
                    <a href="https://www.dropbox.com/">Dropbox</a>
                  </p>
                </ContentWithIcon>
              </div>
              <Divider />
              <div className="service-option--container">
                <div>
                  <p className="service-price--description">Online Total</p>
                  <p className="service-price--price">{`$${Number(onlinePrice).toFixed(2)}`}</p>
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
              <div className="content-container">
                <ContentWithIcon fontIconName="face"><p className="service-info">90-minute in-person discussion</p></ContentWithIcon>
                <ContentWithIcon fontIconName="picture_as_pdf"><p className="service-info">Full-color PDF</p></ContentWithIcon>
                <ContentWithIcon fontIconName="volume_up"><p className="service-info">Free live session recording</p></ContentWithIcon>
              </div>
              <Divider />
              <div className="service-option--container">
                <div>
                  <p className="service-price--description">In-Person Total</p>
                  <p className="service-price--price">{`$${Number(inPersonPrice).toFixed(2)}`}</p>
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

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onlinePrice: PropTypes.number.isRequired,
  inPersonPrice: PropTypes.number.isRequired,
  html: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ServicePage;
