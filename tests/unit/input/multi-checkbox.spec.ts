import { shallowMount } from '@vue/test-utils'
import MultiCheckbox from '@/components/input/multi-checkbox.vue'
import CheckboxImage from '@/components/input/checkbox-image.vue'
import { Option, RaceType } from '@/@types/global'

describe('MultiCheckbox', () => {
  it('must have a CheckboxImage component', () => {
    const wrapper = shallowMount(MultiCheckbox, {
      props: {
        value: ['D'] as RaceType[],
        options: [{ id: "D", color: "green" }] as Option[],
      }
    })

    const checkboxImage = wrapper.findComponent(CheckboxImage)
    expect(checkboxImage.exists()).toBe(true)
  })

  it('must have a CheckboxImage component for each option', () => {
    const wrapper = shallowMount(MultiCheckbox, {
      props: {
        value: ['D'] as RaceType[],
        options: [{ id: "D", color: "green" }, { id: "G", color: "red" }] as Option[],
      }
    })

    const checkboxImage = wrapper.findAllComponents(CheckboxImage)
    expect(checkboxImage.length).toBe(2)
  })

  it('must emit an input event when a checkbox is clicked', async () => {
    const wrapper = shallowMount(MultiCheckbox, {
      props: {
        value: ['D'] as RaceType[],
        options: [{ id: "D", color: "green" }, { id: "G", color: "red" }] as Option[],
      }
    })

    const checkboxImage = wrapper.findAllComponents(CheckboxImage)
    await checkboxImage[0].trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
