import { StaticQuery } from 'gatsby';
import React from 'react';

import renderer from 'react-test-renderer';

import Layout from '../src/components/Layout';
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
  }));
});

describe('Layout', () => {
  it('should render correctly with no children', () => {
    const tree = renderer
      .create(<Layout />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
