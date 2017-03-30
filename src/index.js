import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { BrowserRouter as Router, Route, Link, Match } from 'react-router-dom';

import About from './about';
import Home from './home';
import Params from './params';
import Param from './param';
import Me from './about/me';
import ToNona from './about/to_nona';

class App extends Component{
  render(){
    return(
      <div>
      App <br />
      {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} >
        <Route path="me" component={Me} />
        <Route path="tonona" component={ToNona} />
      </Route>
      <Route path="param/:id" component={Param} />
    </Route>
  </Router>
  , document.getElementById('root'));
