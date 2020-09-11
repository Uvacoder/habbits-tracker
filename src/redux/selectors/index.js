import groupBy from 'lodash.groupby'
import { createSelector } from 'reselect'

export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos

        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)

        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
    }
}

export const getLatestTodos = todos => {
    return todos.slice(Math.max(todos.length - 3, 0)).reverse()
}

// export const getGroupedByDateTodos = todos => {
//     return groupBy(todos, 'deadline')
// }

const getTodos = todos => todos

export const getGroupedByDateTodos = createSelector(
    getTodos,
    todos => groupBy(todos, 'deadline')
)