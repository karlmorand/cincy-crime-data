import React, { Component } from 'react';
import 'whatwg-fetch'

class SodaTest extends Component {
  constructor(props){
    super(props)
    this.getRecords = this.getRecords.bind(this)
  }

  getRecords(event){
    event.preventDefault()
    let that = this;
    let limit = this.userLimit.value;
    console.log("getting records");
    fetch(`https://data.cincinnati-oh.gov/resource/4qzi-nepn.json?$limit=${limit}`)
      .then(function(response){
        return response.json()
      }).then(function(res){
          that.props.addRecords(res)
      }).then(function(){that.limitForm.reset()}).catch(function(ex){
        console.log("error", ex);
      })
  }

  render(){
    return(
      <div>
        <form ref={(input) => this.limitForm = input} onSubmit={(e) => this.getRecords(e)}>
          <input autoFocus type="text" ref={(input) => this.userLimit = input}/>
          <button type="submit">Get Records</button>
        </form>
      </div>
    )
  }
}

export default SodaTest
