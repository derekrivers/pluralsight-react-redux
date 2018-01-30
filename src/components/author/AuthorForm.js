import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const AuthorForm = ({author, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Author</h1>
            <TextField
                name="firstName"
                hintText="Firstname"
                value={author.firstName}
                onChange={onChange}
                errorText={errors.firstName}
                floatingLabelText="Firstname"/>
                <br/>
             <TextField
                name="lastName"
                hintText="Lastname"
                value={author.lastName}
                onChange={onChange}
                errorText={errors.firstName}
                floatingLabelText="Lastname"/>
            <br/>
             <RaisedButton label={saving ? 'Saving...' : 'Save'}
                type="submit"
                primary={true}
                disabled={saving}
                onClick={onSave}/>
        </form>
    )
}

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
}

export default AuthorForm