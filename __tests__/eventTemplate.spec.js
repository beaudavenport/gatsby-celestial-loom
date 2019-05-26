import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import EventTemplate from '../src/templates/eventTemplate';
import eventArchiveEntries from '../__fixtures__/eventArchiveEntries';
import eventPageEntry from '../__fixtures__/eventPageEntry';
import sidebarEntries from '../__fixtures__/sidebarEntries';
import site from '../__fixtures__/site';
import siteSearchIndex from '../__fixtures__/siteSearchIndex';
import toolboxEntries from '../__fixtures__/toolboxEntries';

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

  useStaticQuery.mockReturnValueOnce(toolboxEntries);
});

describe('Event Template', () => {
  it('should render correctly with events archive, event page', () => {
    const tree = renderer
      .create(<EventTemplate data={eventPageEntry} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
