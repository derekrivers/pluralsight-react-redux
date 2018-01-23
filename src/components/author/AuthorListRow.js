/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import toastr from 'toastr'

class AuthorListRow extends React.Component {
    constructor(props,context) {
        super(props, context)
     

    }
    

    render() {

        const {author} = this.props

        return(
            <tr>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
            </tr>
        )
    }
   
}

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
}

export default AuthorListRow