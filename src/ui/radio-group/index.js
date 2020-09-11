import React from 'react'
import { container, radio, label, checked } from './style.module.scss'
import classnames from 'classnames'

const RadioGroup = ({ options, currentValue, onChange }) => {
    
    return (
        <div className={container}>
            {
                options.map( (option, i) => (
                    <>
                        <label 
                            className={classnames(label, {[checked]: option.value === currentValue})} 
                            htmlFor={option.value}> {option.label} 
                        </label>
                        <input className={radio} id={option.value} type='radio' checked={option.value === currentValue} onChange={() => onChange(i)} />
                    </>
                ))
            }
        </div>
    )
}

export default RadioGroup
