import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { Modal } from 'antd'
import SubTitle from '../../ui/subtitle'
import Input from '../../ui/input'
import Button from '../../ui/button'
import RadioGroup from '../../ui/radio-group'
import DatePicker from "react-datepicker";
import { PRIORITY_OPTIONS } from '../../helper/constants'
import { modal_body, input, priority_title, subtitle, button } from './editTodo.module.scss'

const EditTodo = ({ visibility, closeModal, todo, confirmEdit }) => {
    
    const [ deadline, setDeadline ] = useState(todo.deadline)
    const [ priority, setPriority ] = useState(todo.priority)
    const [ text, setText ] = useState(todo.text)

    const edit = () => {

        if (text.trim() !== '') {
            confirmEdit({
                text,
                deadline,
                priority
            }, todo.id)
    
            closeModal()
        }
    }

    return (
        <Modal
            width={768}
            visible={visibility}
            onCancel={closeModal}
            footer={null}
            bodyStyle={{ backgroundColor: '#353b48' }}
            closeIcon={<Button icon={<RiCloseLine size={20} />} type='transparent' />}
        >
            <div className={modal_body}>
                <SubTitle className={subtitle}>Edit Todo</SubTitle>
                <div style={{ display: 'flex' }}>
                    <Input
                        className={input}
                        style={{ fontSize: 14, paddingLeft: 0, padding: 0, paddingBottom: 12 }}
                        placeholder='any keyword'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <DatePicker
                        selected={new Date(deadline)}
                        closeOnScroll
                        onChange={setDeadline}
                        minDate={new Date()}
                        customInput={<Input style={{ fontSize: 14, padding: 0, paddingBottom: 12 }} />} />
                </div>
                <SubTitle className={priority_title}>Priority</SubTitle>
                <RadioGroup options={PRIORITY_OPTIONS} currentValue={priority} onChange={setPriority} />
                <Button className={button} onClick={edit}>Edit</Button>
            </div>
        </Modal>
    )
}

export default EditTodo
