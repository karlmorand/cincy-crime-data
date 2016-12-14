import React, { Component } from 'react';
import 'whatwg-fetch'

class GetCrimeData extends Component {
  constructor(props){
    super(props)
    // this.getRecords = this.getRecords.bind(this)
    // this.getNeighborhoods = this.getNeighborhoods.bind(this)
    this.urlbase = "https://data.cincinnati-oh.gov/resource/4qzi-nepn.json?"
    this.state = {userSearchDate: ''}
  }

  // getCrimeData(event){
  //   event.preventDefault()
  //   let that = this
  //   fetch(this.urlbase+'$limit=30')
  //     .then(response =>{
  //       return response.json()
  //     }).then(data => {
  //
  //       console.log("finished processing, sending to state");
  //       that.props.addRecords(hoods)
  //     })
  // }

  // getRecords(event){
  //   event.preventDefault()
  //   let that = this;
  //   let today = new Date().toISOString().split('.')[0]
  //   let locationSelection = `&neighborhood=${this.userNeighborhood.value.toUpperCase()}`
  //   let startDate = new Date(this.userDate.value).toISOString().split('.')[0]
  //   let dateSelection = `$where=occurredon between '${startDate}' and '${today}'`
  //
  //   this.setState({userSearchDate: startDate})
  //   console.log("getting records");
  //   fetch(this.urlbase+dateSelection+locationSelection)
  //     .then(function(response){
  //       return response.json()
  //     }).then(function(res){
  //         that.props.addRecords(res)
  //     }).then(function(){that.limitForm.reset()}).catch(function(ex){
  //       console.log("error", ex);
  //     })
  // }
  testFunc(input){
    console.log(input);
  }
  render(){

    return(
      <p>Howdy</p>
      // <div>
      //   <form ref={(input) => this.limitForm = input} onSubmit={(e) => this.getNeighborhoods(e)}>
      //     <input type="date" ref={(input) => this.userDate = input}/>
      //     <select ref={(input)=> this.userNeighborhood = input}>
      //       <option value="over-the-rhine">Over The Rhine</option>
      //       <option value="pendleton">Pendleton</option>
      //       <option value="queensgate">Queensgate</option>
      //       <option value="mt. washington">Mt. Washington</option>
      //     </select>
      //     <button type="submit">Get Records</button>
      //     <h3>{this.state.userSearchDate}</h3>
      //   </form>
      // </div>
    )
  }
}

export default GetCrimeData
