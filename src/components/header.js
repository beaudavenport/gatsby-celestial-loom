import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: '10px',
    backgroundColor: '#444349',
  },
  typography: {
    fontFamily: 'Berkshire Swash',
    fontStyle: 'italic',
  },
});

const Header = ({ siteTitle, classes, scrolledEnough }) => (
  <AppBar className={classes.root} position="sticky">
    <Typography component="h1" variant="h5" className={classes.typography}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </Typography>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withStyles(styles)(Header);
