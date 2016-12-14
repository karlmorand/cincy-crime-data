import React, { Component } from 'react'

class HoodSelector extends Component{
  constructor(props){
  super(props)
  this.handleChange = this.handleChange.bind(this)
  this.state = {selectedHood: 'Select a neighborhood'}
  console.log("HoodSelector");
}
handleChange(e){
  this.setState({selectedHood: e.target.value})
  this.props.hoodChange(e.target.value)
}
  render(){

    return (
      <form>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Select a neighborhood">Select a neighborhood</option>
          {this.props.hoods.map(hood => <option value={hood} key={hood}>{hood}</option>)}
        </select>

      </form>
    )
  }

}

export default HoodSelector
