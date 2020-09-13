import { ADD_TODO, CHANGE_STATUS, DELETE_TODO, EDIT_TODO } from '../actions/actionTypes'
import todos from '../../helper/todos.json'

export const todoReducer = (state = todos, action) => {
    switch(action.type) {
        
        case ADD_TODO:
            return [
                ...state,
                {
                    ...action.payload,
                    completed: false
                }
            ]
        
        case CHANGE_STATUS:
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
            
        case EDIT_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, ...action.payload} : todo)

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
            
        default:
            return state
    }
}