import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import ServiceTemplate from '../src/templates/serviceTemplate';
import serviceArchiveEntries from '../__fixtures__/serviceArchiveEntries';
import servicePageEntry from '../__fixtures__/servicePageEntry';
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
    ...serviceArchiveEntries,
    ...sidebarEntries,
  }));

  useStaticQuery.mockReturnValueOnce(toolboxEntries);
});

describe('Service Template', () => {
  it('should render correctly with services archive, service page', () => {
    const tree = renderer
      .create(<ServiceTemplate data={servicePageEntry} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
