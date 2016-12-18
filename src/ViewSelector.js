import React, { Component } from 'react';

class ViewSelector extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {view: 'Select a view'}
  }
  handleChange(e){
    this.setState({view: e.target.innerText.toLowerCase()})
    this.props.viewChange(e.target.innerText.toLowerCase())
  }
  render(){
    return(
      <div>
      <h2 onClick={this.handleChange}>Recent</h2>
      <h2 onClick={this.handleChange}>Frequent</h2>
      <h2 onClick={this.handleChange}>Time</h2>
      <h2 onClick={this.handleChange}>Frequent Locations</h2>
      <h2 onClick={this.handleChange}>Officer Search</h2>
    </div>
      // <form>
      //   <select value={this.state.value} onChange={this.handleChange}>
      //     <option value="Select a view">Select a view</option>
      //   <option value="frequent">Frequent</option>
      //   <option value="recent">Recent</option>
      //   <option value="time">Time</option>
      //   </select>
      //
      // </form>
    )
  }
}

export default ViewSelector
