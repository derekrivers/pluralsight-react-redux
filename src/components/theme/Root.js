import React from 'react'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import * as routeActions from '../../actions/routeActions'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import MyBottomNavigation from '../material-ui/MyBottomNavigation'

const style = {
    padding: 10,
    height: '85vh',
    display: 'flex',
    justifyContent: "center"
  }


class Root extends React.Component {
    constructor(props) {
        super(props)   

        this.state  = {
            route: Object.assign({}, this.props.route)
        }
    }
    render() {
        const {route} = this.props
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Pluralsight Admin" 
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                        zDepth={1}
                        />
                    <Paper zDepth={1} style={style}>
                        {this.props.children}
                    </Paper>
                    <MyBottomNavigation route={route}/>
                </div>
            </MuiThemeProvider>

        )
    }
}


Root.propTypes = {
    children: PropTypes.object.isRequired,
    route :PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        route: state.route 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(routeActions, dispatch)
    }
}


export default connect(mapStateToProps)(Root)