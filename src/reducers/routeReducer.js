import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function routeReducer(state = initialState.route, action) {
    switch(action.type) {
        case types.UPDATE_CURRENT_ROUTE_IN_STORE:
            return  action.route
        default:
            return state
    }
}