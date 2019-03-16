import { Button, FontIcon } from 'react-md';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Search from './search';


const Header = ({ isSearching, setIsSearching }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <div style={{ display: 'flex', height: '100%' }}>
        <Button onClick={() => setIsSearching(!isSearching)}><FontIcon>search</FontIcon></Button>
        <div className="search-container" style={{ position: 'relative' }}>
          <div className={isSearching ? 'search-searching' : 'search'}>
            <Search searchIndex={data.siteSearchIndex.index} />
            <Button onClick={() => setIsSearching(!isSearching)}><FontIcon>close</FontIcon></Button>
          </div>
        </div>
      </div>
    )}
  />
);

Header.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  setIsSearching: PropTypes.func.isRequired,
};

export default Header;
