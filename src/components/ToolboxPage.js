import { Card, CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function ToolboxPage(props) {
  const {
    title,
    icon,
    html,
  } = props;
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="100" height="100" viewBox="0 0 223 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M220 109L37 3C15.3338 40.412 4.2087 82.8929 2 130H214C213.629 118.761 214.886 114.1 220 109Z" stroke="black" strokeWidth="2" />
          <path d="M37.3004 129C30.6334 118.103 52.9029 23.477 65 18L37.3004 2C15.4483 39.412 4.22766 81.8929 2 129H37.3004Z" stroke="#ec6602" strokeWidth="5" />
        </svg>
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
