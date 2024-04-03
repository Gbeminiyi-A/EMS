<template>
  <div class="grid gap-2 border-0 w-full h-auto">
    <label v-if="labelText" class="text-white-primary font-semibold text-md">{{
      labelText
    }}</label>
    <select
      class="border border-blue-primary duration-150 outline-none focus:outline-none rounded-lg p-3"
      v-model="selectedOption"
      @change="handleOptionChange"
    >
      <option value="selected">{{ placeholder }}</option>
      <option :value="option" v-for="option in options">{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const selectedOption = ref<string>("selected");
const emit = defineEmits(["update:modelValue"]);
const handleOptionChange = () => {
  emit("update:modelValue", selectedOption.value);
};
defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  options: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
label:after {
  content: " *";
  color: red;
}
option:selected {
  color: #eee;
  bacground-color: blue;
}
option {
  background-color: #ee2b47;
  color: #fff;
  cursor: pointer;
}
select option:hover {
  background-color: #f5eded;
  color: #ee2b47;
  border: 1px solid #ee2b47;
  padding: 10px;
}
</style>
