<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">My Salary</h1>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <BaseSelectOptionComponent labelText="Select Month" />
        <BaseSelectOptionComponent labelText="Select Year" />
        <BaseButton
          class="min-w-fit max-w-[200px] h-[50px] bg-red-primary font-bold text-white-primary p-2 rounded-md hover:bg-red-secondary duration-150 shadow-md"
          >Submit</BaseButton
        >
      </div>
      <BaseButton class="red-button-2">Print Payslip</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style scoped></style>
