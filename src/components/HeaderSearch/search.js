import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';

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

  search = (evt) => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    const results = this.index
      .search(query, { expand: true })
      .map(({ ref }) => this.index.documentStore.getDoc(ref));

    this.setState({
      query,
      results,
    });
  }

  render() {
    const { query, results } = this.state;
    return (
      <div>
        <input type="text" value={query} onChange={this.search} />
        <ul>
          {results.map(page => (
            <li key={page.id}>
              <Link to={`/${page.path}`}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
