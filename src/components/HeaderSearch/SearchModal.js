import {
  Avatar,
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
import moment from 'moment';

import { Index } from 'elasticlunr';

import { HeyMom } from '../Common';

const avatarMap = new Map();
avatarMap.set('blog', 'create');
avatarMap.set('events', 'event');
avatarMap.set('services', 'shopping_cart');

const getAvatar = type => (
  <Avatar icon={<FontIcon>{avatarMap.get(type) || 'work'}</FontIcon>} />
);

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
        dialogClassName="dialog-container-style"
        autosizeContent={false}
        focusOnMount={false}
        onHide={onClose}
        fullPage
      >
        <div className="search-modal--header">
          <h3 className="search-modal--header--text">Search</h3>
          <Button style={{ padding: 0 }} onClick={onClose}><FontIcon>close</FontIcon></Button>
        </div>
        <div className="search-modal--input">
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
        <div style={{
          width: '100%', margin: 10, padding: 10, height: 200, border: '2px dashed red',
        }}
        >
          <HeyMom>Would you prefer these search results, or thumbnail cards (with pictures?)</HeyMom>
          <HeyMom>Would you like a filter to the left? Might save it for last, time is crunched</HeyMom>
        </div>
        <List className="search-modal--results" onClick={onClose}>
          {results.map(page => (
            <ListItem
              style={{ paddingLeft: 10, paddingRight: 10 }}
              primaryText={page.title}
              primaryTextStyle={{ fontWeight: 'bold' }}
              leftAvatar={getAvatar(page.type)}
              secondaryText={`Posted on: ${moment(page.publishDate).format('MMM DD, YYYY')}`}
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
