import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';

const styles = theme => ({
  node: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography align="center" color="primary" variant="display1">
          Al-Quran Pro
        </Typography>

        <div className={classes.node}>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.button}
          >
            <Link to="/edition" className={classes.link}>
              Edition - Available text and audio editions
            </Link>
          </Button>
        </div>
        <div className={classes.node}>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.button}
          >
            <a href="https://alquran.cloud/api" className={classes.link}>
              Quran API Documentation.
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
