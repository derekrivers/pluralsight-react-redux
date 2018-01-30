import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import { bindActionCreators} from 'redux'
import CourseList from './CourseList'
import {browserHistory} from 'react-router'
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

class CoursesPage extends React.Component {
    constructor(props,context) {
        
        super(props, context)

        this.state = {
            snackBarPopped : false
        }

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
        this.deleteCourse = this.deleteCourse.bind(this)
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course')
    }

    deleteCourse(courseId) {
        this.setState({deleting: true})
        this.props.actions.deleteCourse(courseId).then(()=>{
            this.setState({deleting: false, snackBarPopped: true})
        })
        .catch(error => {
            this.setState({deleting: false})
        })
    }

    handleSnackbarClose() {
        this.setState({snackBarPopped: false})
    }

    render() {
        const {courses} = this.props
        return (
            <div>
                <h1>Courses ({courses.length})</h1>
                <RaisedButton type="submit"
                       label="Add Course"
                       primary={true}
                       onClick={this.redirectToAddCoursePage}/>
               {courses.length > 0 && <CourseList courses={courses} onDelete={this.deleteCourse} />}
               <Snackbar
                open={this.state.snackBarPopped}
                message="Course Deleted"
                autoHideDuration={4000}
                onRequestClose={this.handleSnackbarClose}/>
            </div>
        )
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired

}

function mapStateToProps(state, ownProps) {
    let orderedCourses = _.orderBy(state.courses, ['authorId'] ,['asc'])

    return {
        courses: orderedCourses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)