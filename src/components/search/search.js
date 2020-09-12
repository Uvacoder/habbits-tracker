import React from 'react'
import RadioGroup from '../../ui/radio-group'
import Input from '../../ui/input'
import { PRIORITY_OPTIONS } from '../../helper/constants'
import TodoList from '../../components/todo-list'
import { RiSearch2Line } from 'react-icons/ri'
import { header, search_bar, todo_list } from './search.module.scss'

const Search = ({ changePriorityFilter, filteredTodos, priority, changeKeyword, keyword }) => {
    
    const options = [
        { value: 'SHOW_ALL', label: 'All'},
        ...PRIORITY_OPTIONS
    ]

    return (
        <div>
            <div className={header}>
                <Input
                    placeholder='any keyword' 
                    onChange={e => changeKeyword(e.target.value)} 
                    value={keyword}
                    icon={<RiSearch2Line size={20} />} 
                    className={search_bar}
                />
                <RadioGroup options={options} currentValue={priority} onChange={changePriorityFilter} />
            </div>

            <div className={todo_list}>
                <TodoList todos={filteredTodos} />
            </div>
        </div>
    )
}

export default Search
