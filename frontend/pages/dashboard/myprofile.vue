<template>
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
  >
    <h1 class="text-white font-bold text-2xl">Employee Profile</h1>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-4">
      <div class="bg-blue-primary rounded-full w-20 h-20 p-4">
        <img :src="useAvatar" alt="user-avatar" />
      </div>
      <p class="text-white-primary text-sm">Select Image</p>
      <BaseInputComponent
        :eye="false"
        type="file"
        class="text-white-primary outline-2 border-blue-secondary"
        v-model="file"
      />
      <BaseButton
        class="red-button"
        @click="handleUploadImage"
        >Upload</BaseButton
      >
      <div class="grid grid-cols-2 mt-6">
        <div v-for="data in employeeData" :key="data">
          <div class="text-center">
            <h3 class="text-white-primary setLabel">{{ data.title }}</h3>
            <p class="text-gray-500">{{ data.data }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAvatar from "../../assets/user-avatar.png";
definePageMeta({
  layout: "dashboard",
});
const file = ref("");
const handleUploadImage = () => {};
const employeeData = ref([
  {
    title: "Employee ID",
    data: 1007,
  },
  {
    title: "Employee Name",
    data: "SK Verma",
  },
  {
    title: "Gender",
    data: "Male",
  },
  {
    title: "Marital Status",
    data: "Single",
  },
  {
    title: "Date of joining",
    data: "2024-01-04",
  },
  {
    title: "Highest Education",
    data: "MSc",
  },
  {
    title: "Skills",
    data: "Python, MySql, Flask, Vuejs",
  },
]);
</script>

<style scoped>
.setLabel:after {
  content:" *";
  color: red;
}
</style>
