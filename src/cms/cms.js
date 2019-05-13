import '../components/layout.scss';

import { Cell, Grid } from 'react-md';
import { Converter } from 'showdown';
import CMS from 'netlify-cms';
import React from 'react';
import moment from 'moment';

import { BigSubheader, Subheader } from '../components/Common';
import BlogEntry from '../components/BlogEntry';
import EventPage from '../components/EventPage';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import RelatedItemChip from '../components/RelatedItemChip';
import ServiceCard from '../components/ServiceCard';
import ServicePage from '../components/ServicePage';
import ToolboxPage from '../components/ToolboxPage';

const converter = new Converter();

function EventPagePreview({ entry, getAsset }) {
  const image = entry.getIn(['data', 'image']);
  const data = {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    image: getAsset(image),
    eventDate: moment(entry.getIn(['data', 'eventDate']).toString()).format('MMMM DD, YYYY'),
    eventTime: entry.getIn(['data', 'eventTime']),
    priceDescription: entry.getIn(['data', 'priceDescription']),
    eventPrice: entry.getIn(['data', 'eventPrice']),
    location: entry.getIn(['data', 'location']),
    mapsLink: entry.getIn(['data', 'mapsLink']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <Grid>
      <Cell size={12}>
        <Subheader>Event Page Preview: </Subheader>
        <EventPage {...data} />
      </Cell>
      <Cell size={12}>
        <Subheader>Event Thumbnail Preview: </Subheader>
        <FeaturedEventCard {...data} />
      </Cell>
    </Grid>
  );
}

function BlogEntryPreview({ entry, getAsset }) {
  const image = entry.getIn(['data', 'image']);
  const relatedItemData = entry.getIn(['data', 'relatedItems']);
  const relatedItems = relatedItemData
    ? relatedItemData.toJS()
    : [];
  const data = {
    title: entry.getIn(['data', 'title']),
    image: getAsset(image),
    publishDate: moment(entry.getIn(['data', 'publishDate']).toString()).format('MMMM DD, YYYY'),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
    relatedItemChips: relatedItems.map(relatedItem => (
      <RelatedItemChip
        item={{ frontmatter: { title: relatedItem }, fields: {} }}
      />
    )),
  };

  return (
    <Grid>
      <Cell size={12}>
        <Subheader>Blog Page Preview: </Subheader>
        <BlogEntry {...data} />
      </Cell>
      <Cell size={12}>
        <Subheader>Blog Thumbnail Preview: </Subheader>
        <FeaturedCard {...data} />
      </Cell>
    </Grid>
  );
}

function ServicePreview({ entry }) {
  const data = {
    title: entry.getIn(['data', 'title']),
    origin: entry.getIn(['data', 'origin']),
    onlinePrice: entry.getIn(['data', 'onlinePrice']),
    inPersonPrice: entry.getIn(['data', 'inPersonPrice']),
    isFeatured: entry.getIn(['data', 'isFeatured']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <Grid>
      {data.isFeatured && (
        <Cell size={12}>
          <BigSubheader>Featured (will appear on front page)</BigSubheader>
        </Cell>
      )}
      <Cell size={12}>
        <Subheader>Service Page Preview: </Subheader>
        <ServicePage {...data} />
      </Cell>
      <Cell size={12}>
        <Subheader>Service Card Preview: </Subheader>
        <ServiceCard {...data} />
      </Cell>
    </Grid>
  );
}

function ToolboxPreview({ entry }) {
  const data = {
    title: entry.getIn(['data', 'title']),
    icon: entry.getIn(['data', 'icon']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <ToolboxPage {...data} />
  );
}

CMS.registerPreviewTemplate('events', EventPagePreview);
CMS.registerPreviewTemplate('blog', BlogEntryPreview);
CMS.registerPreviewTemplate('services', ServicePreview);
CMS.registerPreviewTemplate('signs', ToolboxPreview);
CMS.registerPreviewTemplate('houses', ToolboxPreview);
CMS.registerPreviewTemplate('planets', ToolboxPreview);
