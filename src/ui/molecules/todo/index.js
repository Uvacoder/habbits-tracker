import React from 'react'
import { container, input, checkbox, label, checked } from './todo.module.scss'
import classnames from 'classnames'

const Todo = ({ todo, onChange}) => {
    
    const { id, completed, text } = todo

    return (
        <div>
            <div className={classnames(container, {[checked]: completed})}>
                <label className={checkbox} htmlFor={id} />
                <input className={input} type="checkbox" id={id} checked={completed} onChange={onChange} />
                <label className={label} htmlFor={id}> {text} </label>
            </div>
        </div>
    )
}

export default Todo
