import { StaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import Events from '../src/pages/events';
import eventArchiveEntries from '../__fixtures__/eventArchiveEntries';
import eventsPageEntries from '../__fixtures__/eventsPageEntries';
import sidebarEntries from '../__fixtures__/sidebarEntries';
import site from '../__fixtures__/site';
import siteSearchIndex from '../__fixtures__/siteSearchIndex';

beforeEach(() => {
  global.window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  StaticQuery.mockImplementation(({ render }) => render({
    ...site,
    ...siteSearchIndex,
    ...eventArchiveEntries,
    ...sidebarEntries,
  }));
});

describe('Events', () => {
  it('should render correctly with events', () => {
    const tree = renderer
      .create(<Events data={eventsPageEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
