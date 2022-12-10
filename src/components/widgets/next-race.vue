<template>
  <div class="widget flex flex-col border-4 border-neutral-700 bg-neutral-700 rounded-sm text-[11px]">
    <div class="flex px-1 py-3 w-64 justify-between items-center border-b border-neutral-500 text-white">
      <div class="flex gap-2 items-center cursor-pointer" @click="() => externalURL(nextRace.id_race)">
        <img :src="require('@/assets/countries/' + nextRace.event.country + '.png')" :alt="nextRace.event.country"
          class="w-6">
        <span>{{ nextRace.event.title }}</span>
      </div>
      <time class="cursor-pointer">
        {{ getPostTime(nextRace.post_time) }}
      </time>
    </div>
    <div class="flex px-1 py-3 w-64 justify-between text-white">
      <div class="flex gap-2 cursor-pointer" @click="() => externalURL(nextRace.id_race)">
        <p class="border-r border-white pr-2">{{ nextRace.num_runners }} runners</p>
        <p class="border-r border-white pr-2">{{ nextRace.distance }} m</p>
        <p> {{ new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: "code"
          }).format(nextRace.purse.amount)
        }}
        </p>
      </div>
      <img :src="require('@/assets/race-types/race-type-' + nextRace.race_type + '.svg')" @click="() => externalURL(nextRace.id_race)" class="cursor-pointer">
    </div>
    <div class="flex flex-col">
      <div v-for="runner in nextRace.runners" :key="runner.id_runner"
        class="flex w-full bg-white justify-between px-2 py-3 border-b border-neutral-500 last:border-b-0">
        <div class="flex gap-2 justify-start items-center cursor-pointer" @click="() => externalURL(nextRace.id_race)">
          <img v-if="runner.silk.length > 1" :src="require('@/assets/silks/' + runner.silk)" class="w-4" v-html="runner.silk"> 
          <p>{{ runner.name }}</p>
        </div>
        <ButtonLink :text="String(runner.odds)" :onClick="() => externalURL(nextRace.id_race)"
          :id_race="nextRace.id_race" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Race } from "@/@types/global";
import { PropType } from "vue";
import { differenceInMinutes } from "date-fns";
import ButtonLink from "../button/button.vue";

export default {
  name: "next-race",
  props: {
    nextRace: {
      type: Object as PropType<Race>,
      required: true,
    },
  },
  components: {
    "ButtonLink": ButtonLink,
  },
  setup() {
    const getPostTime = (postTime: number) => {
      const hour = new Date(postTime * 1000).getHours(); //getHours() returns the hour and remove date
      const minutes = differenceInMinutes(new Date().setHours(hour, 0, 0), new Date()); //create a new date with the hour and get the difference in minutes
      if (minutes > 60) {
        const hours = Math.floor(minutes / 60);
        const minutesLeft = minutes % 60;
        return `${hours}h ${minutesLeft}min`;
      } else if (minutes < 0) {
        return "now";
      }

      return `(${minutes}min)`;
    };

    return {
      getPostTime,
    };
  },
  methods: {
    externalURL: (id_race: number) => window.open(`https://www.racebets.com/en/horse-racing/race/details/id/${id_race}`, "_blank"),
  }
};
</script>