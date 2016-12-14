import React, { Component } from 'react';

class OfficerSearchForm extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.props.nameChange(event.target.value)
  }
  render(){
    return (
    <form>
      <input type="text" value={this.props.officerName} onChange={this.handleChange}/>
    </form>
  )
  }
}

export default OfficerSearchForm
