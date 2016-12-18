import React, { Component } from 'react'
import CrimeDetail from './CrimeDetail'

class RecentCrimesList extends Component {

  sortRecent(crimesArray, numRecToShow){
    // TODO: Clean up these variable names so they're more logical
    // TODO: crimes don't seem to be sorting properly, the dates sort fine, but within x date some of the times will be sorted wrong, find the pattern of why they're sorting wrong within each day

    // function createSortDate (date){
    //   let year = date.split("T")[0].split("-")[0]
    //   let month = date.split("T")[0].split("-")[1]
    //   let day = date.split("T")[0].split("-")[2]
    //   let hours = date.split("T")[1].split(":")[0]
    //   let minutes = date.split("T")[1].split(":")[1]
    //
    //   return new Date(Date.UTC(year, month, day, hours, minutes))
    // }
    crimesArray.sort((a,b)=>{
      a = new Date(a['occurredon'])
      b = new Date(b['occurredon'])
      //
      // a = createSortDate(a['occurredon'])
      // b = createSortDate(b['occurredon'])

      return a>b ? -1 : a<b ? 1 : 0
    })
    let recList = []
    for (let i = 0; i<numRecToShow; i++){
      recList.push(this.props.crimes[i])
    }

    return recList

  }

  render(){
    console.log(`in RecentCrimesList with: ${this.props.crimes.length}`);
    // TODO: Need to sort the crimes by date b/c I don't think they'll come that way from the API
    if (this.props.crimes.length === 0) {
      return <h3>Select a neighborhood</h3>
    }
    let sortedCrimes = this.sortRecent(this.props.crimes, 10)

    return (
      <table>
        <tbody>
          <tr>
            <th>Crime</th>
            <th>Time</th>
            <th>Location</th>
            <th>Reporting Officer</th>
          </tr>
          {sortedCrimes.map(rec=>
            <CrimeDetail crime={rec} key={rec['casereportno']}></CrimeDetail>
          )}</tbody>
      </table>
      )
  }
}
export default RecentCrimesList
