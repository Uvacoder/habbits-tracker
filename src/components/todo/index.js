import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStatusAction, deleteTodoAction } from '../../redux/actions'
import Todo from './todo'

const TodoContainer = ({ todo }) => {
    
    const dispatch = useDispatch()

    const deleteTodo = () => {
        dispatch(deleteTodoAction(todo.id))
    }

    const changeStatus = () => {
        dispatch(changeStatusAction(todo.id))
    }

    return (
        <Todo todo={todo} deleteTodo={deleteTodo} changeStatus={changeStatus} />
    )
}

export default TodoContainer
