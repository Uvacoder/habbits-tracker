import groupBy from 'lodash.groupby'
import { createSelector } from 'reselect'
import getVisibleTodos from './visibleTodos'

const getGroupedByDateTodos = createSelector(
    getVisibleTodos,
    todos => {
        return groupBy(todos.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)), 'deadline')
    }
)

export default getGroupedByDateTodos