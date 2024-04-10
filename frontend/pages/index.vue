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
        Employee management system
      </h1>
      <FormComponent>
        <component :is="selectedComponent" />
        <div>
          <p
            class="text-white-primary text-center mt-4"
            v-if="selectedComponent === AuthLogIn"
          >
            Don't have an account?
            <span
              @click="selectedComponent = AuthSignUp"
              class="hover:text-red-primary duration-200 cursor-pointer"
              >Sign Up</span
            >
          </p>
          <p class="text-white-primary text-center mt-4" v-else>
            Already an admin?
            <span
              @click="selectedComponent = AuthLogIn"
              class="hover:text-red-primary duration-200 cursor-pointer"
              >Log In</span
            >
          </p>
        </div>
        <div
          class="border border-white-primary min-w-full relative mt-8 rounded-2xl"
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
import AuthLogIn from "../components/auth/Login.vue";
import AuthSignUp from "../components/auth/SignUp.vue";
const selectedComponent = shallowRef(AuthLogIn);
</script>

<style scoped></style>
