import React, { Component } from 'react'
import CrimeDetail from './CrimeDetail'

class RecentCrimesList extends Component {
  constructor(props){
    super(props)
  }

  sortRecent(crimesArray, numRecToShow){
    // TODO: Clean up these variable names so they're more logical
    let dateTest, dateTwo
    crimesArray.sort((one,two)=>{
      dateTest = new Date(one['occurredon'])
      dateTwo = new Date(two['occurredon'])
      return  dateTwo - dateTest
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
      <ul>
        {sortedCrimes.map(rec=>
          <CrimeDetail crime={rec} key={rec['casereportno']}></CrimeDetail>
        )}
      </ul>
      )
  }
}
export default RecentCrimesList
