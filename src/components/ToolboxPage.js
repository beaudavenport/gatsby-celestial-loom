import { CardText, Cell, Grid } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { Title } from './Common';
import ZodiacWheel from './ZodiacWheel';

function ToolboxPage(props) {
  const {
    title,
    html,
  } = props;
  return (
    <Grid>
      <Cell size={12}>
        <div style={{ textAlign: 'center' }}>
          <Title>{title}</Title>
        </div>
        <div>
          <ZodiacWheel title={title} />
        </div>
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardText>
      </Cell>
    </Grid>
  );
}

ToolboxPage.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default ToolboxPage;
