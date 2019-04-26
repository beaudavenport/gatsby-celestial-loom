import {
  CardTitle, Cell, FontIcon, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import CardCornerHighlight from '../CardCornerHighlight';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const FeaturedEventCard = ({
  path,
  image,
  title,
  style,
  eventDate,
  eventTime,
  eventDateShort,
  eventPrice,
  location,
  priceDescription,
}) => (
  <TouchableLink to={path} style={style}>
    <Grid noSpacing>
      <Cell size={6} tabletSize={4}>
        <div className="image-container">
          <img className="image-container--image" src={image} alt="Preview of featured post" />
          <CardCornerHighlight iconName="event" title={eventDateShort} />
        </div>
      </Cell>
      <Cell size={6} tabletSize={4}>
        <CardTitle
          title={title}
        />
        <div className="event-detail-container">
          <div className="event-detail-thumbnail">
            <FontIcon style={{ marginRight: 5 }}>place</FontIcon>
            <p>{location}</p>
          </div>
          <div className="event-detail-thumbnail">
            <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
            <p>{`${eventDate} - ${eventTime}`}</p>
          </div>
        </div>
        <div className="event-signup-thumbnail">
          <div>
            <p className="event-signup-thumbnail--price-description">{priceDescription}</p>
            <p className="event-signup-thumbnail--price">{`$${Number(eventPrice).toFixed(2)}`}</p>
          </div>
          <div>
            <TextWithChevron text="SIGN UP" />
          </div>
        </div>
      </Cell>
    </Grid>
  </TouchableLink>
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
