<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">Project Allocation</h1>
    <div
      class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-8 grid gap-4 md:grid-cols-2 place-content-between"
    >
      <BaseInputComponent
        :eye="false"
        labelText="Employee Id"
        type="number"
        placeholder="Enter Employee Id"
      />
      <div class="p-4 md:p-0">
        <label class="label">Get Data</label>
        <BaseButton
          class="bg-red-primary font-bold text-white-primary p-3 rounded-md w-full hover:bg-red-secondary duration-150 shadow-md"
          >Fetch Details</BaseButton
        >
      </div>
    </div>
    <div
      class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-8 block"
    >
      <div class="grid grid-cols-2">
        <EmployeeProfileCard :employeeData="employeeData" />
      </div>

      <div class="grid md:grid-cols-2 place-content-center">
        <BaseSelectOptionComponent
          labelText="Project Allocate"
          placeholder="Choose Project"
        />
        <BaseInputComponent
          :eye="false"
          type="text"
          labelText="Role"
          placeholder="Enter Role In the Project"
        />
      </div>
      <BaseInputComponent
        :eye="false"
        type="date"
        labelText="Date Of Allocation"
      />
      <div class="block w-full">
        <BaseButton class="red-button-2 mx-auto block"
          >Submit Details</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
definePageMeta({
  layout: "dashboard",
});
const employeeData = ref([
  {
    title: "Employee ID",
    data: 1007,
  },
  {
    title: "Employee Name",
    data: "SK Verma",
  },
  {
    title: "Gender",
    data: "Male",
  },
  {
    title: "Marital Status",
    data: "Single",
  },
  {
    title: "Date of joining",
    data: "2024-01-04",
  },
  {
    title: "Highest Education",
    data: "MSc",
  },
  {
    title: "Skills",
    data: "Python, MySql, Flask, Vuejs",
  },
]);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style scoped></style>
