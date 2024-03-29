<template>
  <div class="relative border-0 bg-transparent">
    <label
      v-if="labelText"
      class="font-semibold text-md text-white-primary capitalize"
      >{{ labelText }}</label
    >
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :type="inputType"
      :placeholder="placeholder"
      required
      v-bind="$attrs"
      ref="input"
      class="border-blue-secondary border-2 focus:outline-none p-3 rounded-lg w-full"
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
    default: "State Placeholder",
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
</script>

<style scoped>
label:after {
  content: " *";
  color: red;
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
</style>
