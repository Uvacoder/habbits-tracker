export const getLatestTodos = todos => {
    return todos.slice(Math.max(todos.length - 3, 0)).reverse()
}

export default getLatestTodos