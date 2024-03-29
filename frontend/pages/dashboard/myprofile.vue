<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">Employee Profile</h1>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-4">
      <UserAvatar />
      <p class="text-white-primary text-sm">Select Image(.jpg, .jpeg, .png)</p>
      <BaseInputComponent
        :eye="false"
        type="file"
        class="text-white-primary outline-2 border-blue-secondary"
        ref="file"
        accept=".png, .jpg, .jpeg"
        @change="handleFileChange"
      />
      <BaseButton class="red-button" @click="handleUploadImage"
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
definePageMeta({
  layout: "dashboard",
});
const employee = useEmployeeData();
const toast = useToast();
const avatar = ref<HTMLImageElement | null>(null);
const file = ref(null);
const loading = ref(true);

const handleFileChange = (event: Event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
  }
};

const handleUploadImage = () => {
  if (file.value) {
    const reader = new FileReader();
    reader.onload = () => {
      // Update the user's avatar
      employee.avatarSrc = reader.result;
      //change src of img tag
      if (avatar.value) {
        avatar.value.src = employee.avatarSrc;
      }
    };
    reader.readAsDataURL(file.value);
  }
  toast.addToast("Success", "success");
};
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

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style scoped>
.setLabel:after {
  content: " *";
  color: red;
}
</style>
