import { Cell, Divider, Grid } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { BigSubheader, ContentWithIcon, Title } from '../Common';
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
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: 15, alignItems: 'center',
          }}
          >
            <div>
              <p className="service-price--description">Online Total</p>
              <p className="service-price--price">{`$${Number(price).toFixed(2)}`}</p>
            </div>
            <AddToCartButton
              title={title}
              price={price}
              description="Online Consultation"
              slug={`${slug}/online`}
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
          <a href="mailto: nikiastro@att.net"> nikiastro@att.net!</a>
        </p>
      </Cell>
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
