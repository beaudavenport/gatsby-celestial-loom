import { FontIcon } from '@react-md/icon';
import { Button } from '@react-md/button';
import { StaticQuery, graphql } from 'gatsby';
import React, { Fragment, useState } from 'react';

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
          <div className="flex-center">
            <Button
              icon
              onClick={() => setIsSearching(true)}
              style={{ padding: 0 }}
              iconEl={(
                <FontIcon style={{ fontSize: '2rem' }}>search</FontIcon>
            )}
            />
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
