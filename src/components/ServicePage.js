import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import getOrigin from '../helpers/originService';

function ServicePage(props) {
  const {
    title,
    origin = 'Western',
    price,
    html,
    slug,
  } = props;
  const { color, icon } = getOrigin(origin);
  return (
    <div>
      <CardText>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <h3 style={{ backgroundColor: color, color: 'white', fontSize: '15px' }}>
          <span style={{ fontSize: '50px' }}>{icon}</span>
          {origin.toUpperCase()}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Grid>
          <Cell size={12}>
            <h3>Choose an Option:</h3>
          </Cell>
          <Cell size={6}>
            <Card>
              <Link to={`${slug}/online`}>
                <p>Online Consultation</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{`$${Number(price).toFixed(2)}`}</p>
              </Link>
            </Card>
          </Cell>
          <Cell>
            <Card>
              <Link to={`${slug}/online`}>
                <p>In-Person Consultation</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{`$${Number(price).toFixed(2)}`}</p>
              </Link>
            </Card>
          </Cell>
        </Grid>
      </CardText>
    </div>
  );
}

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ServicePage;
