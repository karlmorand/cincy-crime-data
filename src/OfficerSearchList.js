import React, { Component } from 'react';

class OfficerSearchList extends Component {
  
  render(){
    if (this.props.cops.length === 0) {
      return null
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
