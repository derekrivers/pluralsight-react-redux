/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import toastr from 'toastr'

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
            <tr>
                <td><a href={course.watchHref} target="_blank">Watch</a></td>
                <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>{course.length}</td>
                <td><input type="button"
                     className="btn btn-primary" 
                     value={this.state.deleting ? "Deleting" : "Delete"}
                     disabled={this.state.deleting}
                     onClick={() => {this.deleteCourse(course.id)}}/></td>
            </tr>
        )
    }
   
}

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired

}

export default CourseListRow