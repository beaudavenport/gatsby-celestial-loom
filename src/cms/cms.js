import React from 'react';
import CMS from 'netlify-cms';
import EventPage from '../components/EventPage';
import BlogEntry from '../components/BlogEntry';
import '../components/layout.scss';

function EventPagePreview({ entry, getAsset }) {
  const eventImage = entry.getIn(['data', 'eventImage']);
  const data = {
    title: entry.getIn(['data', 'title']),
    image: getAsset(eventImage),
    eventDate: entry.getIn(['data', 'eventDate']).toString(),
    price: entry.getIn(['data', 'eventPrice']),
    html: entry.getIn(['data', 'body']),
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
    html: entry.getIn(['data', 'body']),
  };

  return (
    <BlogEntry {...data} />
  );
}

CMS.registerPreviewTemplate('events', EventPagePreview);
CMS.registerPreviewTemplate('blog', BlogEntryPreview);
