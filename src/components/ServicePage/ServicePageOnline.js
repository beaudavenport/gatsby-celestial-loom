import { GridCell, Grid } from '@react-md/utils';
import { Divider } from '@react-md/divider';
import PropTypes from 'prop-types';
import React from 'react';

import { BigSubheaderPrimary, ContentWithIcon, Title, Subtitle } from '../Common';
import AddToCartButton from '../AddToCartButton';
import ServiceCard from '../ServiceCard';

function ServicePage(props) {
  const {
    title,
    origin = 'Western',
    price,
    slug,
    excerpt,
  } = props;
  return (
    <Grid>
      <GridCell colSpan={6} style={{ paddingRight: 10 }}>
        <ServiceCard
          path={slug}
          title={title}
          origin={origin}
          excerpt={excerpt}
          showPrices={false}
        />
      </GridCell>
      <GridCell colSpan={6} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
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
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: 15, alignItems: 'center',
          }}
          >
            <div>
              <p className="service-price--description">Online Total:</p>
              <p className="service-price--price">{`$${Number(price).toFixed(2)}`}</p>
            </div>
            <AddToCartButton
              title={title}
              price={price}
              description="Online Consultation"
              slug={`${slug}online`}
            />
          </div>
        </div>
      </GridCell>
      <GridCell colSpan={12} style={{ marginTop: 20 }}>
        <ContentWithIcon fontIconName="search" fontIconStyle={{ fontSize: '2rem' }}>
          <Title>About Online Services</Title>
        </ContentWithIcon>
        <ul>
          <li>All materials will be securely delivered with Dropbox to your preferred email, where they will be available for download directly from the cloud. No email attachments and no sign up necessary!</li>
          <li>Please allow 1-2 weeks for preparation and delivery time.</li>
          <li>Secure checkout with Paypal</li>
        </ul>
        <p>
          <span style={{ fontWeight: 'bold' }}>Questions about this service or online ordering?</span>
          {' '}
              Contact Nikki directly at
          {' '}
          <a href="mailto: nikiastro@att.net"> nikiastro@att.net!</a>
        </p>
      </GridCell>
    </Grid>
  );
}

ServicePage.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServicePage;
