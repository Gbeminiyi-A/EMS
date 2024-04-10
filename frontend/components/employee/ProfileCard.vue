<template>
  <div>
    <h4>Employee Id</h4>
    <p>{{ employeeData.id }}</p>
  </div>
  <div>
    <h4>Employee Name</h4>
    <p>{{ employeeData.name }}</p>
  </div>
  <div>
    <h4>Gender</h4>
    <p>{{ employeeData.gender }}</p>
  </div>
  <div>
    <h4>Highest Education</h4>
    <p>{{ employeeData.highest_education }}</p>
  </div>
  <div>
    <h4>Skills</h4>
    <p>{{ employeeData.skills }}</p>
  </div>
  <div>
    <h4>Date Joined</h4>
    <p>{{ employeeData.date_joined }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  employeeData: Array;
}>();
</script>

<style scoped>
.setLabel:after {
  content: " *";
  color: red;
}

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
