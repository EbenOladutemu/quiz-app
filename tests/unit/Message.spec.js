import { mount } from "@vue/test-utils"
import Message from "@/components/Message"

describe('Message.vue', () => {
  it('doughnut yummy fluffy', () => {
    const wrapper = mount(Message, {
      props: {
        msg: 'Hello friends!'
      }
    });
    expect(wrapper.text()).toContain('Hello friends');
  })
})