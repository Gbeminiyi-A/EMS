<template>
  <div v-if="currentData && data" class="w-full p-4">
    <div v-if="'id' in data" class="grid grid-cols-2 gap-4">
      <div>
        <h4>Employee Id</h4>
        <p>{{ data.id }}</p>
      </div>
      <div>
        <h4>Employee Name</h4>
        <p>{{ data.name }}</p>
      </div>
      <div>
        <h4>Gender</h4>
        <p>{{ data.gender }}</p>
      </div>
      <div>
        <h4>Marital Status</h4>
        <p>{{ data.marital_status }}</p>
      </div>
      <div>
        <h4>Highest Education</h4>
        <p>{{ data.highest_education }}</p>
      </div>
      <div>
        <h4>Skills</h4>
        <p>{{ data.skills }}</p>
      </div>
      <div>
        <h4>Email</h4>
        <p>{{ data.email }}</p>
      </div>
      <div>
        <h4>Date Joined</h4>
        <p>{{ data.date_joined }}</p>
      </div>
      <div>
        <h4>Phone number</h4>
        <p>{{ data.phone_number }}</p>
      </div>
      <div>
        <h4>Designation</h4>
        <p>{{ data.designation }}</p>
      </div>
    </div>
    <div v-else-if="'project_id' in data" class="grid grid-cols-2 gap-8">
      <div>
        <h4>Project Id</h4>
        <p>{{ data.project_id }}</p>
      </div>
      <div>
        <h4>Project Name</h4>
        <p>{{ data.project_name }}</p>
      </div>
      <div>
        <h4>Project Domain</h4>
        <p>{{ data.project_domain }}</p>
      </div>
      <div>
        <h4>Project Description</h4>
        <p>{{ data.project_description }}</p>
      </div>
      <div>
        <h4>Client Name</h4>
        <p>{{ data.client_name }}</p>
      </div>
      <div>
        <h4>Project Manager</h4>
        <p>{{ data.project_manager }}</p>
      </div>
      <div>
        <h4>Required</h4>
        <p>{{ data.required_resources }}</p>
      </div>
      <div>
        <h4>Budget</h4>
        <p>{{ data.budget }}</p>
      </div>
      <div>
        <h4>Project Start</h4>
        <p>{{ data.start_date }}</p>
      </div>
      <div>
        <h4>Project End</h4>
        <p>{{ data.end_date }}</p>
      </div>
    </div>
    <div v-else>
      <h4 class="text-xl">No data found</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentData: any;
}>();
const data = ref<Employee | Project | null>(null);
const employer = useEmployer();
const companyProjects = useCompanyProjects();
watch(
  () => props.currentData,
  (newData) => {
    if ("project_id" in newData) {
      data.value = companyProjects.projects.find(
        (project) => project.project_id == newData.project_id
      );
    } else if ("id" in newData) {
      data.value = employer.employees.find(
        (employee) => employee.id == newData.id
      );
    }
  }
);
</script>

<style scoped>
h4 {
  color: grey;
  font-size: 1rem;
  font-weight: 600;
  white-space: no-wrap;
}
p {
  color: #eee;
}
h4:after {
  content: " *";
  color: red;
  white-space: nowrap;
}
</style>
