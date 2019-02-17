import {
  DropdownMenu, FontIcon, ListItem, TextField,
} from 'react-md';
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
        toggle={this}
        visible={results.length > 0}
        menuItems={
          results.map(page => (
            <ListItem
              primaryText={page.title}
              component={Link}
              to={`/${page.path}`}
            />
          ))
        }
        anchor={{
          x: DropdownMenu.HorizontalAnchors.INNER_RIGHT,
          y: DropdownMenu.VerticalAnchors.BOTTOM,
        }}
        position={DropdownMenu.Positions.BELOW}
      >
        <TextField
          type="text"
          leftIcon={<FontIcon>search</FontIcon>}
          value={query}
          onChange={this.search}
          onBlur={this.resetSearch}
        />
      </DropdownMenu>
    );
  }
}
