import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp'

describe('TodoApp.vue', () => {
  it('renders yum', () => {
    const wrapper = mount(TodoApp)
    const yum = wrapper.get('[data-test="yum"]')
    expect(yum.text()).toBe('Yum Fluff')
  });

  it('renders todo', () => {
    const wrapper = mount(TodoApp)
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Learn Vue Testing')
  });
  
  it('adds new todo', function() {
    const wrapper = mount(TodoApp);
    const todoLength = wrapper.findAll('[data-test="todo"]')
    expect(todoLength).toHaveLength(2);

    wrapper.get('[data-test="new-todo"]').setValue('New Todo');
    wrapper.get('[data-test="form"]').trigger('submit')
    
    expect(wrapper.findAll()).toHaveLength(3)
  })
  
})
