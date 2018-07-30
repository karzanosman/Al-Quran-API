import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="title">
          Something went wrong please try again!
        </Typography>
      </div>
    );
  }
}

export default App;
