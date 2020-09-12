import { createSelector } from 'reselect'
import getPriorTodos from './priorTodos'

const getKeyword = (state, filters) => filters.keyword
const getTodos = (state, filters) => getPriorTodos(state, filters.priority)

const getFilteredByKeywordTodos = createSelector(
    [getTodos, getKeyword],
    (todos, keyword) => todos.filter( todo => todo.text.toLowerCase().includes(keyword.toLowerCase()))
)

export default getFilteredByKeywordTodos