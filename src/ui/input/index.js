import React from 'react'
import Button from '../button'
import classnames from 'classnames'
import { input, button } from './input.module.scss'

const Input = ({ icon, onClickButton, onChange, className, ...props }) => {
    return (
        <div className={classnames(input, className)}>
            <input type='text' onChange={onChange} {...props} />
            
            {icon && <Button onClick={onClickButton} type='transparent' className={button} icon={icon} />}
        </div>
    )
}

export default Input
