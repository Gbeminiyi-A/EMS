<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">My Salary</h1>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-4">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <BaseSelectOptionComponent labelText="Select Month" />
        <BaseSelectOptionComponent labelText="Select Year" />
        <BaseButton
          class="bg-red-primary font-bold text-white p-3 rounded-md md:leading-[2rem] hover:bg-red-500 duration-150 shadow-md"
          >Submit</BaseButton
        >
      </div>
      <BaseButton
        class="bg-red-primary font-bold text-white p-3 rounded-md w-full mt-2 hover:bg-red-500 duration-150 shadow-md"
        >Print Payslip</BaseButton
      >
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
