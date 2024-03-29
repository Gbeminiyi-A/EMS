<template>
  <div>
    <TheSideBar />
    <div class="p-4 sm:ml-64 bg-black">
      <div class="p-4 min-h-[100vh] rounded-lg dark:border-gray-700 mt-14">
        <TheToast v-if="toast.showToast" @close="toast.showToast = false" />
        <div>
          <AppPreLoader v-if="loading" />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast();
</script>

<style scoped></style>
