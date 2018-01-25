/*eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'
import {updateRoute} from './actions/routeActions'
import './styles/styles.css' //Webpack can import CSS files too!


const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

browserHistory.listen((location) => {
    console.log(
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    )
    store.dispatch(updateRoute(location.pathname))

  })

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
)
