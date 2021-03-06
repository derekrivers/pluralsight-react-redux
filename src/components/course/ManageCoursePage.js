import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
import {authorsFormattedForDropdown} from '../../selectors/selectors'
import PropTypes from 'prop-types'

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        }

        this.updateCourseState = this.updateCourseState.bind(this)
        this.updateCourseAuthor = this.updateCourseAuthor.bind(this)
        this.saveCourse = this.saveCourse.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)})
        }
    }

    updateCourseAuthor(event, index, value){
      let course = Object.assign({}, this.state.course)
      course.authorId = value
      return this.setState({course: course})
    }

    updateCourseState(event) {
        const field = event.target.name
        let course = Object.assign({}, this.state.course)
        course[field] = event.target.value
        return this.setState({course: course})
    }

    courseFormIsValid() {
      let formIsValid = true
      let errors = {}

      if(this.state.course.title.length < 5){
        errors.title = 'Title must be at least 5 characters.'
        formIsValid = false
      }

      if(this.state.course.authorId === ''){
          errors.authorId = "Please select an author"
          formIsValid = false
      }

      if(this.state.course.category === ''){
        errors.category = 'Category is a required field.'
        formIsValid = false
      }

      if(this.state.course.length === ''){
        errors.length = 'Length is a required field.'
        formIsValid = false
      }

      this.setState({errors: errors})
      return formIsValid
    }
    saveCourse(event) {
        event.preventDefault()

        if(!this.courseFormIsValid()) {
          return
        }

        this.setState({saving: true})
        this.props.actions.saveCourse(this.state.course)
            .then(()=> this.redirect())
            .catch(error => {
                this.setState({saving: false})
            })

    }

    redirect() {
        this.setState({saving: false})
        this.context.router.push('/courses')
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onChangeAuthor={this.updateCourseAuthor}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        )
    }
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id)
    if(course.length) return course[0]
    return null
}

function mapStateToProps(state, ownProps) {

    const courseId = ownProps.params.id

    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category:''}

    if(courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId)
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
