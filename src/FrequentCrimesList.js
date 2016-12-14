import React, { Component } from 'react';

class FrequentCrimesList extends Component {
  constructor() {
    super()

  }
  render(){
    if (this.props.crimes.length === 0) {
      return null
    }
    let crimeCount = {}
    this.props.crimes.map(crime => {
      if (Object.keys(crimeCount).includes(crime['offense'])) {
        crimeCount[crime['offense']] +=1
      } else {
          crimeCount[crime['offense']] = 1
      }
    })
    let crimeArr = []
    for (var crime in crimeCount){
      crimeArr.push({'crime': crime, 'count': crimeCount[crime]}
      )}
    crimeArr.sort((a,b)=> b.count-a.count)

    return(
      <ul>
        {crimeArr.map(rec=>
          <li>{`${rec.crime} : ${rec.count}`}</li>
        )}
      </ul>
   )
  }
}

export default FrequentCrimesList
