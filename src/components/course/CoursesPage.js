import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import { bindActionCreators} from 'redux'
import CourseList from './CourseList'
import {browserHistory} from 'react-router'
import toastr from 'toastr'

class CoursesPage extends React.Component {
    constructor(props,context) {
        super(props, context)

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
        this.deleteCourse = this.deleteCourse.bind(this)
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course')
    }

    deleteCourse(courseId) {
        this.setState({deleting: true})
        this.props.actions.deleteCourse(courseId).then(()=>{
            this.setState({deleting: false})
        })
        .catch(error => {
            toastr.error(error)
            this.setState({deleting: false})
        })
    }

    render() {
        const {courses} = this.props
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses} onDelete={this.deleteCourse} />
                    
            </div>
        )
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired

}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)