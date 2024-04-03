<template>
  <div
    v-for="data in employerDetails"
    class="bg-blue-secondary shadow shadow-blue-secondary rounded flex justify-between p-2"
  >
    <Icon :name="data.iconName" color="red" size="32px" />
    <div class="">
      <h3 class="text-md text-gray-primary">{{ data.title }}</h3>
      <p class="text-white-primary text-sm">{{ data.data }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  employerDetails: Array;
}>();
</script>

<style scoped></style>
