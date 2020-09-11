import React from 'react'
import DatePicker from "react-datepicker";
import Input from '../../ui/input'
import RadioGroup from '../../ui/radio-group'
import SubTitle from '../../ui/subtitle'
import { PRIORITY_OPTIONS } from '../../helper/constants'
import { form, todo_options,  } from './addtodo.module.scss'

const AddTodo = (props) => {
    
    const {
        selectedDate, 
        setDate,
        priority, 
        setPriority,
        text, 
        setText,
        addTodo
    } = props

    return (
        <div className={form}>
            <Input
                onChange={e => setText(e.target.value)}
                onClickButton={addTodo}
                value={text}
                placeholder='Bring a happiness'
                icon='send-plane-2'
            />

            <div className={todo_options}>
                <div>
                    <SubTitle>Priority</SubTitle>
                    <RadioGroup options={PRIORITY_OPTIONS} currentValue={priority} onChange={setPriority} />
                </div>
                <div>
                    <SubTitle>Deadline</SubTitle>
                    <DatePicker
                        selected={selectedDate}
                        closeOnScroll
                        onChange={date => setDate(date)}
                        customInput={<Input style={{ fontSize: 14, paddingLeft: 0, paddingTop: 0 }} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddTodo
