import { shallowMount } from '@vue/test-utils'
import NextRace from '@/components/widgets/next-race.vue'
import races from '@/constants/next_races.json';
import { Race } from '@/@types/global';

describe('NextRace', () => {
  it('must render NextRace component if nextRace props is passed', () => {
    const wrapper = shallowMount(NextRace, {
      props: {
        nextRace: races.data.races[0] as Race
      }
    })

    expect(wrapper.findComponent(NextRace).exists()).toBe(true)
  })
})