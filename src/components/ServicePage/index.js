import { CardContent } from "@react-md/card";
import { Grid, GridCell } from "@react-md/utils"
import { Card } from "@react-md/card";
import { Divider } from "@react-md/divider";

import PropTypes from 'prop-types';
import React from 'react';

import {
  BigSubheaderPrimary, ContentWithIcon, Subtitle, Title,
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
    <CardContent>
      <Title>{title}</Title>
      <div className="body-copy" dangerouslySetInnerHTML={{ __html: html }} />
      <Grid>
        <GridCell colSpan={12}>
          <Subtitle>Choose an Option:</Subtitle>
        </GridCell>
        <GridCell colSpan={6} tabletSize={4}>
          <Card>
            <TouchableLink to={`${slug}online`} style={{ padding: 8}}>
              <div style={{ padding: 15 }}>
                <BigSubheaderPrimary>Online Consultation</BigSubheaderPrimary>
              </div>
              <div className="content-container">
                <ContentWithIcon fontIconName="volume_up"><Subtitle>60-Minute Audio MP3</Subtitle></ContentWithIcon>
                <ContentWithIcon fontIconName="picture_as_pdf"><Subtitle>Full-color PDF</Subtitle></ContentWithIcon>
                <ContentWithIcon fontIconName="cloud_download">
                  <Subtitle>
                    Easy email delivery via
                    {' '}
                    <a href="https://www.dropbox.com/">Dropbox</a>
                  </Subtitle>
                </ContentWithIcon>
              </div>
              <Divider />
              <div className="service-option--container">
                <div>
                  <p className="service-price--description">Online Total:</p>
                  <p className="service-price--price">{`$${Number(onlinePrice).toFixed(2)}`}</p>
                </div>
                <TextWithChevron text="Select" />
              </div>
            </TouchableLink>
          </Card>
        </GridCell>
        <GridCell colSpan={6} tabletSize={4}>
          <Card>
            <TouchableLink to={`${slug}in-person`} style={{ padding: 8}}>
              <div style={{ padding: 15 }}>
                <BigSubheaderPrimary>In-Person Consultation</BigSubheaderPrimary>
              </div>
              <div className="content-container">
                <ContentWithIcon fontIconName="face"><Subtitle>90-minute in-person discussion</Subtitle></ContentWithIcon>
                <ContentWithIcon fontIconName="picture_as_pdf"><Subtitle>Full-color PDF</Subtitle></ContentWithIcon>
                <ContentWithIcon fontIconName="volume_up"><Subtitle>Free live session recording</Subtitle></ContentWithIcon>
              </div>
              <Divider />
              <div className="service-option--container">
                <div>
                  <p className="service-price--description">In-Person Total:</p>
                  <p className="service-price--price">{`$${Number(inPersonPrice).toFixed(2)}`}</p>
                </div>
                <TextWithChevron text="Select" />
              </div>
            </TouchableLink>
          </Card>
        </GridCell>
      </Grid>
    </CardContent>
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
