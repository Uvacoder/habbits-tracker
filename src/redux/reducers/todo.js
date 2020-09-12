import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from '../actions/actionTypes'

const initialState = [
    {
        id: 'asd123a',
        text: 'getir\'den sipariş ver',
        completed: false,
        priority: 'SHOW_LOW',
        deadline: '09/11/2020 Friday'
    }
]

export const todoReducer = (state = initialState, action) => {
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
        
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
            
        default:
            return state
    }
}