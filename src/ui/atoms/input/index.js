import React from 'react'
import styles from './input.module.scss'
import { RiSendPlane2Fill } from "react-icons/ri"
import Button from '../button'

const Input = ({ icon, ...props }) => {
    return (
        <div className={styles.input}>
            <input type='text' {...props} />
            
            <Button type='transparent' className={styles.button} icon={<RiSendPlane2Fill size={20} />} />
        </div>
    )
}

export default Input
