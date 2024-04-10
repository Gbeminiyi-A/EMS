<template>
  <BaseInputComponent
    type="email"
    placeholder="example@gmail.com"
    labelText="Email Address"
    v-model="employeeData.email"
  />
  <BaseInputComponent
    :eye="true"
    type="password"
    placeholder="password"
    labelText="Password"
    v-model="password"
  />
  <div class="flex justify-center items-center mt-6">
    <BaseButton :disabled="true" class="red-button" @click="handleSignIn">
      Log In
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const employeeData = useEmployeeData();
const password = ref<string>("");
const handleSignIn = () => {
  if (!employeeData.isAdmin) {
    navigateTo("/dashboard/myprofile");
    return;
  }
  navigateTo("/admin/dashboard");
};
</script>

<style scoped></style>
