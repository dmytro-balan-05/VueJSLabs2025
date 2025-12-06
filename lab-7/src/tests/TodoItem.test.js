import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoItem from '../components/TodoItem.vue'

describe('TodoItem.vue', () => {
    it('renders todo title', () => {
        const wrapper = mount(TodoItem, {
            props: {
                todo: { id: 1, title: 'Learn Testing', completed: false }
            }
        })
        expect(wrapper.text()).toContain('Learn Testing')
    })

    it('emits toggle event when clicked', async () => {
        const wrapper = mount(TodoItem, {
            props: {
                todo: { id: 1, title: 'Test', completed: false }
            }
        })

        await wrapper.find('.text').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('toggle')
        expect(wrapper.emitted().toggle[0]).toEqual([1])
    })
})