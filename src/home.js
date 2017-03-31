import React, { Component } from 'react';

import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      stato: ''
    };
  }

  componentWillMount(){
    const ROOT_URL = 'https://localhost:3000/api/';
    axios.get(`${ROOT_URL}`)
      .then( response => {
        this.setState({
          stato: response.data
        });
      })
      .catch( error => console.log("error ",error));
  }
  render(){

    return (<div>{JSON.stringify(this.state.stato)}</div>);
  }
}

export default Home
