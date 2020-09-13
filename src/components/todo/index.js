import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatusAction, deleteTodoAction, setModalVisibility } from '../../redux/actions'
import Todo from './todo'

const TodoContainer = ({ todo }) => {
    
    const dispatch = useDispatch()

    const deleteTodo = () => {
        dispatch(deleteTodoAction(todo.id))
    }

    const changeStatus = () => {
        dispatch(changeStatusAction(todo.id))
    }

    const openModal = () => {
        dispatch(setModalVisibility(true, todo.id))
    }

    const props = {
        todo,
        deleteTodo,
        changeStatus,
        openModal
    }

    return (
        <Todo {...props} />
    )
}

export default TodoContainer
