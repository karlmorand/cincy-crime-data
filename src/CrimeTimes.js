import React, { Component } from 'react';

class CrimeTimes extends Component {

  render(){
  
    let times = {}
    if (this.props.crimes.length === 0) {
      return null
    }
    this.props.crimes.map(crime => {
    let crimeTime = crime['occurredon'].slice(11,13)
    if (crimeTime === "20") {

    }
    if (Object.keys(times).includes(crimeTime.toString())) {
      times[crimeTime.toString()] +=1
    } else {
      times[crimeTime.toString()] = 1
    }
  }
    )
    let timesArr = []
    for (var time in times){
      timesArr.push({'time': time, 'count':times[time]})
    }
    timesArr.sort((a,b) => b.count - a.count)
    // TODO: Come up with a better way to display the hourly crime stats

    return (
      <ul>
        {timesArr.map(time => <li key={time.time}>{`${time.time} : ${time.count}`}</li>)}
      </ul>
    )
  }
}

export default CrimeTimes
