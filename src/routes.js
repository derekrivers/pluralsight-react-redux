import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/course" component={ManageCoursePage}/>
        <Route path="/course/:id" component={ManageCoursePage}/>
        <Route path="/about" component={AboutPage}/>
    </Route>
);
