<template>
  <div
    class="bg-blue-primary rounded-full w-20 h-20 p-4 flex justify-center items-center hover:scale-75 duration-100"
  >
    <img :src="avatarImage" alt="user-avatar" ref="avatar" class="w-full h-full rounded-full object-fit" />
  </div>
</template>

<script setup lang="ts">
import avatarImage from "../assets/user-avatar.png";
defineProps(["src"]);
const avatar = ref<HTMLImageElement | null>(null);
const employee = useEmployeeData();

onMounted(() => {
  if (employee.avatarSrc && avatar.value) {
    avatar.value.src = employee.avatarSrc;
  }
});

watch(
  () => employee.avatarSrc,
  (newAvatarSrc) => {
    if (newAvatarSrc && avatar.value) {
      avatar.value.src = newAvatarSrc;
    }
  }
);
</script>

<style scoped></style>
