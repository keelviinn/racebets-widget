import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'

describe('Button.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new message'
    const onClick = jest.fn()
    const wrapper = shallowMount(Button, {
      props: { text, onClick, type: "button" }
    })
    expect(wrapper.text()).toMatch(text)
  })

  it('trigger a click on button', () => {
    const text = 'new message'
    const onClick = jest.fn()
    const wrapper = shallowMount(Button, {
      props: { text, onClick, type: "button" }
    })
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
