<template>
  <div class="flex items-center bg-white rounded-md border border-gray-200">
    <CheckboxImage v-for="option in options" :checked="value.includes(option.id)"
      @update:checked="check(option.id, $event)" :id="option.id" :key="option.id" :color="option.color" />
  </div>
</template>

<script lang="ts">
import { Option } from "@/@types/global";
import CheckboxImage from "./checkbox-image.vue"; 

export default {
  emits: ["update:value"],
  props: {
    value: {
      type: Array as () => Array<string>,
      required: true,
    },
    options: {
      type: Array as () => Array<Option>,
      required: true,
      validator: (value: Option[]) => {
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        const hasColorKey = value.every((option) =>
          Object.keys(option).includes("color")
        );
        return hasIdKey && hasColorKey;
      },
    },
  },
  setup(props: any, { emit }: any) {
    const check = (optionId: string, checked: boolean) => {
      let updatedValue = [...props.value];
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      emit("update:value", updatedValue);
    };

    return {
      check,
    };
  },
  components: {
    CheckboxImage,
  },
};
</script>
