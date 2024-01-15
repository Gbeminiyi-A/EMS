<template>
  <div class="flex flex-col justify-center items-center gap-2 font-poppins">
    <h1 class="text-white font-bold text-2xl">Employee Profile</h1>
    <div class="bg-blue-secondary w-[100%] lg:w-[700px] h-auto rounded-xl p-4">
      <FormComponent @submit="">
        <fieldset class="p-4 grid grid-cols-2 gap-4">
          <BaseInputComponent
            :eye="false"
            type="number"
            labelText="Employee ID"
          />
          <BaseInputComponent
            :eye="false"
            type="text"
            labelText="Employee First Name"
          />
          <BaseInputComponent
            :eye="false"
            type="text"
            labelText="Employee Last Name"
          />
          <BaseSelectOptionComponent labelText="Gender" />
          <BaseSelectOptionComponent labelText="Marital Status" />
          <BaseSelectOptionComponent labelText="Higher Education" />
          <BaseInputComponent
            :eye="false"
            type="date"
            labelText="Date of joining"
          />
        </fieldset>
        <div class="flex justify-center">
          <BaseButton class="red-button">Update</BaseButton>
        </div>
      </FormComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped></style>
