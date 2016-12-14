import React, { Component } from 'react';

class CrimeDetail extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let crimeDate = new Date(this.props.crime['occurredon'])
    crimeDate.setHours(crimeDate.getUTCHours())
    // let crimeDate = new Date(this.props.crime['occurred_on'])
    return <li>{`${this.props.crime['offense']} : ${crimeDate}`}</li>

  }
}

export default CrimeDetail
