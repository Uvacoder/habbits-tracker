import React, { useState } from 'react'
import AddTodo from './addTodo'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../redux/actions/todo'
import { format } from 'date-fns'

const AddTodoContainer = () => {
    
    const [ selectedDate, setDate ] = useState(new Date())
    const [ priority, setPriority ] = useState(0)
    const [ text, setText ] = useState('')
    
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(addTodoAction({
            priority,
            deadline: format(selectedDate, 'MM/dd/yyyy EEEE'),
            text,
            id: Math.random().toString()
        }))

        setDate(new Date())
        setText('')
        setPriority(0)
    }

    const props = {
        selectedDate, 
        setDate,
        priority, 
        setPriority,
        text, 
        setText,
        addTodo
    }

    return (
        <AddTodo {...props} />
    )
}

export default AddTodoContainer
