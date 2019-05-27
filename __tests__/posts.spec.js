import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import Posts from '../src/pages/posts';
import blogArchiveEntries from '../__fixtures__/blogArchiveEntries';
import postsPageEntries from '../__fixtures__/postsPageEntries';
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
    ...blogArchiveEntries,
    ...sidebarEntries,
  }));

  useStaticQuery.mockReturnValue(toolboxEntries);
});

describe('Posts', () => {
  it('should render correctly with most recent posts', () => {
    const tree = renderer
      .create(<Posts data={postsPageEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
