import React from 'react'
import classnames from 'classnames'
import { subtitle } from './subtitle.module.scss'

const SubTitle = ({ className, children, ...props }) => {
    return (
        <h5 className={classnames(subtitle, className)} {...props}> {children} </h5>
    )
}

export default SubTitle
