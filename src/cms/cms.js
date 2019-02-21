import '../components/layout.scss';

import { Converter } from 'showdown';
import CMS from 'netlify-cms';
import React from 'react';

import BlogEntry from '../components/BlogEntry';
import EventPage from '../components/EventPage';
import ServicePage from '../components/ServicePage';

const converter = new Converter();

function EventPagePreview({ entry, getAsset }) {
  const eventImage = entry.getIn(['data', 'eventImage']);
  const data = {
    title: entry.getIn(['data', 'title']),
    image: getAsset(eventImage),
    eventDate: entry.getIn(['data', 'eventDate']).toString(),
    price: entry.getIn(['data', 'eventPrice']),
    location: entry.getIn(['data', 'location']),
    mapsLink: entry.getIn(['data', 'mapsLink']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <EventPage {...data} />
  );
}

function BlogEntryPreview({ entry, getAsset }) {
  const image = entry.getIn(['data', 'image']);
  const data = {
    title: entry.getIn(['data', 'title']),
    image: getAsset(image),
    publishDate: entry.getIn(['data', 'publishDate']).toString(),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <BlogEntry {...data} />
  );
}

function ServicePreview({ entry }) {
  const data = {
    title: entry.getIn(['data', 'title']),
    html: converter.makeHtml(entry.getIn(['data', 'body'])),
  };

  return (
    <ServicePage {...data} />
  );
}

CMS.registerPreviewTemplate('events', EventPagePreview);
CMS.registerPreviewTemplate('blog', BlogEntryPreview);
CMS.registerPreviewTemplate('blog', ServicePreview);
