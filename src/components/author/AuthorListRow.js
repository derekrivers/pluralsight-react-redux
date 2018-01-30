/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {
    TableRow,
    TableRowColumn
  } from 'material-ui/Table'

class AuthorListRow extends React.Component {
    constructor(props,context) {
        super(props, context)
     

    }
    

    render() {

        const {author} = this.props

        return(
            <TableRow>
                <TableRowColumn><Link to={'/author/' + author.id}>{author.firstName} {author.lastName}</Link></TableRowColumn>
            </TableRow>
        )
    }
   
}

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
}

export default AuthorListRow