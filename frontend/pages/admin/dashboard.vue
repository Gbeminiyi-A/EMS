<template>
  <!-- showing view of recent employee -->
  <AdminModal
    v-show="showModal"
    @closeModal="showModal = false"
    title="View Employee Details"
  >
    <template #body>
      <AdminViewContent
        :currentEmployeeId="currentEmployeeId"
        v-if="currentEmployeeId"
      />
    </template>
  </AdminModal>
  <!-- end -->

  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-4 font-poppins"
    v-else
  >
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
        :datas="employees"
        @showDetails="passEmployeeData"
        v-if="employees"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const showModal = ref(false);
const toast = useToast();
const currentEmployeeId = ref(null);

const { getEmployees } = useEmployee();
const { employees } = storeToRefs(useEmployer());

//page meta
definePageMeta({
  layout: "dashboard",
});
//functions
const passEmployeeData = (data: any) => {
  showModal.value = true;
  currentEmployeeId.value = data;
  console.log(currentEmployeeId.value);
};
//datas
const employerDetails = ref([
  {
    title: "Total Employees",
    data: employees.value.length,
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
    data: `₦${9000 * employees.value.length}`,
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
  "Skills",
  "Doj",
  "View",
]);
//lifecycle hooks
onMounted(async () => {
  await getEmployees();
  loading.value = false;
});
</script>

<style scoped></style>
