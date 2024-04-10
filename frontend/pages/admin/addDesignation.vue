<template>
  <AdminUpdateDesignation
    v-if="updateDesignation"
    :inputsData="inputsData"
    @closeModal="updateDesignation = false"
  />
  <BaseButton @click="updateDesignation = true" class="red-button-2"
    >Update</BaseButton
  >
  <div class="flex flex-col justify-center items-center gap-2 font-poppins">
    <h1 class="headers">Designation Master</h1>
    <div
      class="container md:p-8"
    >
      <FormComponent @submit="">
        <fieldset class="grid gap-4 md:grid-cols-2 place-content-between">
          <BaseSelectOptionComponent
            labelText="Designation"
            placeholder="Choose..."
          />
          <BaseSelectOptionComponent
            labelText="Pay Band"
            placeholder="Choose..."
          />
          <BaseInputComponent
            v-for="i in inputsData"
            :eye="false"
            :inputType="i.type"
            :labelText="i.label"
            :placeholder="i.placeholder"
          />
        </fieldset>
        <BaseButton class="block m-auto red-button-2 w-fit max-w-[250px]"
          >Add Designation</BaseButton
        >
      </FormComponent>
    </div>
    <div class="bg-blue-secondary p-4 rounded-xl w-full">
      <AdminDataTable
        title="List Of Designation"
        status="Show All"
        :projectHeaders="projectHeaders"
        buttonName="Update"
        :showCheckBox="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type Input from "@/types";
definePageMeta({
  layout: "dashboard",
});
const updateDesignation = ref(false);
//data for BasicInputComponents
const inputsData = ref<Input[]>([
  {
    label: "Basic Salary",
    placeholder: "Enter Basic Salary",
    type: "number",
    value: "",
  },
  {
    label: "HRA Allowance",
    placeholder: "Enter HRA Allowance",
    type: "number",
    value: "",
  },
  {
    label: "Additional Allowance",
    placeholder: "Enter Additional Allowance",
    type: "number",
    value: "",
  },
  {
    label: "Misc Allowance",
    placeholder: "Enter Misc Allowance",
    type: "number",
    value: "",
  },
  {
    label: "PF Deduction",
    placeholder: "Enter PF Deduction",
    type: "number",
    value: "",
  },
  {
    label: "Professional Tax",
    placeholder: "Enter Professional Tax",
    type: "number",
    value: "",
  },
  {
    label: "Income Tax",
    placeholder: "Enter Income Tax",
    type: "number",
    value: "",
  },
  {
    label: "Medical Premium",
    placeholder: "Enter Medical EMI",
    type: "number",
    value: "",
  },
]);
//header title for table
const projectHeaders = ref<string[]>([
  "Designation",
  "Pay Band",
  "Basic",
  "HRA",
  "Misc",
  "PF Ded.",
  "Prof. Tax",
  "Med. Premium",
  "Action",
]);
</script>

<style scoped></style>
