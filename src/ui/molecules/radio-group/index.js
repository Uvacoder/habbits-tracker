import React from 'react'
import styles from './style.module.scss'

const RadioGroup = ({ options, currentValue, onChange }) => {
    return (
        <div className={styles.red}>
            {
                options.map( (option, i) => (
                    <>
                        <label htmlFor={option.value}> {option.label} </label>
                        <input id={option.value} type='radio' checked={option.value === currentValue} onChange={() => onChange(i)} />
                    </>
                ))
            }
        </div>
    )
}

export default RadioGroup
