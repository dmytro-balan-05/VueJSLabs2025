import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoForm from '../components/TodoForm.vue'

describe('TodoForm.vue', () => {
    it('emits add event with input value', async () => {
        const wrapper = mount(TodoForm)
        const input = wrapper.find('input')

        await input.setValue('New Task')
        await wrapper.find('form').trigger('submit')

        expect(wrapper.emitted()).toHaveProperty('add')
        expect(wrapper.emitted().add[0]).toEqual(['New Task'])
        expect(input.element.value).toBe('')
    })
})