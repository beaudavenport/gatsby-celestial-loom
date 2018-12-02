import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {},
}

const Header = ({ siteTitle, classes, scrolledEnough }) => (
  <AppBar className={scrolledEnough ? null : classes.root} position={'sticky'}>
    <h3 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h3>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default withStyles(styles)(Header)
