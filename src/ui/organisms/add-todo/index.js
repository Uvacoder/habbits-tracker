import React from 'react'
import Input from '../../atoms/input'
import { container, text, content } from './addtodo.module.scss'

const AddTodo = () => {
    return (
        <div className={container}>
            <p className={text}>"Feeling grateful to or appreciative of someone or something in your life actually attracts more of the things that you appreciate and value into your life."</p>
            
            <div className={content}>
                <Input placeholder='Bring a happiness' icon='send-plane-2' />
            </div>
        </div>
    )
}

export default AddTodo
