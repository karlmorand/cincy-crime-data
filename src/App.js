import React, { Component } from 'react';
import 'whatwg-fetch'

import './App.css';
import GetCrimeData from './GetCrimeData'
import CrimeDetail from './CrimeDetail'
import HoodSelectorContainer from './HoodSelectorContainer'
import RecentCrimesList from './RecentCrimesList'
import FrequentCrimesList from './FrequentCrimesList'
import OfficerSearch from './OfficerSearch'

class App extends Component {
  constructor(props){
    super(props)
    this.getCrimeData = this.getCrimeData.bind(this)
    this.hoodChange = this.hoodChange.bind(this)
    this.state = {
    neighborhood:'',
    records: []
  }
}
componentDidMount(){
  // this.getCrimeData()
}
componentDidUpdate(prevProps, prevState){
  //triggers an api call when the user selects a new neighborhood
  if (this.state.neighborhood != prevState.neighborhood) {
    this.getCrimeData()
  }
}
hoodChange(hood){
  this.setState({neighborhood:hood})
}

getCrimeData(){
  this.urlbase = "https://data.cincinnati-oh.gov/resource/4qzi-nepn.json?$limit=100000&"
    let that = this;
    let locationSelection = `&neighborhood=${this.state.neighborhood}`
    let today = new Date()
    let startDate = new Date()
    startDate.setFullYear(today.getFullYear()-1)
    today = today.toISOString().split('.')[0]
    startDate = startDate.toISOString().split('.')[0]
    let dateSelection = `$where=occurredon between '${startDate}' and '${today}'`
    console.log("Location:");
    console.log(this.state.neighborhood);
    console.log(locationSelection);

  fetch(this.urlbase+dateSelection+locationSelection)
     .then(function(response){
       return response.json()
     }).then(function(res){
       that.setState({records: res})
     })
}

  render() {
    return (
      <div className="App">
        {/* <h1>Cincy Crime App</h1> */}
        <div className="hoodRecent Section">
          <h3>{this.state.neighborhood}</h3>

          <HoodSelectorContainer hoodChange={this.hoodChange}></HoodSelectorContainer>
          <RecentCrimesList crimes={this.state.records}></RecentCrimesList>
          <FrequentCrimesList crimes={this.state.records}></FrequentCrimesList>
        </div>
        <div className="officerSearch Section">
          <OfficerSearch></OfficerSearch>
        </div>
      </div>
    );
  }
}

export default App;
