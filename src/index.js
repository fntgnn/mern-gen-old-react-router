import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import reduxThunk from 'redux-thunk';

import About from './about';
import Home from './home';
import Param from './param';
import Me from './about/me';
import ToNona from './about/to_nona';
import Redux from './redux';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
//se aggiorno, mi fa il signout (quasi)
const token = localStorage.getItem('token');

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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} >
          <Route path="me" component={Me} />
          <Route path="tonona" component={ToNona} />
        </Route>
        <Route path="param/:id" component={Param} />
        <Route path="redux" component={Redux} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
