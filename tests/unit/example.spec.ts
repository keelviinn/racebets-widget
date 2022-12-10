import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'

describe('Button.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(Button, {
      props: { text, onClick: () => void 0 }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
