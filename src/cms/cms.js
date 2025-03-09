import { Grid, GridCell } from "@react-md/utils"
import { Card } from "@react-md/card"
import { Converter } from 'showdown';
import CMS from 'decap-cms-app';
import React from 'react';
import moment from 'moment';
import {
  Configuration
} from "@react-md/layout";

import {
  BigSubheader, Subheader, Subtitle, Title,
} from '../components/Common';
import BlogEntry from '../components/BlogEntry';
import EventPage from '../components/EventPage';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import RelatedItemChip from '../components/RelatedItemChip';
import ServiceCard from '../components/ServiceCard';
import ServicePage from '../components/ServicePage';

import styles from '!css-loader!sass-loader!../components/main.scss';

CMS.registerPreviewStyle(styles.toString(), { raw: true });

const converter = new Converter();

function EventPagePreview({ entry, getAsset }) {
  const image = entry.getIn(['data', 'image']);
  const data = {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    image: getAsset(image),
    eventDate: moment(entry.getIn(['data', 'eventDate'])?.toString()).format('MMMM DD, YYYY'),
    eventTime: entry.getIn(['data', 'eventTime']),
    priceDescription: entry.getIn(['data', 'priceDescription']),
    eventPrice: entry.getIn(['data', 'eventPrice']),
    location: entry.getIn(['data', 'location']),
    mapsLink: entry.getIn(['data', 'mapsLink']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <Configuration>
      <Grid>
        <GridCell colSpan={12}>
          <Subheader>Event Page Preview: </Subheader>
          <EventPage {...data} />
        </GridCell>
        <GridCell colSpan={12}>
          <Subheader>Event Thumbnail Preview: </Subheader>
          <FeaturedEventCard {...data} />
        </GridCell>
      </Grid>
    </Configuration>
  );
}

function BlogEntryPreview({ entry, getAsset }) {
  const image = entry.getIn(['data', 'image']);
  const relatedItemData = entry.getIn(['data', 'relatedItems']);
  const relatedItems = relatedItemData
    ? relatedItemData.toJS()
    : [];
  const rawExcerpt = converter.makeHtml(entry.getIn(['data', 'body'])) || '';

  const data = {
    title: entry.getIn(['data', 'title']),
    image: getAsset(image),
    publishDate: moment(entry.getIn(['data', 'publishDate'])?.toString()).format('MMMM DD, YYYY'),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
    excerpt: rawExcerpt.substring(0, 250),
    relatedItemChips: relatedItems.map(relatedItem => (
      <RelatedItemChip
        item={{ frontmatter: { title: relatedItem }, fields: {} }}
      />
    )),
  };

  return (
    <Configuration>
      <Grid>
        <GridCell colSpan={12}>
          <Subheader>Blog Page Preview: </Subheader>
          <BlogEntry {...data} />
        </GridCell>
        <GridCell colSpan={12}>
          <Subheader>Blog Thumbnail Preview: </Subheader>
          <FeaturedCard {...data} />
        </GridCell>
      </Grid>
    </Configuration>
  );
}

function ServicePreview({ entry }) {
  const rawExcerpt = converter.makeHtml(entry.getIn(['data', 'body'])) || '';
  const data = {
    title: entry.getIn(['data', 'title']),
    origin: entry.getIn(['data', 'origin']),
    onlinePrice: entry.getIn(['data', 'onlinePrice']),
    inPersonPrice: entry.getIn(['data', 'inPersonPrice']),
    isFeatured: entry.getIn(['data', 'isFeatured']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
    excerpt: rawExcerpt.substring(0, 250),
  };

  return (
    <Configuration>
      <Grid>
        {data.isFeatured && (
          <GridCell colSpan={12}>
            <BigSubheader>Featured (will appear on front page)</BigSubheader>
          </GridCell>
        )}
        <GridCell colSpan={12}>
          <Subheader>Service Page Preview: </Subheader>
          <ServicePage {...data} />
        </GridCell>
        <GridCell colSpan={12}>
          <Subheader>Service Card Preview: </Subheader>
          <Card>
            <ServiceCard {...data} />
          </Card>
        </GridCell>
      </Grid>
    </Configuration>
  );
}

function ToolboxPreview({ entry }) {
  const data = {
    title: entry.getIn(['data', 'title']),
    toolboxType: entry.getIn(['data', 'toolboxType']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <Configuration>
      <Grid>
        <GridCell colSpan={12}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <Subtitle>
              {data.toolboxType}
            </Subtitle>
            <Title>{data.title}</Title>
          </div>
          <div className="bordered-content" dangerouslySetInnerHTML={{ __html: data.html }} />
          <div className="content-container">
            <Subheader>{`The location of ${data.title} in the Zodiac:`}</Subheader>
          </div>
          <Card style={{ padding: 30 }}>
            <BigSubheader>Zodiac wheel will appear here</BigSubheader>
          </Card>
        </GridCell>
      </Grid>
    </Configuration>
  );
}

CMS.registerPreviewTemplate('blog', BlogEntryPreview)
CMS.registerPreviewTemplate('events', EventPagePreview);
CMS.registerPreviewTemplate('services', ServicePreview);
CMS.registerPreviewTemplate('toolboxEntries', ToolboxPreview);
