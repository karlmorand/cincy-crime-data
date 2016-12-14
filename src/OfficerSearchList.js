import React, { Component } from 'react';

class OfficerSearchList extends Component {
  constructor() {
    super()
  }
  render(){
    if (this.props.cops.length === 0) {
      return <h3>enter cop name</h3>
    } else {
      return(
        <ul>
          {this.props.cops.map(cop => <li key={cop}>{cop}</li>)}
        </ul>
    )
    }
  }
}

export default OfficerSearchList
