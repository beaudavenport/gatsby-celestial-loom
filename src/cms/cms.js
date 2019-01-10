import React from 'react';
import CMS from 'netlify-cms';
import EventPage from '../components/EventPage';
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

CMS.registerPreviewTemplate('events', EventPagePreview);
