/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

class AuthorListRow extends React.Component {
    constructor(props,context) {
        super(props, context)
     

    }
    

    render() {

        const {author} = this.props

        return(
            <tr>
                <td><Link to={'/author/' + author.id}>{author.firstName} {author.lastName}</Link></td>
            </tr>
        )
    }
   
}

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
}

export default AuthorListRow