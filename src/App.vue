<template>
  <div class="justify-center flex flex-col bg-yellow-300 items-center h-screen">
    <div class="text-4xl mb-8">
      {{ title }}
    </div>
    <MultCheckBox v-model:value="raceTypes" :options="options" />
    <div class="py-4" />
    <NextRaceWidget v-if="nextRace" :nextRace="nextRace" />
    <div class="py-4" />
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

import { Option, Race, RaceType } from './@types/global';
import MultiCheckbox from "./components/input/multi-checkbox.vue";
import NextRace from "./components/widgets/next-race.vue";
import response from './constants/next_races.json';
import inputOptions from './constants/options.json';

export default defineComponent({
  name: 'App',
  components: {
    "MultCheckBox": MultiCheckbox,
    "NextRaceWidget": NextRace
  },
  setup() {
    let raceTypes = ref<RaceType[]>(inputOptions.options.defult as RaceType[]);
    let options = ref<Option[]>(inputOptions.data as Option[]);
    let nextRace = ref<Race | null>(null);

    return {
      raceTypes,
      options,
      nextRace,
      title: "Welcome to Racebets App",
    };
  },
  methods: {
    getNextRace: (raceTypes: RaceType[]) => {
      const races = response.data.races
        .filter(({ race_type }) => raceTypes.includes(race_type as RaceType))
        .sort((a, b) => a.post_time - b.post_time);

      const randomIndex = Math.floor(Math.random() * races.length);

      return races.length ? races[randomIndex] : null;
    }
  },
  watch: {
    raceTypes: {
      handler(raceTypes: RaceType[]) {
        this.nextRace = this.getNextRace(raceTypes) as Race | null;
      },
      deep: true,
    }
  },
  mounted: function() {
    this.nextRace = this.getNextRace(this.raceTypes) as Race | null;
  }
});
</script>