import { shallowMount } from '@vue/test-utils'
import CheckboxImage from '@/components/input/checkbox-image.vue'
import { Option } from '@/@types/global'

interface CheckboxImagePorps extends Option {
  checked: boolean;
}

describe('CheckboxImage.vue', () => {
  it('it should render a checkbox input and a label', () => {
    const props: CheckboxImagePorps = {
      id: 'D',
      color: 'red',
      checked: true
    }
    const wrapper = shallowMount(CheckboxImage, { props })
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true) 
  })

  it('it shoud trigger the input event when the checkbox is clicked', async () => {
    const props: CheckboxImagePorps = {
      id: 'D',
      color: 'red',
      checked: true
    }
    const wrapper = shallowMount(CheckboxImage, { props })
    await wrapper.find('input').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})