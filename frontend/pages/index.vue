<template>
  <div class="flex flex-col md:flex-row items-center justify-center md:justify-between w-full p-8 bg-blue-secondary h-screen font-poppins">
    <div class="flex items-center justify-center md:w-[50%] md:h-full">
      <img
        src="../assets/office-vector.png"
        alt="employee's-vector"
        class="w-full h-auto object-contain"
      />
    </div>
    <div class="md:w-1/2 w-full md:h-full mt-8 grid place-content-center">
      <h1 class="font-bold text-2xl text-center text-white-primary mb-8 uppercase">Ems Login</h1>
      <FormComponent @submit="handleSignIn" class="gap-10 w-[400px]">
        <BaseInputComponent
          type="email"
          placeholder="example@gmail.com"
          labelText="Email Address"
          v-model="email"
        />
        <BaseInputComponent
          :eye="true"
          type="password"
          placeholder="password"
          labelText="Password"
          v-model="password"
        />
        <div class="flex justify-center items-center">
          <BaseButton
            :disabled="true"
            class="red-button"
          >
            Sign In
          </BaseButton>
        </div>
      </FormComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref<string>("");
const password = ref<string>("");
const handleSignIn = () => {
    navigateTo("/dashboard/myprofile")
}
</script>

<style scoped></style>
