import React, { useState } from 'react'
import Input from '../../atoms/input'
import DatePicker from "react-datepicker";
import SubTitle from '../../atoms/subtitle';
import RadioGroup from '../../molecules/radio-group'
import { PRIORITY_OPTIONS } from '../../../helper/constants'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, changeStatus } from '../../../redux/actions/todo'
import Todo from '../../molecules/todo';
import { container, form, todo_options, day, title, todoList  } from './addtodo.module.scss'

const AddTodo = () => {

    const [ selectedDate, setDate ] = useState(new Date())
    const [ priority, setPriority ] = useState(0)
    const [ text, setText ] = useState('')

    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(addTodo({
            priority,
            deadline: selectedDate,
            text,
            id: Math.random().toString()
        }))

        setDate(new Date())
        setText('')
        setPriority(0)
    }

    return (
        <div className={container}>
            <div className={form}>
                <Input 
                    onChange={e => setText(e.target.value)} 
                    onClickButton={handleAddTodo}
                    value={text} 
                    placeholder='Bring a happiness' 
                    icon='send-plane-2' 
                />

                <div className={todo_options}>
                    <div>
                        <SubTitle>Priority</SubTitle>
                        <RadioGroup options={PRIORITY_OPTIONS} currentValue={priority} onChange={setPriority}  />
                    </div>
                    <div>
                        <SubTitle>Deadline</SubTitle>
                        <DatePicker
                            selected={selectedDate}
                            dayClassName={date => date === selectedDate && day}
                            closeOnScroll
                            onChange={date => setDate(date)}
                            customInput={<Input style={{fontSize:14, paddingLeft: 0}} />}
                        />
                    </div>
                </div>

                <div className={todoList}>
                    <SubTitle className={title}>Latest Todos</SubTitle>
                    {
                        todos.map( todo => (
                            <Todo todo={todo} onChange={() => dispatch(changeStatus(todo.id))} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AddTodo
