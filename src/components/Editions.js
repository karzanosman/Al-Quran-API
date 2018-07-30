import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Link from 'react-router-dom/Link';
import axios from 'axios';
import Loading from './Loading'
import Error from './Error'

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
  state = {
    data: null
  };
  componentDidMount() {
    this.setState({
      loading:true
    })
    axios
      .get('http://api.alquran.cloud/edition')
      .then(res => {
        this.setState({
          loading:false,
          data: res.data.data
        });
      })
      .catch(err => {
        this.setState({
          error:true
        })
        console.log(err);
      });
  }
  render() {
    const { classes } = this.props;
    const { data , loading, error} = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Editions</h1>
        {loading && (
          <Loading></Loading>
        )}
        {error && (
          <Error></Error>
        )}
        {data &&
          data.map((item, index) => (
            <Paper
              elevation={8}
              square
              key={index}
              style={{
                margin: '0 auto',
                width: '50%',
                padding: '10px',
                marginBottom: '5px'
              }}
            >
              <Link to={`edition/${item.identifier}`} className={classes.link}>
                <p>
                  <b>number</b>:{index + 1}
                </p>
                <p>
                  <b>englishName</b>:{item.englishName}
                </p>
                <p>
                  <b>format:</b>
                  {item.format}
                </p>
                <p>
                  <b>identifier</b>:{item.identifier}
                </p>
                <p>
                  <b>language</b>:{item.language}
                </p>
                <p>
                  <b>name</b>:{item.name}
                </p>
                <p>
                  <b>type</b>:{item.type}
                </p>
              </Link>
            </Paper>
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(App);
