import React, { useState } from 'react'
import AddTodo from './addTodo'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../redux/actions'
import { format } from 'date-fns'

const AddTodoContainer = () => {
    
    const [ selectedDate, setDate ] = useState(new Date())
    const [ priority, setPriority ] = useState(0)
    const [ text, setText ] = useState('')
    
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(addTodoAction({
            id: Math.random().toString(),
            text,
            deadline: format(selectedDate, 'MM/dd/yyyy EEEE'),
            priority,
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
