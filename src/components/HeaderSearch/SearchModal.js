import {
  Button,
  DialogContainer,
  FontIcon,
  List,
  ListItem,
  TextField,
} from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Index } from 'elasticlunr';

class SearchModal extends React.PureComponent {
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
    const { visible, onClose } = this.props;
    return (
      <DialogContainer
        id="search-dialog"
        visible={visible}
        dialogClassName="dialog-container-style "
        contentStyle={{ padding: 20 }}
        autosizeContent={false}
        focusOnMount={false}
        onHide={onClose}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10,
        }}
        >
          <h3 style={{ marginBottom: 0 }}>Search</h3>
          <Button onClick={onClose}><FontIcon style={{ color: 'black' }}>close</FontIcon></Button>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '90%',
        }}
        >
          <FontIcon style={{ color: '#ec6602', marginRight: 10 }}>search</FontIcon>
          <TextField
            ref={input => input && input.focus()}
            type="text"
            style={{ color: 'black' }}
            placeholder="Search"
            value={query}
            onChange={this.search}
          />
        </div>
        <List onClick={onClose}>
          {results.map(page => (
            <ListItem
              style={{ paddingLeft: 10, paddingRight: 10 }}
              primaryText={page.title}
              primaryTextStyle={{ fontWeight: 'bold' }}
              secondaryText={`${page.type} - ${page.publishDate}`}
              component={Link}
              to={`/${page.path}`}
            />
          ))}
        </List>
      </DialogContainer>
    );
  }
}

SearchModal.propTypes = {
  searchIndex: PropTypes.object.isRequired, // eslint-disable-line
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchModal;
