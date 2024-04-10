<template>
  <!-- showing view of recent employee -->
  <AdminModal
    v-show="showModal"
    @closeModal="showModal = false"
    :title="modalTitle"
  >
    <template #body>
      <AdminViewContent :currentData="currentData" v-if="currentData" />
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
        :datas="companyProjects.projects"
        :keysToInclude="keysToIncludeForProjects"
        v-if="companyProjects.projects"
        @showDetails="passProjectData"
      />
    </div>
    <div class="bg-blue-secondary w-full p-3 rounded">
      <AdminDataTable
        :projectHeaders="recentEmployeesHeaders"
        title="Recent Joined Employees"
        status="Show all"
        buttonName="View"
        :showCheckBox="true"
        :datas="employer.employees"
        :keysToInclude="keysToIncludeForEmployees"
        @showDetails="passEmployeeData"
        v-if="employer.employees"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const showModal = ref(false);
const toast = useToast();
const currentData = ref(null);
const modalTitle = ref("");

const { getEmployees } = useEmployee();
const { getProjects } = useProjects();
const employer = useEmployer();
const companyProjects = useCompanyProjects();

//page meta
definePageMeta({
  layout: "dashboard",
});
//functions
const updateModal = (title: string, data: any) => {
  showModal.value = true;
  modalTitle.value = title;
  currentData.value = data;
};
const passEmployeeData = (data: any) => {
  updateModal("View Employee Details", data);
};
const passProjectData = (data: any) => {
  updateModal("View Project Details", data);
};
//datas
const employerDetails = computed(() => [
  {
    title: "Total Employees",
    data: employer.employees.length,
    iconName: "clarity:employee-group-solid",
  },
  {
    title: "Attrition Rate",
    data: "10%",
    iconName: "uil:monitor-heart-rate",
  },
  {
    title: "Total Projects",
    data: companyProjects.projects.length,
    iconName: "carbon:ibm-cloud-projects",
  },
  {
    title: "Total Revenue",
    data: `₦${6578 * employer.employees.length}`,
    iconName: "clarity:employee-group-solid",
  },
]);

const keysToIncludeForEmployees = ref([
  "id",
  "name",
  "designation",
  "skills",
  "date_joined",
]);
const keysToIncludeForProjects = ref([
  "project_id",
  "project_name",
  "project_domain",
  "client_name",
  "start_date",
  "end_date",
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
  await getProjects();
  loading.value = false;
});
</script>

<style scoped></style>
