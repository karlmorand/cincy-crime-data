import React, { Component } from 'react';

class CrimeDetail extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <p>{this.props.crime.offense}</p>
    )

  }
}

export default CrimeDetail
