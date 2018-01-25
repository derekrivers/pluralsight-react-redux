import React from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'



const divStyle = {
    textAlign: 'center'
}


class HomePage extends React.Component {
   
    render() {
        return (
            <div style={divStyle}>
                <h1>Pluralsight Administration</h1>
                <p>React, and react Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about">
                    <RaisedButton label="Learn More" primary={true}  />
                </Link>
          
            </div>
        )
    }
}

export default HomePage