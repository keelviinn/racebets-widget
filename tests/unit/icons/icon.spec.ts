import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/icons/race-type-D.vue'

describe('Icon.vue', () => {
  it('render the write color when passed', () => {
    const color = 'red'
    const wrapper = shallowMount(Icon, {
      props: { color }
    })
    expect(wrapper.find('path').attributes('fill')).toBe(color)
  })
})