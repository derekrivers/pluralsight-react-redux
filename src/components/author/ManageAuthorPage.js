import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as authorActions from '../../actions/authorActions'
import AuthorForm from './AuthorForm'


export class AuhtorCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            author: Object.assign({}, this.props.author),
            errors: {},
            saving: false
        }

        this.updateAuthorState = this.updateAuthorState.bind(this)
        this.saveAuthor = this.saveAuthor.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.author.id != nextProps.author.id) {
            this.setState({author: Object.assign({}, nextProps.author)})
        }
    }

    updateAuthorState(event) {
        const field = event.target.name
        let author = Object.assign({}, this.state.author)
        author[field] = event.target.value
        return this.setState({author: author})
    }

    authorFormIsValid() {
      let formIsValid = true
      let errors = {}

      if(this.state.author.firstName === ''){
        errors.firstName = 'Firstname is required.'
        formIsValid = false
      }

      if(this.state.author.lastName === ''){
        errors.lastName = 'Lastname is required.'
        formIsValid = false
      }

      this.setState({errors: errors})
      return formIsValid
    }
    saveAuthor(event) {
        event.preventDefault()

        if(!this.authorFormIsValid()) {
          return
        }

        this.setState({saving: true})
        this.props.actions.saveAuthor(this.state.author)
            .then(()=> this.redirect())
            .catch(error => {
                this.setState({saving: false})
            })

    }

    redirect() {
        this.setState({saving: false})
        this.context.router.push('/authors')
    }

    render() {
        return (
            <AuthorForm
                onChange={this.updateAuthorState}
                onSave={this.saveAuthor}
                author={this.state.author}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        )
    }
}

AuhtorCoursePage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

AuhtorCoursePage.contextTypes = {
    router: PropTypes.object
}

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id == id)
    if(author.length) return author[0]
    return null
}

function mapStateTpProps(state, ownProps) {
    const authorId = ownProps.params.id

    let author = {id: '', firstName: '', lastName: ''}

    if(authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId)
    }

    return {
        author: author
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateTpProps, mapDispatchToProps)(AuhtorCoursePage)