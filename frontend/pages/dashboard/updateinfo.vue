<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <SuccessToast v-show="runToast" @closeModal="runToast = false" />
    <h1 class="headers">Employee Profile</h1>
    <div class="container">
      <div
        class="flex justify-center md:justify-start items-center w-full px-6"
      >
        <UserAvatar />
      </div>
      <FormComponent @submit="">
        <fieldset class="md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseInputComponent
            :eye="false"
            inputType="number"
            labelText="Employee ID"
            placeholder="Enter employee ID"
          />
          <BaseInputComponent
            :eye="false"
            inputType="text"
            labelText="Employee First Name"
            placeholder="First Name"
          />
          <BaseInputComponent
            :eye="false"
            inputType="text"
            labelText="Employee Last Name"
            placeholder="Last Name"
          />
          <BaseSelectOptionComponent labelText="Gender" placeholder="Select Gender"/>
          <BaseSelectOptionComponent labelText="Marital Status" placeholder="Select Status"/>
          <BaseSelectOptionComponent labelText="Higher Education" placeholder="Choose..." />
          <BaseInputComponent
            :eye="false"
            inputType="date"
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
