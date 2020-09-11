import React from 'react'
import { container, input, checkbox, label, checked } from './checkbox.module.scss'
import classnames from 'classnames'

const Checkbox = ({ todo, onChange } ) => {
    
    const { id, completed, text } = todo
    
    const classes = classnames(
        container, 
        {
            [checked]: completed
        }
    )

    return (
        <div className={classes}>
            <label className={checkbox} htmlFor={id} />
            <input className={input} type="checkbox" id={id} checked={completed} onChange={onChange} />
            <label className={label} htmlFor={id}> {text} </label>
        </div>
    )
}

export default Checkbox
