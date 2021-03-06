import React from 'react'
import {Route, IndexRoute } from 'react-router'
import Root from './components/theme/Root'
import HomePage from './components/home/HomePage'
import CoursesPage from './components/course/CoursesPage'
import ManageCoursePage from './components/course/ManageCoursePage' //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage'
import AuthorsPage from './components/author/AuthorsPage'
import ManageAuthorPage from './components/author/ManageAuthorPage'
import NotFound from './components/common/NotFound'

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={HomePage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/course" component={ManageCoursePage}/>
        <Route path="/course/:id" component={ManageCoursePage}/>
        <Route path="/authors" component={AuthorsPage}/>
        <Route path="/author" component={ManageAuthorPage}/>
        <Route path="/author/:id" component={ManageAuthorPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="*" component={NotFound} />
    </Route>
)
