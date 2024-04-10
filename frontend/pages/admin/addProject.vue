<template>
  <AppPreLoader v-if="loading" />
  <div
    class="flex flex-col justify-center items-center gap-2 font-poppins"
    v-else
  >
    <h1 class="headers">Project Master</h1>
    <div class="container md:p-8">
      <FormComponent class="grid md:grid-cols-2 gap-4">
        <BaseInputComponent
          v-for="input in projectInputs"
          :eye="false"
          :type="input.type"
          :labelText="input.label"
          :placeholder="input.placeholder"
          v-model.trim="input.value"
        />
        <BaseSelectOptionComponent
          labelText="Assigned Employee"
          placeholder="Choose an employee"
          :options="employeesId"
          @update:modelValue="handleEmployeeSelection"
        />
        <div>
          <label for="" class="label">Project Description</label>
          <textarea
            required
            class="rounded-lg outline-none p-3 w-full"
            v-model.trim="projectDescription"
            cols="30"
            rows="3"
          ></textarea>
        </div>
      </FormComponent>
      <div class="w-full">
        <BaseButton
          :disabled="isSubmitting"
          class="red-button-2 w-fit max-w-[200px] mx-auto block"
          @click="addProject"
        >
          <img
            v-if="isSubmitting"
            src="../../assets/ring-spinner.gif"
            alt="ring-spinner"
            class="w-6 inline"
          />
          <span v-if="isSubmitting">Adding</span>
          <span v-else>Add Project</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const isSubmitting = ref(false);
const employer = useEmployer();

const { createProject } = useProjects();
const { resetForm } = useResetForm();
definePageMeta({
  layout: "dashboard",
});
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

const projectDescription = ref("");
let assignedEmployee = ref([]);
//setting up event for assigned Employees
const handleEmployeeSelection = (selectedOption: string) => {
  if (!assignedEmployee.value.includes(selectedOption)) {
    assignedEmployee.value.push(selectedOption);
  }
};
const projectInputs = ref<Input[]>([
  {
    label: "Project Id",
    placeholder: "Enter Project Id",
    type: "number",
    value: "",
  },
  {
    label: "Project Name",
    placeholder: "Enter project name",
    type: "text",
    value: "",
  },
  {
    label: "Project Domain",
    placeholder: "Enter Project Domain",
    type: "text",
    value: "",
  },
  {
    label: "Project Role",
    placeholder: "Enter Project Role",
    type: "text",
    value: "",
  },
  {
    label: "Client Name",
    placeholder: "Enter Client Name",
    type: "text",
    value: "",
  },
  {
    label: "Project Manager",
    placeholder: "Enter Project Manager",
    type: "text",
    value: "",
  },
  {
    label: "Budget",
    type: "number",
    value: "",
  },
  {
    label: "Required Resources",
    placeholder: "Enter data's separeted by commas",
    type: "text",
    value: "",
  },
  {
    label: "Start Date",
    type: "date",
    value: "",
  },
  {
    label: "End Date",
    type: "date",
    value: "",
  },
]);
//mutated employees data to get names only
const employeesId = computed(() => {
  return employer.employees.map((array) => {
    return parseInt(array.id);
  });
});
//function to handleSubmit
const addProject = async () => {
  let projectObject = ref<Project>({});
  isSubmitting.value = true;
  projectInputs.value.forEach((element) => {
    projectObject.value[element.label.toLowerCase().replace(/\s/g, "_")] =
      element.value;
  });
  projectObject.value["project_description"] = projectDescription.value;
  projectObject.value["assigned_employee"] = assignedEmployee.value;
  await createProject(toRaw(projectObject.value));
  // resetForm(projectObject.value);
  isSubmitting.value = false;
};
</script>

<style scoped></style>
