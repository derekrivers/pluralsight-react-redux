import React, {PropTypes} from 'react'
import AuthorListRow from './AuthorListRow'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
  } from 'material-ui/Table'

const AuthorList = ({authors}) => {
    
    return(
        <Table showCheckboxes={false} multiSelectable={false}>
           <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {authors.map(author => <AuthorListRow key={author.id} author={author}/>
        )}
        </TableBody>
        </Table>
    )
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
}

export default AuthorList