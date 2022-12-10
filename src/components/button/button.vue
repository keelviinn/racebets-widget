<template>
  <button @click="onClick()"
    class="px-3 py-1 bg-gradient-to-b from-yellow-400 to-yellow-600 border border-yellow-500 rounded-sm hover:border-yellow-600">
    <p class="text-neutral-700">{{ text }}</p>
  </button>
</template>

<script lang="ts">
export default {
  name: "button-component",
  props: {
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