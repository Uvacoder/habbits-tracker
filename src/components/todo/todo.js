import React from 'react'
import { todo_item, buttons } from './todo.module.scss'
import Checkbox from '../../ui/checkbox'
import Button from '../../ui/button'
import { RiDeleteBinFill, RiEditBoxFill } from 'react-icons/ri'

const Todo = ({ todo, deleteTodo, changeStatus, openModal }) => {
    
    return (
        <div className={todo_item}>
            <Checkbox todo={todo} onChange={changeStatus} />
            <div className={buttons}>
                <Button onClick={openModal} type='transparent' icon={<RiEditBoxFill size={20} />} />
                <Button onClick={deleteTodo} type='transparent' icon={<RiDeleteBinFill size={20} />} />
            </div>
        </div>
    )
}

export default Todo
