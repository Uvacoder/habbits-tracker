import React from 'react'
import classnames from 'classnames'
import styles from './button.module.scss'

const Button = ({icon, type, className, children, ...props}) => {
    
    const classNames = classnames(
        styles.button,
        styles[type],
        className
    )

    return (
        <button className={classNames} {...props} >
            {icon}
            {children}
        </button>
    )
}

Button.defaultProps = {
    type : 'default'
}

export default Button
