import { Card, CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';
import ZodiacWheel from './ZodiacWheel';

function ToolboxPage(props) {
  const {
    title,
    icon,
    html,
  } = props;
  return (
    <Card>
      <div>
        <ZodiacWheel title={title} />
      </div>
      <CardText>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <p style={{ textSize: '30px', textAlign: 'center' }}>{icon}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardText>
    </Card>
  );
}

ToolboxPage.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default ToolboxPage;
