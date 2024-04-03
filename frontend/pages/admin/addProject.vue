<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">Project Master</h1>
    <div
      class="container md:p-8"
    >
      <FormComponent class="grid md:grid-cols-2 gap-4">
        <BaseInputComponent
          v-for="input in inputs"
          :eye="false"
          :type="input.type"
          :labelText="input.label"
          :placeholder="input.placeholder"
        />
        <BaseButton class="red-button-2 w-fit max-w-[200px] block mx-auto"
          >Add Project</BaseButton
        >
      </FormComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
const inputs = ref<Input[]>([
  {
    label: "Project Id",
    placeholder: "Enter Project Id",
    type: "number",
    value: "",
  },
  {
    label: "Project Name",
    placeholder: "Enter project name",
    type: "text",
    value: "",
  },
  {
    label: "Project Domain",
    placeholder: "Enter Project Domain",
    type: "text",
    value: "",
  },
  {
    label: "Client Name",
    placeholder: "Enter Client Name",
    type: "number",
    value: "",
  },
  {
    label: "Project Manager",
    placeholder: "Enter Project Manager",
    type: "number",
    value: "",
  },
  {
    label: "Start Date",
    type: "date",
    value: "",
  },
  {
    label: "End Date",
    type: "date",
    value: "",
  },
]);
</script>

<style scoped></style>
