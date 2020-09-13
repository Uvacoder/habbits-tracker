import React from 'react'
import { container, radio, label, checked } from './style.module.scss'
import classnames from 'classnames'

const RadioGroup = ({ options, currentValue, onChange }) => {
    
    const newOptions = options.map( option => ({
        ...option,
        id: Math.random() // If model is open, label id's must be unique.
    }))

    return (
        <div className={container}>
            {
                newOptions.map( (option) => (
                    <>
                        <label
                            className={classnames(label, {[checked]: option.value === currentValue})} 
                            htmlFor={option.id}> {option.label}
                        </label>
                        <input 
                            type='radio' 
                            id={option.id} 
                            className={radio} 
                            onChange={() => onChange(option.value)}
                            checked={option.value === currentValue}
                        />
                    </>
                ))
            }
        </div>
    )
}

export default RadioGroup
