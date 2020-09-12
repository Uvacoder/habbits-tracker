import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from './search'
import { setKeyword, setPriorityFilter } from '../../redux/actions'
import getFilteredByKeywordTodos from '../../redux/selectors/filterByKeyword'

const SearchContainer = () => {

    const dispatch = useDispatch()

    const changePriorityFilter = (priority) => {
        dispatch(setPriorityFilter(priority))
    }

    const changeKeyword = (keyword) => {
        dispatch(setKeyword(keyword))
    }

    const filteredTodos = useSelector(state => getFilteredByKeywordTodos(state.todos, state.filters))
    const priority = useSelector(state => state.filters.priority)
    const keyword = useSelector(state => state.filters.keyword)

    const props = {
        changeKeyword,
        changePriorityFilter,
        filteredTodos,
        priority,
        keyword
    }

    return (
        <Search {...props} />
    )
}

export default SearchContainer
