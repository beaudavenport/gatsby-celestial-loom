import { Grid, GridCell } from "@react-md/utils"
import PropTypes from 'prop-types';
import React from 'react';

import {
  ContentWithIcon, Subheader, Subtitle, TitleH2,
} from '../Common';
import CardCornerHighlight from '../CardCornerHighlight';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';
import { isPastEvent } from './../../helpers/dateHelper';

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
}) => {
  const isExpired = isPastEvent(eventDate);
  return (
    <TouchableLink to={path} style={style}>
      <Grid>
        <GridCell colSpan={6}>
          <div className="image-container">
            <img className="image-container--image" src={image} alt="Preview of featured post" />
            <CardCornerHighlight iconName="event" title={eventDateShort} isExpired={isExpired} />
          </div>
        </GridCell>
        <GridCell colSpan={6}>
          <div style={{ padding: 16 }}>
            {isExpired ? <Subtitle>Past Event</Subtitle> : <Subheader>Upcoming Event</Subheader>}
            <TitleH2>{title}</TitleH2>
          </div>
          <div className="event-detail-container">
            <ContentWithIcon fontIconName="place"><p className="info-text">{location}</p></ContentWithIcon>
            <ContentWithIcon fontIconName="event"><p className="info-text">{`${eventDate} - ${eventTime}`}</p></ContentWithIcon>
          </div>
          <div className="event-signup-thumbnail">
            {!isExpired && (
              <div>
                <p className="event-signup-thumbnail--price-description">{priceDescription}</p>
                <p className="event-signup-thumbnail--price">{`$${Number(eventPrice).toFixed(2)}`}</p>
              </div>
            )}
            <div className="event-signup-cta">
              <TextWithChevron text={isExpired ? 'View Details' : 'Sign Up'} />
            </div>
          </div>
        </GridCell>
      </Grid>
    </TouchableLink>
  );
};

FeaturedEventCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventDateShort: PropTypes.string.isRequired,
  eventPrice: PropTypes.number.isRequired,
  priceDescription: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
};

export default FeaturedEventCard;
