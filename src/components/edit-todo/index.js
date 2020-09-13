import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodo from './editTodo'
import { setModalVisibility, editTodoAction } from '../../redux/actions'

const EditTodoContainer = () => {
    
    const dispatch = useDispatch()

    const modal = useSelector( state => state.modal)
    const todo = useSelector( state => state.todos.filter( todo => todo.id === modal.id))

    const closeModal = () => {
        dispatch(setModalVisibility(false))
    }

    const confirmEdit = (payload, id) => {
        dispatch(editTodoAction(payload, id))
    }

    const props = {
        visibility: modal.visibility,
        closeModal,
        todo: todo[0],
        confirmEdit
    }

    if (todo[0]) {
        
        return <EditTodo {...props} />
    }

    else {
        return null
    }
}

export default EditTodoContainer
