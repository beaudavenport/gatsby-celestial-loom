import {
  Card, CardText, Cell, Grid,
} from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { Subtitle, Title } from './Common';
import ThumbnailCard from './ThumbnailCard';
import ThumbnailEventCard from './ThumbnailCard/ThumbnailEventCard';
import ZodiacWheel from './ZodiacWheel';


function ToolboxPage(props) {
  const {
    title,
    toolboxType,
    html,
    eventNodes,
    blogNodes,
  } = props;
  return (
    <Grid>
      <Cell size={12}>
        <div style={{ textAlign: 'center' }}>
          <Subtitle>
            {toolboxType}
          </Subtitle>
          <Title>{title}</Title>
        </div>
        <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ZodiacWheel title={title} />
        </Card>
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardText>
        <p style={{ color: '#ec6602', fontWeight: 'bold' }}>
          {title}
          {' '}
is mentioned in...
        </p>
        <div style={{ padding: 10 }}>
          { eventNodes.length > 0 && eventNodes.map(node => (
            <ThumbnailEventCard
              path={node.fields.slug}
              title={node.frontmatter.title}
              image={node.frontmatter.image}
              location={node.frontmatter.location}
              eventTime={node.frontmatter.eventTime}
              eventDate={node.frontmatter.eventDate}
            />
          ))
         }
          { blogNodes.length > 0 && blogNodes.map(node => (
            <ThumbnailCard
              small
              path={node.fields.slug}
              title={node.frontmatter.title}
              caption={node.frontmatter.publishDate}
              image={node.frontmatter.image}
            />
          ))
         }
        </div>
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
