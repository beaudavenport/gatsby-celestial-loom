import { TextField } from "@react-md/form";
import { List, ListItem } from "@react-md/list";
import { Dialog } from "@react-md/dialog";
import { Avatar } from "@react-md/avatar";
import { FontIcon } from "@react-md/icon";
import { Button } from "@react-md/button";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';

import { Index } from 'elasticlunr';

import { BigSubheader, Subtitle } from '../Common';
import { getSymbolSpan } from '../../helpers/symbolHelper';

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
      <Dialog
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
          <Button style={{ padding: 0 }} onClick={onClose}>
            <FontIcon style={{ fontSize: 30 }}>close</FontIcon>
          </Button>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="search-modal--input">
            <FontIcon style={{ color: '#ec6602', marginRight: 10 }}>search</FontIcon>
            <TextField
              ref={(input) => {
                if (input) {
                  findDOMNode(input).scrollIntoView();
                  input.focus();
                }
              }}
              type="text"
              style={{ color: 'black' }}
              placeholder="Try searching for 'Aries'"
              value={query}
              onChange={this.search}
            />
          </div>
          { results.length ? (
            <div style={{ padding: '10px 30px' }}>
              <BigSubheader>{`${results.length} results found:`}</BigSubheader>
              <List className="search-modal--results" onClick={onClose}>
                {results.map(page => (
                  <ListItem
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    primaryText={page.title}
                    primaryTextStyle={{ fontWeight: 'bold' }}
                    leftAvatar={page.type === 'toolbox' ? <Avatar>{getSymbolSpan(page.title)}</Avatar> : getAvatar(page.type)}
                    secondaryText={`Posted on: ${moment(page.publishDate).format('MMM DD, YYYY')}`}
                    component={Link}
                    to={`/${page.path}`}
                  />
                ))}
              </List>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Subtitle>Your results will appear here</Subtitle>
            </div>
          )
          }
        </div>
      </Dialog>
    );
  }
}

SearchModal.propTypes = {
  searchIndex: PropTypes.object.isRequired, // eslint-disable-line
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchModal;
