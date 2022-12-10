<template>
  <button @click="onClick()" :type="type"
    class="px-3 py-1 bg-gradient-to-b from-yellow-400 to-yellow-600 border border-yellow-500 rounded-sm hover:border-yellow-600">
    <p class="text-neutral-700">{{ text }}</p>
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
  name: "button-component",
  props: {
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      required: false,
      default: "button",
    },
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  }
};
</script>