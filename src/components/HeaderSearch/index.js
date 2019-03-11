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
      <div className="search-container">
        {isSearching && <Search searchIndex={data.siteSearchIndex.index} />}
        <Button onClick={() => setIsSearching(!isSearching)}><FontIcon>search</FontIcon></Button>
      </div>
    )}
  />
);

Header.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  setIsSearching: PropTypes.func.isRequired,
};

export default Header;
