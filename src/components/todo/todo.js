import React from 'react'
import { todo_item } from './todo.module.scss'
import Checkbox from '../../ui/checkbox'
import Button from '../../ui/button'
import { RiDeleteBinFill } from 'react-icons/ri'

const Todo = ({ todo, deleteTodo, changeStatus }) => {
    
    return (
        <div className={todo_item}>
            <Checkbox todo={todo} onChange={changeStatus} />
            <Button onClick={deleteTodo} type='transparent' icon={<RiDeleteBinFill size={20} />} />
        </div>
    )
}

export default Todo
