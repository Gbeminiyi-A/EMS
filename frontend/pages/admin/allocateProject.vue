<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">Project Allocation</h1>
    <div v-if="!currentEmployee"
      class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-8 grid gap-4 md:grid-cols-2 place-content-between"
    >
      <BaseInputComponent
        :eye="false"
        labelText="Employee Id"
        inputType="number"
        placeholder="Enter Employee Id"
        v-model="employeeId"
      />
      <div class="p-4 md:p-0">
        <label class="label">Get Data</label>
        <BaseButton
          @click="fetchDetails(employeeId)"
          class="bg-red-primary font-bold text-white-primary p-3 rounded-md w-full hover:bg-red-secondary duration-150 shadow-md"
          >Fetch Details</BaseButton
        >
      </div>
    </div>
    <div
      class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-8 block"
      v-if="currentEmployee"
    >
      <div class="grid grid-cols-3 gap-6">
        <EmployeeProfileCard :employeeData="currentEmployee" />
      </div>

      <div class="grid md:grid-cols-2 place-content-center my-8 gap-8">
        <BaseSelectOptionComponent
          labelText="Project Allocate"
          placeholder="Choose Project"
        />
        <BaseInputComponent
          :eye="false"
          inputType="text"
          labelText="Role"
          placeholder="Enter Role In the Project"
        />
      </div>
      <BaseInputComponent
        :eye="false"
        inputType="date"
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
let currentEmployee = ref(null);
const employeeId = ref("");
const employer = useEmployer();
//functions
const fetchDetails = (id: string) => {
  currentEmployee.value = employer.employees.find(
    (employee) => employee.id == id
  );
  console.log(currentEmployee.value);
};

//page meta
definePageMeta({
  layout: "dashboard",
});
//lifecycle hooks
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style scoped></style>
