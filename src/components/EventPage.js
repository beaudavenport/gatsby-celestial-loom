import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '50%',
    margin: '0 auto',
    marginTop: '100px',
  },
  media: {
    height: '300px',
  },
};

function EventPage(props) {
  const {
    classes, title, image, eventDate, price, html,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom component="h3">
            {eventDate}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography component="p">{price}</Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default withStyles(styles)(EventPage);
