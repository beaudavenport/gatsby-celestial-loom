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
      <div className="header-search-container">
        <Button onClick={() => setIsSearching(!isSearching)}><FontIcon>search</FontIcon></Button>
        <div className={`search-container ${isSearching ? 'search-searching' : 'search'}`}>
          {isSearching
          && (
          <div className="search-input">
            <Search searchIndex={data.siteSearchIndex.index} isSearching={isSearching} />
            <Button onClick={() => setIsSearching(!isSearching)}>
              <FontIcon>close</FontIcon>
            </Button>
          </div>
          )}
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
