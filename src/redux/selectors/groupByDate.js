import groupBy from 'lodash.groupby'
import { createSelector } from 'reselect'
import getVisibleTodos from './visibleTodos'

const getGroupedByDateTodos = createSelector(
    getVisibleTodos,
    todos => groupBy(todos, 'deadline')
)

export default getGroupedByDateTodos