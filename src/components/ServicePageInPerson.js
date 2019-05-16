import {
  Button, Cell, Divider, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { BigSubheader, ContentWithIcon, Title } from './Common';
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
      <Cell size={6} tabletSize={4} style={{ display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
        <div>
          <BigSubheader>In-Person Consultation</BigSubheader>
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
              <p className="event-signup-thumbnail--price" style={{ fontSize: '2rem' }}>{`$${Number(price).toFixed(2)}`}</p>
            </div>
            <Button
              raised
              primary
              className="snipcart-add-item"
              data-item-id="2"
              data-item-name={title}
              data-item-price={price}
              data-item-weight="20"
              data-item-url="/"
              data-item-description="Event"
              data-item-custom1-name="Name"
              data-item-custom1-required="true"
              data-item-custom2-name="Date of Birth"
              data-item-custom2-required="true"
            >
        Purchase
            </Button>
          </div>
        </div>
      </Cell>
      <Cell size={12} style={{ marginTop: 20 }}>
        <ContentWithIcon fontIconName="search">
          <Title>About In-Person Services</Title>
        </ContentWithIcon>
        <ul>
          <li>After placing your order, you'll receive a confirmation email from Nikki to arrange a local meeting. In-person services last approximately 90 minutes</li>
          <li>All materials will be assembled in a full-color packet.</li>
          <li>Please allow 1-2 weeks preperation time when coordinating the best time to meet.</li>
          <p>
            <span style={{ fontWeight: 'bold' }}>Questions about this service or online ordering?</span>
            {' '}
              Contact Nikki directly at nikiastro@att.net!
          </p>
        </ul>
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
