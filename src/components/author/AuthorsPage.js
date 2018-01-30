import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as authorActions from '../../actions/authorActions'
import {bindActionCreators} from 'redux'
import AuthorList from './AuthorList'
import {browserHistory} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

class AuthorsPage extends React.Component {
    constructor(props,context) {
        super(props, context)

        this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this)
    }

    redirectToAddAuthorPage() {
        browserHistory.push('/author')
    }

    render() {
        const {authors} = this.props
        return (
            <div>
                 <h1>Authors ({authors.length})</h1>
                <RaisedButton type="submit"
                       label="Add Author"
                       primary={true}
                       onClick={this.redirectToAddAuthorPage}/>
                <AuthorList authors={authors}/>
            </div>
        )
    }
}

AuthorsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired

}

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorsPage)