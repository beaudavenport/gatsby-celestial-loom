import { Button, FontIcon } from 'react-md';
import { CSSTransition } from 'react-transition-group';
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
        <Button onClick={() => setIsSearching(!isSearching)}><FontIcon>search</FontIcon></Button>
        <CSSTransition
          classNames="search"
          in={isSearching}
          timeout={300}
          unmountOnExit
        >
          <Search searchIndex={data.siteSearchIndex.index} />
        </CSSTransition>
      </div>
    )}
  />
);

Header.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  setIsSearching: PropTypes.func.isRequired,
};

export default Header;
