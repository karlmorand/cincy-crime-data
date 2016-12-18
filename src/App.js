import React, { Component } from 'react';
import 'whatwg-fetch'

import './App.css';
import HoodSelectorContainer from './HoodSelectorContainer'
import RecentCrimesList from './RecentCrimesList'
import FrequentCrimesList from './FrequentCrimesList'
import OfficerSearch from './OfficerSearch'
import CrimeTimes from './CrimeTimes'
import FrequentCrimeLocationList from './FrequentCrimeLocationList'
import ViewSelector from './ViewSelector'

class App extends Component {
  constructor(props){
    super(props)
    this.getCrimeData = this.getCrimeData.bind(this)
    this.hoodChange = this.hoodChange.bind(this)
    this.viewChange = this.viewChange.bind(this)
    this.viewToShow = this.viewToShow.bind(this)
    this.state = {
    neighborhood:'',
    records: [],
    view: 'Select a view'
  }
}
componentDidMount(){
  // this.getCrimeData()
}
componentDidUpdate(prevProps, prevState){
  //triggers an api call when the user selects a new neighborhood
  if (this.state.neighborhood !== prevState.neighborhood) {
    this.getCrimeData()
  }
}
hoodChange(hood){
  this.setState({neighborhood:hood})
}
viewChange(view){
  this.setState({view:view})
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


  fetch(this.urlbase+dateSelection+locationSelection)
     .then(function(response){
       return response.json()
     }).then(function(res){
       that.setState({records: res})
     })
}
viewToShow(){
  console.log("in view to show");
  switch (this.state.view) {
    case 'recent': return(
      <div>
        <HoodSelectorContainer hoodChange={this.hoodChange}></HoodSelectorContainer>
        <RecentCrimesList crimes={this.state.records}></RecentCrimesList>
      </div>
    )
    break
    case 'frequent': return(
      <div>
        <HoodSelectorContainer hoodChange={this.hoodChange}></HoodSelectorContainer>
        <FrequentCrimesList crimes={this.state.records}></FrequentCrimesList>
      </div>
    )
    break
    case 'time': return(
      <div>
        <HoodSelectorContainer hoodChange={this.hoodChange}></HoodSelectorContainer>
        <CrimeTimes crimes={this.state.records}></CrimeTimes>
      </div>
    )
    break
    case 'frequent locations': return (
      <div>
        <HoodSelectorContainer hoodChange={this.hoodChange}></HoodSelectorContainer>
        <FrequentCrimeLocationList crimes={this.state.records}></FrequentCrimeLocationList>
      </div>
    )
    case 'officer search': return(
      <div>
        <OfficerSearch></OfficerSearch>
      </div>
    )
  }
}

  render() {

    return (
      <div className="App">
        {/* <h1>Cincy Crime App</h1> */}
        <div className="Section">
          <h3>{this.state.neighborhood}</h3>

          <ViewSelector viewChange={this.viewChange}></ViewSelector>
          {this.viewToShow()}
        </div>
      </div>
    );
  }
}

export default App;
