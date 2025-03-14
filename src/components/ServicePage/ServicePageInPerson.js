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
            <BigSubheaderPrimary>In-Person Consultation</BigSubheaderPrimary>
          </div>
          <div className="content-container">
            <ContentWithIcon fontIconName="face"><Subtitle>90-minute in-person discussion</Subtitle></ContentWithIcon>
            <ContentWithIcon fontIconName="picture_as_pdf"><Subtitle>Full-color PDF</Subtitle></ContentWithIcon>
            <ContentWithIcon fontIconName="volume_up"><Subtitle>Free live session recording</Subtitle></ContentWithIcon>
          </div>
          <Divider />
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: 15, alignItems: 'center',
          }}
          >
            <div>
              <p className="service-price--description">In-Person Total:</p>
              <p className="service-price--price">{`$${Number(price).toFixed(2)}`}</p>
            </div>
            <AddToCartButton
              title={title}
              price={price}
              description="In-Person Consultation"
              slug={`${slug}in-person`}
            />
          </div>
        </div>
      </GridCell>
      <GridCell colSpan={12} style={{ marginTop: 20 }}>
        <ContentWithIcon fontIconName="search" fontIconStyle={{ fontSize: '2rem' }}>
          <Title>About In-Person Services</Title>
        </ContentWithIcon>
        <ul>
          <li>After placing your order, you'll receive a confirmation email from Nikki to arrange a local meeting. In-person services last approximately 90 minutes</li>
          <li>All materials will be assembled in a full-color packet.</li>
          <li>Please allow 1-2 weeks preperation time when coordinating the best time to meet.</li>
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
  price: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ServicePage;
