import React from 'react'
import RadioGroup from '../../ui/radio-group'
import SubTitle from '../../ui/subtitle'
import TodoList from '../todo-list'
import { VISIBLITY_OPTIONS } from '../../helper/constants'
import { header, title, date_title, content } from './calendar.module.scss'
import format from 'date-fns/format'

const Calendar = ({ todos, visibility, changeVisibilityFilter }) => {
    
    return (
        <div>
            <div className={header}>
                <SubTitle className={title}>All Todos</SubTitle>
                <RadioGroup options={VISIBLITY_OPTIONS} currentValue={visibility} onChange={changeVisibilityFilter} />
            </div>
            {
                Object.entries(todos).map(([date, todos]) => (
                    <>
                        <h6 className={date_title}>{format(new Date(date), 'MM/dd/yyyy EEEE')}</h6>
                        <div className={content}>
                            {
                                <TodoList todos={todos} />
                            }
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Calendar
