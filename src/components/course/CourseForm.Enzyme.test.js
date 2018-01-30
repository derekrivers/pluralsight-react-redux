import expect from 'expect'
import React from 'react'
import { mount, shallow} from 'enzyme'
import CourseForm from './CourseForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


function setup(saving) {

  const props = {
    course: {}, saving: saving, errors: {},
    allAuthors : [],
    onSave: () => {},
    onChange: () => {},
    onChangeAuthor: ()=> {}
  }

   return mount(
    <MuiThemeProvider>
        <CourseForm {...props}/>
    </MuiThemeProvider>)

}
describe('CourseForm via Enzyme', () => {
  it('renders form and h2', () => {
    const wrapper = setup(false)
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h2').text()).toEqual('Manage Course')
  })

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false)
    expect(wrapper.find('button').children().find('span').text()).toEqual('Save')
  })

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true)
    expect(wrapper.find('button').children().find('span').text()).toEqual('Saving...')
  })
})


