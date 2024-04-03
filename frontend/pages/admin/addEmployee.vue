<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <div class="container">
      <FormComponent @submit="handleFormSubmit">
        <fieldset>
          <h3 class="text-gray-primary text-center">Personal Details</h3>
          <div
            class="border-t border-white-primary grid md:grid-cols-2 py-2 md:gap-6"
          >
            <BaseInputComponent
              v-for="i in personalData"
              :eye="false"
              :inputType="i.type"
              :labelText="i.label"
              :placeholder="i.placeholder"
              v-model="i.value"
            />
            <BaseSelectOptionComponent
              labelText="Gender"
              placeholder="Select Gender"
              :options="genderOptions"
              v-model="gender"
            />
            <BaseSelectOptionComponent
              labelText="Marital Status"
              placeholder="Select Status"
              :options="maritalStatusOptions"
              v-model="maritalStatus"
            />
            <BaseSelectOptionComponent
              labelText="Highest Education"
              placeholder="Choose..."
              :options="educationOptions"
              v-model="highestEducation"
            />
          </div>
          <h3 class="text-gray-primary text-center">Work Details</h3>
          <div
            class="border-t border-b border-white-primary grid md:grid-cols-2 py-2 md:gap-6"
          >
            <BaseInputComponent
              :eye="false"
              inputType="text"
              labelText="Skills"
              placeholder="Skills separated by comma"
              v-model="skills"
            />
            <BaseInputComponent
              :eye="false"
              inputType="date"
              labelText="Date of Joining"
              v-model="dateOfJoining"
            />
            <BaseSelectOptionComponent
              labelText="Designation"
              placeholder="Choose..."
              v-model="designation"
              :options="designationOptions"
            />
          </div>
        </fieldset>
        <BaseButton class="red-button-2 block mx-auto"
          >Submit Details</BaseButton
        >
      </FormComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Input from "@/types/Input.ts";
import type Employee from "@/types/Employee.ts";
const loading = ref(true);
const toast = useToast();
definePageMeta({
  layout: "dashboard",
});
//lifecycle hooks
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
//employee's Reactive Data
const gender = ref("");
const maritalStatus = ref("");
const highestEducation = ref("");
const skills = ref("");
const dateOfJoining = ref("");
const designation = ref("");

//options
const genderOptions = ref<string[]>(["Male", "Female", "Others"]);
const maritalStatusOptions = ref<string[]>([
  "Single",
  "Married",
  "Divorced",
  "Widowed",
]);
const educationOptions = ref<string[]>([
  "High School",
  "Diploma",
  "Bachelors",
  "Masters",
  "PhD",
]);
const designationOptions = ref<string[]>(["None"])
//data
const personalData = ref<Input[]>([
  {
    label: "Employee ID",
    type: "number",
    placeholder: "Enter employee ID",
    value: "",
  },
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your full name",
    value: "",
  },
  {
    label: "Date of Birth",
    type: "date",
    value: "",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    value: "",
  },
  {
    label: "Phone Number",
    type: "number",
    placeholder: "Enter phone number",
    value: "",
  },
]);
//validation
import { required, minLength, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
const v$ = useVuelidate(
  {
    personalData: {
      required,
      // minLength: minLength(7),
      // Add other validators as needed
    },
    gender: { required },
    maritalStatus: { required },
    highestEducation: { required },
    skills: { required },
    dateOfJoining: { required },
    designation: { required },
  },
  {
    personalData,
    gender,
    maritalStatus,
    highestEducation,
    skills,
    dateOfJoining,
    designation,
  }
);

//reset form 
const resetForm = () => {
  personalData.value.forEach((input) => {
    input.value = "";
  });
  gender.value = "";
  maritalStatus.value = "";
  highestEducation.value = "";
  skills.value = "";
  dateOfJoining.value = "";
  designation.value = "";
};

//employee's Data object
const handleFormSubmit = () => {
  //validate the form
  v$.value.$touch();
  if (v$.value.$error) {
    // const allErrors = v$.value.$errors;
    // allErrors.forEach((error) => {
    //   console.log(`Field: ${error.$property}, Error: ${error.$message}`);
    // });
    toast.addToast("Please correct the errors in the form", "error");
    return;
  }
  //create employee object
  let employeeObject = ref<Employee>({});
  personalData.value.forEach((element) => {
    employeeObject[element.label.toLowerCase().replace(/\s/g, "_")] =
      element.value;
  });
  employeeObject["gender"] = gender.value;
  employeeObject["marital_status"] = maritalStatus.value;
  employeeObject["highest_education"] = highestEducation.value;
  employeeObject["skills"] = skills.value;
  employeeObject["data_of_joinng"] = dateOfJoining.value;
  employeeObject["designation"] = designation.value;
  console.log(employeeObject);
  toast.addToast("Employee successfully added", "success");
  resetForm();
};
</script>

<style scoped></style>
