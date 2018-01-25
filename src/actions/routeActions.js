import * as types from './actionTypes'

export function updateCurrentRouteInStore(route) {
    return { type: types.UPDATE_CURRENT_ROUTE_IN_STORE, route}
}

export function updateRoute(route) {
    return function(dispatch) {
        dispatch(updateCurrentRouteInStore(route))
    }
   
}