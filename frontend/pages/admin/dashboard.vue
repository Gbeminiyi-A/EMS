<template>
  <AdminModal v-show="showModal" @closeModal="showModal = false" />
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-4 font-poppins"
    v-else
  >
    <button @click="showModal = !showModal" class="red-button">Test</button>

    <div class="grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
      <AdminCompanyData :employerDetails="employerDetails" />
    </div>
    <div class="bg-blue-secondary w-full p-3 rounded">
      <AdminDataTable
        :projectHeaders="recentProjectHeaders"
        title="Recent Projects"
        status="Show all"
        buttonName="View"
        :showCheckBox="true"
      />
    </div>
    <div class="bg-blue-secondary w-full p-3 rounded">
      <AdminDataTable
        :projectHeaders="recentEmployeesHeaders"
        title="Recent Joined Employees"
        status="Show all"
        buttonName="View"
        :showCheckBox="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const showModal = ref(false);
definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
const employerDetails = ref([
  {
    title: "Total Employees",
    data: 100,
    iconName: "clarity:employee-group-solid",
  },
  {
    title: "Attrition Rate",
    data: "10%",
    iconName: "uil:monitor-heart-rate",
  },
  {
    title: "Total Projects",
    data: 3,
    iconName: "carbon:ibm-cloud-projects",
  },
  {
    title: "Total Revenue",
    data: "$42000",
    iconName: "clarity:employee-group-solid",
  },
]);

const recentProjectHeaders = ref<string[]>([
  "ProjectId",
  "Project Name",
  "Domain",
  "Client",
  "From",
  "To",
  "View Details",
]);
const recentEmployeesHeaders = ref<string[]>([
  "Employee ID",
  "Employee Name",
  "Designation",
  "Experience",
  "Skills",
  "Doj",
  "View Details",
]);
</script>

<style scoped></style>
