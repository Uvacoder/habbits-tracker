export const addTodo = payload => ({
    type: 'ADD_TODO',
    payload
})

export const changeStatus = id => ({
    type: 'CHANGE_STATUS',
    id
})