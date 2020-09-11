const initialState = [
    {
        id: 'asd123a',
        text: 'getir\'den sipariş ver',
        completed: false,
        priority: 0,
        deadline: new Date()
    }
]

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    ...action.payload,
                    completed: false
                }
            ]
        case 'CHANGE_STATUS':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}