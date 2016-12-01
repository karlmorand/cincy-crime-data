import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SodaTest from './SodaTest'
import CrimeDetail from './CrimeDetail'

class App extends Component {
  constructor(){
    super()
    this.addRecords = this.addRecords.bind(this)
    this.eachCrime = this.eachCrime.bind(this)
    this.renderCrimes = this.renderCrimes.bind(this)
  this.state = {
    records:[]
  }
}
addRecords(data){
    this.setState({records: data})
}
renderCrimes(){
  return this.state.records.map(crime => this.eachCrime(crime))
}
eachCrime(crime){
  return(
    <CrimeDetail key={crime.casereportno} crime={crime}></CrimeDetail>
  )
}
  render() {
    return (
      <div className="App">
        <SodaTest addRecords={this.addRecords} records={this.state.records}></SodaTest>
        <h3>{this.state.records.length}</h3>
       <div>{this.renderCrimes()}</div>


      </div>
    );
  }
}

export default App;
