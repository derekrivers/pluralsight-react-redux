/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {
    TableRow,
    TableRowColumn
  } from 'material-ui/Table'

import RaisedButton from 'material-ui/RaisedButton'

class CourseListRow extends React.Component {
    constructor(props,context) {
        super(props, context)
        this.state = {
            deleting: false
        }

        this.deleteCourse = this.deleteCourse.bind(this)
    }
    deleteCourse(courseId) {
        this.setState({deleting: true})
        this.props.onDelete(courseId)

    }

    render() {

        const {course} = this.props

        return(
            <TableRow>
                <TableRowColumn><a href={course.watchHref} target="_blank">Watch</a></TableRowColumn>
                <TableRowColumn><Link to={'/course/' + course.id}>{course.title}</Link></TableRowColumn>
                <TableRowColumn>{course.authorId}</TableRowColumn>
                <TableRowColumn>{course.category}</TableRowColumn>
                <TableRowColumn>{course.length}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton
                     primary={true}
                     label={this.state.deleting ? "Deleting" : "Delete"}
                     disabled={this.state.deleting}
                     onClick={() => {this.deleteCourse(course.id)}}/>
                </TableRowColumn>
            </TableRow>
        )
    }
   
}

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired

}

export default CourseListRow