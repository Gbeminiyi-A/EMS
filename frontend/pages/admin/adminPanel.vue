<template>
  <!-- modal -->
  <AdminModal
    v-show="showModal"
    @closeModal="showModal = false"
    title="Update User Details"
  >
    <template #body>
      <FormComponent class="grid grid-cols-2 gap-4">
        <BaseInputComponent
          v-for="obj in inputsData"
          :labelText="obj.label"
          :eye="false"
          :inputType="obj.type"
          :modelValue="obj.value"
        />
        <BaseButton class="red-button-2">Update</BaseButton>
      </FormComponent>
    </template>
  </AdminModal>
  <BaseButton class="red-button" @click="showModal = true">Test</BaseButton>
  <!-- end -->
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-4 font-poppins"
    v-else
  >
    <h1 class="headers">Admin Panel</h1>
    <div
      class="bg-blue-secondary w-full md:p-6 grid place-content-center rounded-xl"
    >
      <FormComponent class="grid grid-cols-2 p-6 gap-4 w-full md:w-5/6">
        <BaseInputComponent
          labelText="Email Id"
          placeholder="Enter email ID of User"
          :eye="false"
          inputType="number"
        />
        <BaseSelectOptionComponent
          labelText="Status"
          placeholder="Choose..."
          :options="statusOptions"
        />
        <BaseSelectOptionComponent
          labelText="Level"
          placeholder="Choose..."
          :options="statusOptions"
        />
        <BaseButton class="red-button-2">Submit</BaseButton>
      </FormComponent>
    </div>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-8">
      <AdminDataTable
        :projectHeaders="tableHeaders"
        title="List Of Users"
        status="Show All"
        buttonName="Update"
        :showCheckBox="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const showModal = ref(false);
definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
const levelOptions = ref(["Admin", "User"]);
const statusOptions = ref(["Approved", "Inactive"]);
const tableHeaders = ref(["Email", "User Status", "User Level", "Action"]);
const inputsData = ref([
  {
    label: "Email",
    type: "email",
    value: "ruru@gmail.com",
  },
  {
    label: "User status",
    type: "text",
    value: "approved",
  },
  {
    label: "User level",
    type: "text",
    value: "user",
  },
  {
    label: "Date Of Creation",
    type: "text",
    value: "2023-04-23",
  },
]);
</script>

<style scoped></style>
