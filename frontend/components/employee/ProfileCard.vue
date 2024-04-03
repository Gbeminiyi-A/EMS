<template>
  <div v-for="data in employeeData" :key="data">
    <div class="text-center">
      <h3 class="text-white-primary setLabel">{{ data.title }}</h3>
      <p class="text-gray-secondary">{{ data.data }}</p>
    </div>
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
</style>
