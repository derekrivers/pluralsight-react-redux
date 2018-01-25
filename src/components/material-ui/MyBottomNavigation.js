import React, {Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import { Link, browserHistory } from 'react-router'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

class MyBottomNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            route : this.props.route,
            selectedIndex : this.props.selectedIndex
          }
        this.selectBottomNavigationItem = this.selectBottomNavigationItem.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        if(this.props.route != nextProps.route) {
            
        let index = 0

        if(nextProps.route.includes('/course')) {
            index = 1
        } else if(nextProps.route.includes('/author')){
            index = 2
        }
            this.setState({route: nextProps.route, selectedIndex: index})
        }
    }

selectBottomNavigationItem(index){
    this.setState({selectedIndex: index})

    switch(index) {
        case 0:
        return browserHistory.push('/')
        case 1:
        return browserHistory.push('/courses')
        case 2:
        return browserHistory.push('/authors')
        default:
        return browserHistory.push('/')
    }
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>

          <BottomNavigationItem
            label="Home"
            icon={recentsIcon}
            onClick={() => this.selectBottomNavigationItem(0)}
          />

          <BottomNavigationItem
            label="Course"
            icon={favoritesIcon}
            onClick={() => this.selectBottomNavigationItem(1)}
          />
   
          <BottomNavigationItem
            label="Authors"
            icon={nearbyIcon}
            onClick={() => this.selectBottomNavigationItem(2)}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}


MyBottomNavigation.propTypes = {
    route : PropTypes.string,
    selectedIndex : PropTypes.number

}

function mapStateToProps(state) {

    let index = 0

    if(state.route.includes('/course')) {
        index = 1
    } else if(state.route.includes('/author')){
        index = 2
    }

    return {
        route: state.route,
        selectedIndex: index
    }
}


export default connect(mapStateToProps)(MyBottomNavigation)