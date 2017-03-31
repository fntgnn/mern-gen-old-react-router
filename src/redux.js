import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './actions/some_actions';

class Redux extends Component{

  componentWillMount(){
    this.props.doSomething();
  }

  render(){
    if(!this.props.redux_state) return (<div></div>);
    return (
      <div>
        Redux state:
        <b>{this.props.redux_state.data}</b>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    redux_state: state.data
  }
}

export default connect(mapStateToProps, actions)(Redux);
