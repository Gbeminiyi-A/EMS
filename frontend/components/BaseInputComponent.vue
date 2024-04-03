<template>
  <div class="relative border-none outline-none bg-transparent">
    <label v-if="labelText" class="label">{{ labelText }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :type="inputType"
      :placeholder="placeholder"
      v-bind="$attrs"
      ref="input"
      :class="inputClasses"
    />
    <Icon
      name="pepicons-pop:eye"
      v-if="eye"
      size="24px"
      class="absolute right-6 top-12 cursor-pointer"
      @click="changeInputType"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  eye: {
    type: Boolean,
    default: false,
  },
});

const input = ref<HTMLInputElement | null>(null);

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  emit("update:modelValue", newValue);
};
const changeInputType = () => {
  input.value!.type = input.value!.type === "password" ? "text" : "password";
};
const inputClasses = computed(() => {
  if (props.inputType === "checkbox") {
    return "h-4 w-4 bg-red-primary border-none outline-none focus:outline-none";
  }
  return "border-blue-secondary border outline-none focus:outline-none p-3 rounded-lg w-full mb-2 placeholder:text-black-primary";
});
</script>

<style scoped>
label:after {
  content: " *";
  color: red;
  white-space: nowrap;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="checkbox"] {
  background-color: #000;
  border-radius: 0;
  border: 0;
  outline: none;
}
input[type="checkbox"]:checked {
  background-color: red;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  color: #ee2b47;
}
</style>
