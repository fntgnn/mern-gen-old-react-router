import React, { Component } from 'react';

class Param extends Component {
  render(){
    return(
      <div>
      Param
      {this.props.params.id}
      </div>
    );
  }
}

export default Param;
