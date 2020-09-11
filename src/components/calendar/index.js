import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from './calendar'
import getGroupedByDateTodos from '../../redux/selectors/groupByDate'
import getVisibleTodos from '../../redux/selectors/visibleTodos'
import { setVisibilityFilter } from '../../redux/actions'

const CalendarContainer = () => {

    const todos = useSelector(state => getGroupedByDateTodos(state.todos, state.visibility))
    const visibility = useSelector(state => state.visibility)

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
