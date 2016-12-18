import React, { Component } from 'react';

class FrequentCrimeLocationList extends Component {

  render(){
    if (this.props.crimes.length === 0) {
      return null
    }
    let crimeCount = {}
    this.props.crimes.map(crime => {
      let location = `${crime['block_begin']}-${crime['block_end']} ${(crime[('sname')]).toUpperCase()}`
      if (Object.keys(crimeCount).includes(location)) {
        crimeCount[location]['count'] +=1
        crimeCount[location]['crimes'].push(crime['offense'])

      } else {
        crimeCount[location] = {'count': 1, 'crimes': [crime]}

      }
    })
    let crimeArr = []
    for (var location in crimeCount){
      crimeArr.push({'location': location, 'count': crimeCount[location]['count'], 'crimes': crimeCount[location]['crimes']}
      )}
    crimeArr.sort((a,b)=> b.count-a.count)
    crimeArr = crimeArr.slice(0,10)
    console.log(crimeArr);

    return(
      <div>
        <h2>Locations</h2>
        <ul>
          {crimeArr.map(rec=>
            <li key={rec.location}>{`${rec.location} : ${rec.count}`}</li>
          )}
        </ul>
      </div>
   )
  }
}

export default FrequentCrimeLocationList
