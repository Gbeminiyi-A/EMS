<template>
  <div class="grid grid-cols-2 gap-8" v-if="currentEmployee">
    <div>
      <h4>Employee Id</h4>
      <p>{{ currentEmployee.id }}</p>
    </div>
    <div>
      <h4>Employee Name</h4>
      <p>{{ currentEmployee.name }}</p>
    </div>
    <div>
      <h4>Gender</h4>
      <p>{{ currentEmployee.gender }}</p>
    </div>
    <div>
      <h4>Marital Status</h4>
      <p>{{ currentEmployee.marital_status }}</p>
    </div>
    <div>
      <h4>Highest Education</h4>
      <p>{{ currentEmployee.highest_education }}</p>
    </div>
    <div>
      <h4>Skills</h4>
      <p>{{ currentEmployee.skills }}</p>
    </div>
    <div>
      <h4>Email</h4>
      <p>{{ currentEmployee.email }}</p>
    </div>
    <div>
      <h4>Date Joined</h4>
      <p>{{ currentEmployee.date_joined }}</p>
    </div>
    <div>
      <h4>Phone number</h4>
      <p>{{ currentEmployee.phone_number }}</p>
    </div>
    <div>
      <h4>Designation</h4>
      <p>{{ currentEmployee.designation }}</p>
    </div>
  </div>
  <div v-else>
    <h4 class="text-xl">No data found</h4>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentEmployeeId: any;
}>();
const currentEmployee = ref<Employee | null>(null);
const employer = useEmployer();
watch(
  () => props.currentEmployeeId,
  (newId) => {
    currentEmployee.value = employer.employees.find(
      (employee) => employee.id == newId
    );
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
