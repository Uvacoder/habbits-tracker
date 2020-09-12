import React, { useState } from 'react'
import AddTodo from './addTodo'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../redux/actions'
import { format } from 'date-fns'

const AddTodoContainer = () => {
    
    const [ selectedDate, setDate ] = useState(new Date())
    const [ priority, setPriority ] = useState('SHOW_LOW')
    const [ text, setText ] = useState('')
    
    const dispatch = useDispatch()

    const addTodo = () => {
        
        if(text.trim() !== '') {
            dispatch(addTodoAction({
                id: Math.random().toString(),
                text: text.trim(),
                deadline: format(selectedDate, 'MM/dd/yyyy EEEE'),
                priority,
            }))
            
            setDate(new Date())
            setText('')
            setPriority('SHOW_LOW')
        }
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
