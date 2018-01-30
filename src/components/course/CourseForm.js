import React from 'react'
import SelectInput from '../common/SelectInput'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'

const style = {
    textAlign: 'left'
}

const CourseForm = ({course, allAuthors, onSave, onChange, onChangeAuthor, saving, errors}) => {
    return (
        <form>
            <h2>Manage Course</h2>
            
            <div>

            <TextField
                name="title"
                hintText="Title"
                value={course.title}
                onChange={onChange}
                errorText={errors.title}
                fullWidth={false}
                floatingLabelText="Title"/>
            <br />

            <SelectField
                style={style}
                floatingLabelText="Select Author"
                value={course.authorId}
                onChange={onChangeAuthor}
                errorText={errors.authorId}>
                {allAuthors.map((author)=>{return (<MenuItem

                key={author.value}
                value={author.value}
                primaryText={author.text}/>
                )})
                }
            </SelectField>

            <br/>

            <TextField
            name="category"
            hintText="Category"
            value={course.category}
            onChange={onChange}
            errorText={errors.category}
            floatingLabelText="Category"/>

            <br/>

            <TextField
                name="length"
                hintText="Length"
                value={course.length}
                onChange={onChange}
                errorText={errors.length}
                floatingLabelText="Length"/>
            <br/>
            <RaisedButton label={saving ? 'Saving...' : 'Save'}
                type="submit"
                primary={true}
                disabled={saving}
                onClick={onSave}/>
        </div>
    </form>
    )
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeAuthor : PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
}

export default CourseForm
