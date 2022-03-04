import { mount } from '@vue/test-utils'
import Questions from '@/views/Questions.vue'

describe('Question.vue', () => {
  it('Check for returned data starting values', () => {
    const wrapper = mount(Questions)
    expect(wrapper.vm.submitted).toBe(false);
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.results).toHaveLength(0);
  })
})

