<template>
  <div
    class="flex items-center w-full h-full hover:bg-gray-100 transition duration-300 border-r border-gray-200 last:border-r-0 first:hover:rounded-l-md last:hover:rounded-r-md">
    <input @input="(event: Event) => $emit('update:checked', (event.target as HTMLInputElement).checked)"
      type="checkbox" :checked="checked" :id="id"
      class="w-2 h-2 ml-2 rounded-lg appearance-none transition duration-300"
      :style="`background: ${checked ? color : 'gray'}`" />
    <label :for="id" class="py-1 px-2 w-full font-medium cursor-pointer">
      <RaceTypeD v-if="id === 'D'" :color="checked ? 'black' : 'gray'" />
      <RaceTypeG v-if="id === 'G'" :color="checked ? 'black' : 'gray'" />
      <RaceTypeJ v-if="id === 'J'" :color="checked ? 'black' : 'gray'" />
      <RaceTypeT v-if="id === 'T'" :color="checked ? 'black' : 'gray'" />
    </label>
  </div>
</template>

<script lang="ts">
import RaceTypeD from '@/components/icons/race-type-D.vue'
import RaceTypeG from '@/components/icons/race-type-G.vue'
import RaceTypeJ from '@/components/icons/race-type-J.vue'
import RaceTypeT from '@/components/icons/race-type-T.vue'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    color: String,
    checked: Boolean,
  },
  components: {
    RaceTypeD,
    RaceTypeG,
    RaceTypeJ,
    RaceTypeT,
  },

};
</script>
