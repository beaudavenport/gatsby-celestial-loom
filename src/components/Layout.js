import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { NavigationDrawer } from 'react-md';
import Header from './header';
import './layout.scss';

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
          <NavigationDrawer>
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
          </NavigationDrawer>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
