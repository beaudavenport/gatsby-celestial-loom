import {
  CardTitle, Cell, FontIcon, Grid,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import CardCornerHighlight from '../CardCornerHighlight';

const FeaturedEventCard = ({
  path, image, title, subtitle, excerpt, style, publishDate, cornerIconName, cornerTitle,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div style={{ backgroundColor: 'white', ...style }}>
      <Grid noSpacing>
        <Cell size={6}>
          <div style={{ position: 'relative' }}>
            <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
            {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
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
                  <p>Hartford Coffee Company</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 10 }}>
                  <FontIcon style={{ marginRight: 5 }}>event</FontIcon>
                  <p style={{ }}>Feb 17, 2019 - 3:00 PM</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                  <p style={{ fontWeight: 'bold' }}>3 Hour Playshop: $30.00</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', color: '#ff8013' }}>SIGN UP</p>
                    <FontIcon style={{ color: '#ff8013' }}>chevron_right</FontIcon>
                  </div>
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
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  cornerIconName: PropTypes.string,
  cornerTitle: PropTypes.string,
};

FeaturedEventCard.defaultProps = {
  cornerIconName: '',
  cornerTitle: '',
};

export default FeaturedEventCard;
