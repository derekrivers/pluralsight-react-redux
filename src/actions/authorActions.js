import authorApi from '../api/mockAuthorApi'
import * as types from './actionTypes'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions'

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function createAuthorSuccess(author) {
    return { type: types.CREATE_AUTHOR_SUCCESS, author }
}

export function updateAuthorSuccess(author) {
    return { type: types.UPDATE_AUTHOR_SUCCESS, author }
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall())
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors))
        }).catch(error => {
            throw(error)
        })
    }
}

export function saveAuthor(author) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall())
        return authorApi.saveAuthor(author).then(savedAuthor => {
            author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :
            dispatch(createAuthorSuccess(savedAuthor))
        }).catch(error =>{
            dispatch(ajaxCallError(error))
        })
    }
   
}