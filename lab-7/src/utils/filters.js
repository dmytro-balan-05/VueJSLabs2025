export function filterTodos(todos, filterType) {
    if (filterType === 'active') {
        return todos.filter(t => !t.completed)
    }
    if (filterType === 'done') {
        return todos.filter(t => t.completed)
    }
    return todos
}