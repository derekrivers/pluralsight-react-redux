import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as authorActions from '../../actions/authorActions'
import { bindActionCreators} from 'redux'
import AuthorList from './AuthorList'
import {browserHistory} from 'react-router'
import toastr from 'toastr'


class AuthorsPage extends React.Component {
    constructor(props,context) {
        super(props, context)
    }

    render() {
        const {authors} = this.props
        return (
            <div>
                <h1>Authors</h1>
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