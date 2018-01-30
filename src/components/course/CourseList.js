import React, {PropTypes} from 'react'
import CourseListRow from './CourseListRow'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
  } from 'material-ui/Table'

const CourseList = ({courses, onDelete}) => {

    return(
        <div>
            <Table showCheckboxes={false} multiSelectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Author</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                        <TableHeaderColumn>Length</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {courses.map(course => <CourseListRow key={course.id} course={course} onDelete={onDelete}/>
                )}
                </TableBody>
            </Table>
        </div>
        
    )
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired

}

export default CourseList