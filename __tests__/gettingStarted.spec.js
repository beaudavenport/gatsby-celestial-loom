import { StaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import GettingStarted from '../src/pages/getting-started';
import gettingStartedEntries from '../__fixtures__/gettingStartedEntries';
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
    ...sidebarEntries,
  }));
});

describe('Getting Started Page', () => {
  it('should render correctly with samples of services, posts, events', () => {
    const tree = renderer
      .create(<GettingStarted data={gettingStartedEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
