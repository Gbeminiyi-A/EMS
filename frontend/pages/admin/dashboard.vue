<template>
  <div class="flex flex-col justify-center items-center gap-2 font-poppins">
    <div class="flex justify-between items-center w-full gap-4">
      <AdminCompanyData :employerDetails="employerDetails" />
    </div>
    <div class="bg-blue-secondary w-full p-3 rounded">
      <div class="flex justify-between w-full items-center font-semibold">
        <h3 class="text-white text-md mb-4">Recent Projects</h3>
        <p class="text-red-primary">Show all</p>
      </div>
      <table class="border-collapse">
        <tr class="border">
          <th class="border">
            <BaseInputComponent
              :eye="false"
              type="checkbox"
              class="w-4 bg-black rounded-none"
            />
          </th>
          <th
            v-for="title in recentProjectHeaders"
            class="text-white border font-normal text-md"
          >
            {{ title }}
          </th>
        </tr>
        <tr class="border text-center" v-for="i in 3">
          <td class="border">
            <BaseInputComponent
              :eye="false"
              type="checkbox"
              class="w-4 bg-black rounded-none"
            />
          </td>
          <td v-for="i in 6" class="border text-gray-500">
            Alfreds Futterkiste
          </td>
          <td class="border">
            <BaseButton
              class="bg-red-primary text-white p-1 rounded hover:bg-red-500 duration-150"
              >View</BaseButton
            >
          </td>
        </tr>
      </table>
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
const employerDetails = ref([
  {
    title: "Total Employees",
    data: 100,
    iconName: "clarity:employee-group-solid",
  },
  {
    title: "Attrition Rate",
    data: "10%",
    iconName: "uil:monitor-heart-rate",
  },
  {
    title: "Total Projects",
    data: 3,
    iconName: "carbon:ibm-cloud-projects",
  },
  {
    title: "Total Revenue",
    data: "$42000",
    iconName: "clarity:employee-group-solid",
  },
]);

const recentProjectHeaders = ref<string[]>([
  "ProjectId",
  "Project Name",
  "Domain",
  "Client",
  "From",
  "To",
  "View Details",
]);
</script>

<style scoped>
th,
td {
  border-color: #000;
}
[type="checkbox"]:checked {
  background-color: red;
}
</style>
