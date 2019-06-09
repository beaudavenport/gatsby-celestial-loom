import { StaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import GettingStarted from '../src/pages/getting-started';
import gettingStartedExpiredEntries from
  '../__fixtures__/gettingStartedExpiredEntries';
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

describe('Getting Started Expired Page', () => {
  it('should render correctly with samples of services, posts, and expired events', () => {
    const tree = renderer
      .create(<GettingStarted data={gettingStartedExpiredEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
