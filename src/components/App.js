import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Main from './Main';
import Editions from './Editions';
import Edition from './Edition';



class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/edition" component={Editions} />
          <Route exact path="/edition/:identifier" component={Edition} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
