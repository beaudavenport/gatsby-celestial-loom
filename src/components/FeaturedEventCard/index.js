import {
  CardTitle, Cell, FontIcon, Grid,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import CardCornerHighlight from '../CardCornerHighlight';
import TextWithChevron from '../TextWithChevron';

const FeaturedEventCard = ({
  path, image, title, style, eventDate, eventTime, eventDateShort, eventPrice, location, priceDescription,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div style={{ backgroundColor: 'white', ...style }}>
      <Grid noSpacing>
        <Cell size={6}>
          <div style={{ position: 'relative' }}>
            <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
            <CardCornerHighlight iconName="event" title={eventDateShort} />
          </div>
        </Cell>
        <Cell size={6}>
          <CardTitle
            style={{ padding: 20 }}
            title={title}
            subtitle={(
              <div>
                <div style={{
                  display: 'flex', justifyContent: 'flex-start', marginLeft: 10, marginTop: 20,
                }}
                >
                  <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
                  <p>{location}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 10 }}>
                  <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
                  <p>{`${eventDate} - ${eventTime}`}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                  <p style={{ fontWeight: 'bold' }}>{`${priceDescription} • $${Number(eventPrice).toFixed(2)}`}</p>
                  <TextWithChevron text="SIGN UP" />
                </div>
              </div>
            )}
          />
        </Cell>
      </Grid>
    </div>
  </Link>
);

FeaturedEventCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventDateShort: PropTypes.string.isRequired,
  eventPrice: PropTypes.string.isRequired,
  priceDescription: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
};

export default FeaturedEventCard;
