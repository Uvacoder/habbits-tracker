import { 
    ADD_TODO, 
    CHANGE_STATUS, 
    DELETE_TODO,
    EDIT_TODO,
    SET_KEYWORD, 
    SET_PRIORITY_FILTER,
    SET_VISIBILITY_FILTER 
} from './actionTypes'

export const addTodoAction = payload => ({
    type: ADD_TODO,
    payload
})

export const changeStatusAction = id => ({
    type: CHANGE_STATUS,
    id
})

export const deleteTodoAction = id => ({
    type: DELETE_TODO,
    id
})

export const editTodoAction = (payload, id) => ({
    type: EDIT_TODO,
    payload,
    id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const setPriorityFilter = filter => ({
    type: SET_PRIORITY_FILTER,
    filter
})

export const setKeyword = keyword => ({
    type: SET_KEYWORD,
    keyword
})

export const setModalVisibility = (visibility, id) => ({
    type: 'SET_MODAL_VISIBILITY',
    visibility,
    id
})