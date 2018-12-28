import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

class MUICSSInjector extends React.Component {
  constructor(props) {
    super(props);
    // Material UI's SSR docs specify to instantiate the following
    // once per request, which in this case translates
    // to once per component instance
    this.sheetsRegistry = new SheetsRegistry();
    this.sheetsManager = new Map();
    this.theme = createMuiTheme({});
    this.generateId = createGenerateClassName();
  }

  render() {
    const { children } = this.props;
    const wrappedChildren = (
      <JssProvider registry={this.sheetsRegistry} generateId={this.generateId}>
        <MuiThemeProvider theme={this.theme} sheetsManager={this.sheetsManager}>
          {children}
        </MuiThemeProvider>
      </JssProvider>
    );

    // rendering wrapped children populates sheetsRegistry with styles
    ReactDOMServer.renderToString(wrappedChildren);

    return (
      <div
        ref={(ref) => {
          if (ref && !this.css) {
            this.docRef = ref.ownerDocument;
            this.css = `<style type="text/css" id="server-side-styles">
                ${this.sheetsRegistry.toString()}
              </style>`;
            // insertAdjacentHTML preserves existing DOM nodes,
            // while "+=" causes nodes to be redrawn
            this.docRef.head.insertAdjacentHTML('beforeend', this.css);
          }
        }}
      >
        {React.Children.only(wrappedChildren)}
      </div>
    );
  }
}

MUICSSInjector.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MUICSSInjector;
