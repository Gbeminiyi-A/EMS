<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <div class="bg-blue-secondary w-[100%] lg:w-[900px] h-auto rounded-xl p-4">
      <div class="header space-y-6">
        <h3 class="text-gray-primary text-base font-bold">
          Filter by month and year
        </h3>
        <div class="flex flex-col md:flex-row gap-2 my-2">
          <BaseSelectOptionComponent
            labelText="Month"
            placeholder="Select Month"
            :options="monthOptions"
            v-model="month"
          />
          <BaseSelectOptionComponent
            labelText="Year"
            placeholder="Select Year"
            :options="yearOptions"
            v-model="year"
          />
          <BaseButton class="red-button-2">Filter</BaseButton>
        </div>
        <div class="flex flex-col md:flex-row w-1/2 items-center">
          <BaseInputComponent inputType="number" labelText="Variable Abount" />
          <BaseButton
            class="w-fit h-full p-2 rounded bg-red-primary hover:bg-red-secondary text-white-primary font-bold duration-100"
            >Update</BaseButton
          >
        </div>
      </div>

      <div class="mt-6">
        <AdminDataTable
          title="Salary Details Of All Employees"
          :buttonName="false"
          :showCheckBox="true"
          :status="false"
          :projectHeaders="salaryHeaders"
        />
      </div>
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
const month = ref("");
const year = ref("");
const monthOptions = ref([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
const yearOptions = ref(["2021", "2022", "2023", "2024", "2025"]);
const salaryHeaders = ref([
  "Emp. Id",
  "Emp. Name",
  "Basic",
  "HRA",
  "Add. Allwnce",
  "Variable",
  "Gross Earnings",
  "P. Tax",
  "PF Ded",
  "Medical EMI",
  "Income Tax",
  "Total Deductions",
  "Net Salary",
]);
</script>

<style scoped></style>
