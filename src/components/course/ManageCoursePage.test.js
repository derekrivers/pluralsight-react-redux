import expect from 'expect'
import React from 'react'
import { mount, shallow} from 'enzyme'
import {ManageCoursePage} from './ManageCoursePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

describe ('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {

    const props = {
      actions: { saveCourse: ()=>{ return Promise.resolve()}},
      authors: [],
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category:''}
    }

    const wrapper = mount(
    <MuiThemeProvider>
      <ManageCoursePage {...props}/>
    </MuiThemeProvider>

  )

    const saveButton = wrapper.find('button').last()
    expect(saveButton.prop('type')).toBe('submit')
    //saveButton.simulate('click')
    //const component = wrapper.find(ManageCoursePage)
    //expect(component.state().errors.title).toBe('Title must be at least 5 characters.')
  })
})
