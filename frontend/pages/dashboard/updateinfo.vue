<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <ModalToast v-if="runToast" @closeModal="runToast = false" />
    <h1 class="headers">Employee Profile</h1>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-4">
      <div
        class="flex justify-center md:justify-start items-center w-full px-6"
      >
        <UserAvatar />
      </div>
      <FormComponent @submit="">
        <fieldset class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseInputComponent
            :eye="false"
            type="number"
            labelText="Employee ID"
          />
          <BaseInputComponent
            :eye="false"
            type="text"
            labelText="Employee First Name"
          />
          <BaseInputComponent
            :eye="false"
            type="text"
            labelText="Employee Last Name"
          />
          <BaseSelectOptionComponent labelText="Gender" />
          <BaseSelectOptionComponent labelText="Marital Status" />
          <BaseSelectOptionComponent labelText="Higher Education" />
          <BaseInputComponent
            :eye="false"
            type="date"
            labelText="Date of joining"
          />
        </fieldset>
      </FormComponent>
      <div class="flex justify-center">
        <BaseButton class="red-button" @click="updateEmployeeInfo"
          >Update</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const runToast = ref(false);

definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

const updateEmployeeInfo = () => {
  runToast.value = true;
};
</script>

<style scoped></style>
