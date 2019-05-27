import { StaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import Services from '../src/pages/services';
import serviceArchiveEntries from '../__fixtures__/serviceArchiveEntries';
import servicesPageEntries from '../__fixtures__/servicesPageEntries';
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
    ...serviceArchiveEntries,
    ...sidebarEntries,
  }));
});

describe('Services', () => {
  it('should render correctly with services', () => {
    const tree = renderer
      .create(<Services data={servicesPageEntries} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
