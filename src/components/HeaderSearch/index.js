import { Button, FontIcon } from 'react-md';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Index } from 'elasticlunr';

import SearchModal from './SearchModal';


const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <StaticQuery
      query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
      render={data => (
        <Fragment>
          <div className="header-search-container">
            <Button onClick={() => setIsSearching(true)} style={{ display: 'flex', alignItems: 'center' }}>
              <FontIcon>search</FontIcon>
              <p style={{
                color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 0, marginLeft: 10,
              }}
              >
                Search
              </p>
            </Button>
          </div>
          {isSearching && (
          <SearchModal
            visible={isSearching}
            searchIndex={data.siteSearchIndex.index}
            onClose={() => setIsSearching(false)}
          />
          )}
        </Fragment>
      )}
    />
  );
};

export default Header;
