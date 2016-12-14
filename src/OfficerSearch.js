import React, { Component } from 'react';
import OfficerSearchForm from './OfficerSearchForm'
import OfficerSearchList from './OfficerSearchList'
import 'whatwg-fetch'

class OfficerSearch extends Component {
  constructor() {
    super()
    // [{badgeNum:{name:XYZ, arrests:[]}]
    this.state = {officerName: '', officers: [], copList: []}
    this.nameChange = this.nameChange.bind(this)
    this.searchForOfficers = this.searchForOfficers.bind(this)
    this.processOfficers = this.processOfficers.bind(this)
  }
  nameChange(name){
    this.setState({officerName: name})
    this.searchForOfficers(name)
  }

  searchForOfficers(name){
    if (name === '' || null ) {
      this.setState({copList: []})
      return
    }

    console.log("starting search for officers");
  let that = this;
  this.urlbase = "https://data.cincinnati-oh.gov/resource/4qzi-nepn.json?$limit=100"
  let today = new Date()
  let startDate = new Date()
  startDate.setFullYear(today.getFullYear()-5)
  today = today.toISOString().split('.')[0]
  startDate = startDate.toISOString().split('.')[0]

  let dateSelection = `&$where=occurredon between '${startDate}' and '${today}'`
  let officerName = `&$where=UPPER(reportedbyofficer) like '%25${name.toUpperCase()}%25'`
    fetch(this.urlbase+officerName)
       .then(function(response){
         return response.json()
       }).then(function(res){
         that.processOfficers(res)
       })
  }
  processOfficers(reports){
    let officers = []
    reports.forEach(crime => {
      if (!officers.includes(crime['reportedbyofficer'])) {
        officers.push(crime['reportedbyofficer'])
      }
    })
    this.setState({copList: officers})
  }
  render(){
    return(
  <div>
      <h2>Officer Search</h2>
      <OfficerSearchForm officerName={this.state.officerName} nameChange={this.nameChange}></OfficerSearchForm>
      <h2>{this.state.officerName.toUpperCase()}</h2>
    <OfficerSearchList cops={this.state.copList}>
    </OfficerSearchList>
  </div>
)
  }
}

export default OfficerSearch
