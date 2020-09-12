import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from './calendar'
import getGroupedByDateTodos from '../../redux/selectors/groupByDate'
import { setVisibilityFilter } from '../../redux/actions'

const CalendarContainer = () => {

    const todos = useSelector(state => getGroupedByDateTodos(state.todos, state.filters.visibility))
    const visibility = useSelector(state => state.filters.visibility)

    const dispatch = useDispatch()

    const changeVisibilityFilter = filter => {
        dispatch(setVisibilityFilter(filter))
    }

    const props = {
        todos,
        visibility,        
        changeVisibilityFilter
    }

    return (
        <Calendar {...props} />
    )
}

export default CalendarContainer
