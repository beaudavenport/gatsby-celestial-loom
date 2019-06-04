import { Card, Cell, Grid } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import {
  JumboSubheader, Subheader, Subtitle, Title,
} from '../Common';
import { getSymbolSpan } from '../../helpers/symbolHelper';
import ThumbnailCard from '../ThumbnailCard';
import ThumbnailEventCard from '../ThumbnailCard/ThumbnailEventCard';
import ZodiacWheel from '../ZodiacWheel';


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
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Subtitle>
            {toolboxType}
          </Subtitle>
          <Title>{title}</Title>
          <JumboSubheader>{getSymbolSpan(title)}</JumboSubheader>
        </div>
        <div style={{ padding: 20, border: '1px solid rgba(15,70,100,.12)', borderRadius: 5 }} dangerouslySetInnerHTML={{ __html: html }} />
        <div style={{ padding: 10 }}>
          <Subheader>{`The location of ${title} in the Zodiac:`}</Subheader>
        </div>
        <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ZodiacWheel title={title} />
        </Card>
        <div style={{ padding: 10 }}>
          <Subheader>{`${title} is mentioned in...`}</Subheader>
        </div>
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
