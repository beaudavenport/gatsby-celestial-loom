import { DropdownMenu, ListItem, TextField } from 'react-md';
import { Link } from 'gatsby';
import React, { Component } from 'react';

import { Index } from 'elasticlunr';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }

  getOrCreateIndex = () => {
    const { searchIndex } = this.props;
    return this.index ? this.index : Index.load(searchIndex);
  }

  search = (query) => {
    this.index = this.getOrCreateIndex();
    const results = this.index
      .search(query, { expand: true })
      .map(({ ref }) => this.index.documentStore.getDoc(ref));

    this.setState({
      query,
      results,
    });
  }

  resetSearch = () => {
    this.setState({
      query: '',
      results: [],
    });
  }

  render() {
    const { query, results } = this.state;
    return (
      <DropdownMenu
        className="search-dropdown"
        toggle={this}
        block
        visible={results.length > 0}
        menuItems={
          results.map(page => (
            <ListItem
              style={{ paddingLeft: 10, paddingRight: 10 }}
              primaryText={page.title}
              secondaryText={`${page.type} - ${page.publishDate}`}
              component={Link}
              to={`/${page.path}`}
            />
          ))
        }
        anchor={{
          x: DropdownMenu.HorizontalAnchors.INNER_LEFT,
          y: DropdownMenu.VerticalAnchors.BOTTOM,
        }}
        position={DropdownMenu.Positions.BOTTOM_RIGHT}
      >
        <TextField
          ref={input => input && input.focus()}
          type="text"
          placeholder="Search"
          value={query}
          onChange={this.search}
          onBlur={this.resetSearch}
        />
        <div style={{
          width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
        }}
        >
          <HeyMom>Would you prefer these search results, or thumbnail cards (with pictures?)</HeyMom>
        </div>
      </DropdownMenu>
    );
  }
}
