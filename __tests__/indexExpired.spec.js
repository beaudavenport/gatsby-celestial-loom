import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import IndexPage from '../src/pages/index';
import indexPageExpiredEntries from '../__fixtures__/indexPageExpiredEntries';
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
    ...sidebarEntries,
  }));

  useStaticQuery.mockReturnValueOnce(toolboxEntries);
});

describe('Index Expired Page', () => {
  it('should render correctly with posts, expired events, and services', () => {
    const tree = renderer
      .create(<IndexPage data={indexPageExpiredEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
