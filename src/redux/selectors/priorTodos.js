import { createSelector } from 'reselect'
import { PRIORITY_FILTERS } from '../actions/actionTypes'

const getFilter = (state, filter) => filter
const getTodos = (state, filter) => state

const getPriorTodos = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case PRIORITY_FILTERS.SHOW_ALL:
                return todos

            case PRIORITY_FILTERS.SHOW_LOW:
                return todos.filter(todo => todo.priority === PRIORITY_FILTERS.SHOW_LOW)

            case PRIORITY_FILTERS.SHOW_HIGH:
                return todos.filter(todo => todo.priority === PRIORITY_FILTERS.SHOW_HIGH)
        }
    }
)

export default getPriorTodos
