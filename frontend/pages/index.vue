<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center md:justify-between min-w-full p-8 bg-blue-secondary h-screen font-poppins"
  >
    <div class="flex items-center justify-center md:w-[50%] md:h-full">
      <img
        src="../assets/office-vector.png"
        alt="employee's-vector"
        class="w-full h-auto object-contain"
      />
    </div>
    <div class="md:w-1/2 w-full md:h-full mt-8 grid place-content-center">
      <h1
        class="font-bold text-2xl text-center text-white-primary mb-8 uppercase"
      >
        Ems Login
      </h1>
      <FormComponent @submit="handleSignIn">
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
          <BaseButton :disabled="true" class="red-button"> Sign In </BaseButton>
        </div>
        <div
          class="border-2 border-white-primary min-w-full relative mt-10 rounded-2xl"
        >
          <div
            class="text-white-primary p-2 bg-blue-secondary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <a href="#" class="hover:text-red-primary duration-200"
              >Forget Password?</a
            >
          </div>
        </div>
      </FormComponent>
    </div>
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
