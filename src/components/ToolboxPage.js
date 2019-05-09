import { CardText, Cell, Grid } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { HeyMom, Subtitle, Title } from './Common';
import ZodiacWheel from './ZodiacWheel';

function ToolboxPage(props) {
  const {
    title,
    toolboxType,
    html,
  } = props;
  return (
    <Grid>
      <Cell size={12}>
        <div style={{ textAlign: 'center' }}>
          <HeyMom>Do you want the type here? Or elsewhere on page?</HeyMom>
          <Subtitle>
            {toolboxType.toUpperCase()}
          </Subtitle>
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
  toolboxType: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default ToolboxPage;
