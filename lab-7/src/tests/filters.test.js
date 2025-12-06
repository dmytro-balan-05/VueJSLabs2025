import { describe, it, expect } from 'vitest'
import { filterTodos } from '../utils/filters'

describe('filterTodos', () => {
    const todos = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true }
    ]

    it('returns all todos when filter is all', () => {
        const result = filterTodos(todos, 'all')
        expect(result).toHaveLength(2)
    })

    it('returns only active todos', () => {
        const result = filterTodos(todos, 'active')
        expect(result).toHaveLength(1)
        expect(result[0].completed).toBe(false)
    })

    it('returns only done todos', () => {
        const result = filterTodos(todos, 'done')
        expect(result).toHaveLength(1)
        expect(result[0].completed).toBe(true)
    })
})