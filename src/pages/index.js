
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Layout from '../components/layout';
import Stars from '../images/astrology-sunscreen.jpg';
import Nikki from '../images/nikki.jpg';

const styles = theme => ({
  jumbotron: {
    background: `url(${Stars})`,
    backgroundPosition: 'center',
    backgrondSize: 'cover',
    color: theme.palette.common.white,
    width: '100%',
    padding: '10px',
    margin: 0,
  },
  brand: {
    fontFamily: 'Berkshire Swash',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  post: {
    width: '90%',
    margin: '20px auto',
    padding: '20px',
  },
  contentContainer: {
    width: '90%',
  },
});

const IndexPage = ({ classes }) => (
  <Layout>
    <Paper square className={classes.jumbotron}>
      <Grid container justify="space-between" className={classes.contentContainer}>
        <Grid item md={6} alignContent="center">
          <Typography className={classes.brand} component="h1" variant="h3" color="inherit">The Celestial Loom</Typography>
          <Typography className={classes.brand} component="h2" variant="h5" color="inherit">Astrological Services</Typography>
        </Grid>
        <Grid item md={6}>
          <div style={{
            display: 'flex', justifyContent: 'space-around', backgroundColor: '#a9a9a92e', padding: '10px',
          }}
          >
            <div style={{ flex: 1 }}>
              <img src={Nikki} style={{ maxWidth: '150px', borderRadius: '50%' }} alt="nikki" />
            </div>
            <div style={{ flex: 3 }}>
              <Typography component="h3" variant="h6" align="right" color="inherit">
                Nikki Davenport,
                astrological consultant, has been a professional astrologer for over 35 years.
              </Typography>
              <Typography component="p" variant="p" align="right" color="inherit">
                Currently practicing and teaching in St. Louis, Missouri, Nikki is a board member of the Astrological Association of St. Louis.
                 Her Astrological view is from a spiritual perspective.
                  She has a multi-cultural approach to the science of astrology,
                  incorporating Western, Hindu, Mayan, Native American, Tibetan, and Chinese astrological cultures and services.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.post}>
      <Typography component="h2" variant="h4">A new Post</Typography>
      <Typography component="p" variant="subtitle1">A new Post</Typography>
      <Typography component="p" variant="body1">Too lazy to go find lorem ipsum</Typography>
    </Paper>
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IndexPage);
