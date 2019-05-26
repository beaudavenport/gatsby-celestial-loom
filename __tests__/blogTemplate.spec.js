import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import BlogTemplate from '../src/templates/blogTemplate';
import blogArchiveEntries from '../__fixtures__/blogArchiveEntries';
import blogPageEntry from '../__fixtures__/blogPageEntry';
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

  useStaticQuery.mockReturnValueOnce(toolboxEntries);
});

describe('Blog Template', () => {
  it('should render correctly with posts archive, blog page and SEO component', () => {
    const tree = renderer
      .create(<BlogTemplate data={blogPageEntry} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
