<template>
  <div>
    <TheSideBar />
    <div class="p-4 sm:ml-64 bg-black">
      <div
        class="p-4 min-h-[100%] rounded-lg dark:border-gray-700 mt-14"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
