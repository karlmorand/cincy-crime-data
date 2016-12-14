import React, {Component} from 'react';
import HoodSelector from './HoodSelector'
import 'whatwg-fetch'

class HoodSelectorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          neighborhoods: ["WEST  END", "AVONDALE", "FAIRVIEW", "WALNUT HILLS", "C. B. D. / RIVERFRONT", "KENNEDY  HEIGHTS", "-", "Winton Hills", "WEST PRICE HILL", "ROSELAWN", "CAMP  WASHINGTON", "MOUNT  ADAMS", "SAYLER  PARK", "WESTWOOD", "MOUNT AIRY", "EAST WALNUT HILLS", "LOWER PRICE  HILL", "ENGLISH  WOODS", "NORTH FAIRMOUNT", "OVER-THE-RHINE", "OAKLEY", "NORTH AVONDALE", "EAST PRICE HILL", "BONDHILL", "CARTHAGE", "CLIFTON", "SEDAMSVILLE", "CORRYVILLE", "MADISONVILLE", "FAY APARTMENTS", "PLEASANT RIDGE", "COLLEGE  HILL", "MOUNT  AUBURN", "CLIFTON/UNIVERSITY HEIGHTS", "HYDE PARK", "Spring Grove Village", "MILLVALE", "PENDLETON", "S.. CUMMINSVILLE", "PADDOCK  HILLS", "HARTWELL", "RIVERSIDE", "EAST  WESTWOOD", "EVANSTON", "EAST  END", "MT.  WASHINGTON", "QUEENSGATE", "SOUTH  FAIRMOUNT", "NORTHSIDE"]
        }
    }

    componentDidMount(){

    //   let that = this
    // fetch('https://data.cincinnati-oh.gov/resource/tm66-jzyx.json').then(function(response) {
    //     return response.json()
    // }).then(function(res) {
    //     let hoods = res.map(hood => hood['sna_name'])
    //     that.setState({neighborhoods: hoods})
    //
    // })
  }

    render() {
      return <HoodSelector hoods={this.state.neighborhoods} hoodChange={this.props.hoodChange}></HoodSelector>
    }
}

export default HoodSelectorContainer
