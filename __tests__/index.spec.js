import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import IndexPage from '../src/pages/index';
import indexPageEntries from '../__fixtures__/indexPageEntries';
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

describe('IndexPage', () => {
  it('should render correctly with posts, events, and services', () => {
    const tree = renderer
      .create(<IndexPage data={indexPageEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
