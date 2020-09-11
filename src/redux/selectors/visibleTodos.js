import { createSelector } from 'reselect'

const getFilter = (state, filter) => filter
const getTodos = (state, filter) => state

const getVisibleTodos = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos

            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed)

            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed)
        }
    }
)

export default getVisibleTodos
