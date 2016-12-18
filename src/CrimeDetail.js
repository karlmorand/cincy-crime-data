import React, { Component } from 'react';

class CrimeDetail extends Component{

  render(){
    // let crimeDate = new Date(this.props.crime['occurredon'])
    // crimeDate.setHours(crimeDate.getUTCHours())
    let options = {weekday: 'short', month:'short', day:'numeric', hour:'numeric', minute:'numeric'}
    function createDisplayDate (date){
      let year = date.split("T")[0].split("-")[0]
      let month = date.split("T")[0].split("-")[1]
      let day = date.split("T")[0].split("-")[2]
      let hours = date.split("T")[1].split(":")[0]
      let minutes = date.split("T")[1].split(":")[1]

      return new Date(year, month, day, hours, minutes)
    }

    let offense = this.props.crime['offense']
    let crimeLocation = `${this.props.crime['block_begin']} - ${this.props.crime['block_end']} ${this.props.crime['sname']}`
    let crimeDateTime = createDisplayDate(this.props.crime['occurredon']).toLocaleString('en-us',options)
    let officer = this.props.crime['reportedbyofficer']
    return(
        <tr>
          <td>{offense}</td>
          <td>{crimeDateTime}</td>
          <td>{crimeLocation}</td>
          <td>{officer}</td>
        </tr>
    )
  }
}

export default CrimeDetail
