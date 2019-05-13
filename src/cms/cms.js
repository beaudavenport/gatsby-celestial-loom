import '../components/layout.scss';

import { Cell, Grid } from 'react-md';
import { Converter } from 'showdown';
import CMS from 'netlify-cms';
import React from 'react';
import moment from 'moment';

import BlogEntry from '../components/BlogEntry';
import EventPage from '../components/EventPage';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedEventCard from '../components/FeaturedEventCard';
import RelatedItemChip from '../components/RelatedItemChip';
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
        <h2>Event Page Preview: </h2>
        <EventPage {...data} />
      </Cell>
      <Cell size={12}>
        <h2 style={{ marginTop: 20 }}>Event Thumbnail Preview: </h2>
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
        <h2>Blog Page Preview: </h2>
        <BlogEntry {...data} />
      </Cell>
      <Cell size={12}>
        <h2 style={{ marginTop: 20 }}>Blog Thumbnail Preview: </h2>
        <FeaturedCard {...data} />
      </Cell>
    </Grid>
  );
}

function ServicePreview({ entry }) {
  const data = {
    title: entry.getIn(['data', 'title']),
    origin: entry.getIn(['data', 'origin']),
    price: entry.getIn(['data', 'price']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <ServicePage {...data} />
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
