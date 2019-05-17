import { Cell, Divider, Grid } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { BigSubheader, ContentWithIcon, Title } from './Common';
import AddToCartButton from './AddToCartButton';
import ServiceCard from './ServiceCard';

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
      <Cell size={6} tabletSize={4} style={{ paddingRight: 10 }}>
        <ServiceCard
          path={slug}
          title={title}
          origin={origin}
          excerpt={excerpt}
          showPrices={false}
        />
      </Cell>
      <Cell size={6} tabletSize={4} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          <BigSubheader>Online Consultation</BigSubheader>
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
              <p className="event-signup-thumbnail--price" style={{ fontSize: '2rem' }}>{`$${Number(price).toFixed(2)}`}</p>
            </div>
            <AddToCartButton
              title={title}
              price={price}
              description="Online Consultation"
              slug={slug}
            />
          </div>
        </div>
      </Cell>
      <Cell size={12} style={{ marginTop: 20 }}>
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
          <span style={{ fontWeight: 'bold' }}>nikiastro@att.net</span>
          !
        </p>
      </Cell>
    </Grid>
  );
}

ServicePage.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServicePage;
