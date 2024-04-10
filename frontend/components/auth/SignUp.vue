<template>
  <BaseInputComponent type="text" placeholder="johndoe" labelText="Username" />
  <BaseInputComponent
    type="email"
    placeholder="example@gmail.com"
    labelText="Email Address"
  />
  <BaseInputComponent
    :eye="true"
    type="password"
    placeholder="password"
    labelText="Password"
  />
  <div class="flex justify-center items-center mt-6">
    <BaseButton :disabled="true" class="red-button"> Sign Up </BaseButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
