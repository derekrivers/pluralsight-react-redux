import {combineReducers} from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'
import route from './routeReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    route
})

export default rootReducer