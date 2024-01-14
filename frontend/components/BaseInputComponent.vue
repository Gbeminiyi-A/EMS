<template>
  <div class="flex flex-col gap-2 relative border-0 bg-transparent">
    <label :for="labelText" v-if="labelText" class="font-semibold text-md text-white-primary">{{
      labelText
    }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event.target.value)"
      :type="inputType"
      :placeholder="placeholder"
      @blur="validateInput"
      required
      v-bind="$attrs"
      ref="input"
      class="border-blue-secondary border-2 focus:outline-none focus:border-red-primary p-3 rounded-lg"
    />
    <Icon
      name="pepicons-pop:eye"
      v-if="eye"
      size="24px"
      class="absolute right-6 top-14 cursor-pointer"
      @click="changeInputType"
    />
    <!-- <span v-if="error" class="text-red-500 text-lg">{{ error }}</span> -->
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

const input = ref<HTMLInputElement | null>(null)
let error = ""

const emit = defineEmits(["update:modelValue"]);

const updateInput = (value: string) => {
  emit("update:modelValue", value);
};
const changeInputType = () => {
  input.value!.type = input.value!.type === "password" ? "text" : "password";
}

const validateInput = () => {
  if (!props.modelValue.trim()) {
    error =  "Input cannot be empty"
    // Clear the input value
    emit("update:modelValue", "");
  }
};
</script>

<style scoped></style>
