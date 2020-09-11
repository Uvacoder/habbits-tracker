import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from './actionTypes'

export const addTodoAction = payload => ({
    type: ADD_TODO,
    payload
})

export const changeStatusAction = id => ({
    type: CHANGE_STATUS,
    id
})

export const deleteTodoAction = id => ({
    type : DELETE_TODO,
    id
})