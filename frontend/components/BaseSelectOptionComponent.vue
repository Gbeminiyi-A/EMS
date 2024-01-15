<template>
  <div class="flex flex-col gap-2 border-0 bg-transparent">
    <label :for="labelText" v-if="labelText" class="text-white-primary font-semibold text-md">{{ labelText }}</label>
    <select class="border-blue-secondary border-2 focus:outline-none p-3 rounded-lg" v-model="selectOption" required>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  </div>
</template>

<script setup lang="ts">
const selectOption = ref("all");
const emit = defineEmits(["optionSelected"]);
watch(selectOption, (newOption) => {
  emit("optionSelected", newOption);
});
defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
});
</script>

<style scoped>
label:after {
  content: " *";
  color: red;
}
</style>
