import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './header';
import './layout.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Merriweather, serif',
  },
});

class Layout extends React.Component {
  // state = {
  //   scrolledEnough: false,
  // }
  //
  // componentDidMount() {
  //   console.log('mounted')
  //   window.addEventListener('scroll', this.handleScrollToElement)
  // }
  //
  // componentWillUnmount() {
  //   console.log('UNmounted')
  //   window.removeEventListener('scroll', this.handleScrollToElement)
  // }
  //
  // handleScrollToElement = event => {
  //   console.log('Fired', event.currentTarget.scrollY)
  //   if (!this.state.scrolledEnough && event.currentTarget.scrollY > 50) {
  //     this.setState({ scrolledEnough: true })
  //   }
  //   if (this.state.scrolledEnough && event.currentTarget.scrollY < 50) {
  //     this.setState({ scrolledEnough: false })
  //   }
  // }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <MuiThemeProvider theme={theme}>
            <div style={{ backgroundColor: 'rgb(218, 218, 218)', height: '900px' }}>
              <CssBaseline />
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header
                siteTitle={data.site.siteMetadata.title}
              />
              <div>
                <div
                  style={{
                    margin: 'auto',
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
          </MuiThemeProvider>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
