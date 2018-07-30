import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        <CircularProgress color="secondary" />
      </div>
    );
  }
}

export default App;
