<template>
  <div>
    <h1>An error occurred</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<style scoped></style>
