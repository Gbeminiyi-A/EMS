<template>
  <div
    v-for="data in employerDetails"
    class="bg-blue-secondary shadow shadow-blue-secondary w-1/4 rounded flex justify-between h-[25%] p-2"
  >
    <Icon :name="data.iconName" color="red" size="48px" />
    <div class="">
      <h3 class="text-md text-gray-500">{{ data.title }}</h3>
      <p class="text-white text-sm">{{ data.data }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  employerDetails: Array;
}>();
</script>

<style scoped></style>
