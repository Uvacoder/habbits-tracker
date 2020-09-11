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
                        <input 
                            type='radio' 
                            id={option.value} 
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
