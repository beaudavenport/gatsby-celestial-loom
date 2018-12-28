import React from 'react';
import CMS from 'netlify-cms';
import './styles.css';
import EventPage from '../components/EventPage';
import MUICSSInjector from './MUICSSInjector';

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
    <MUICSSInjector>
      <EventPage {...data} />
    </MUICSSInjector>
  );
}

CMS.registerPreviewTemplate('events', EventPagePreview);
