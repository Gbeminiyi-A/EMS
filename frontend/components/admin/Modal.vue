<template>
  <Transition name="modal">
    <div class="modal bg-blue-primary md:w-[450px] md:h-[350px] p-3 rounded-lg">
      <h1 class="headers">View Employee Details</h1>
      <div class="border-t border-b border-white-primary h-[70%] my-3">
        <p>lmao</p>
      </div>
      <div class="flex justify-end">
        <BaseButton
          class="bg-blue-secondary text-white-primary p-2 rounded hover:bg-blue-primary duration-150"
          @click="closeModal"
          >Close</BaseButton
        >
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "closeModal"): void;
}>();
const closeModal = () => {
  emit("closeModal");
};
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease-in-out;
}
.modal {
  position: fixed;
  top: 5%;
  left: 40%;
  z-index: 1000;
}
</style>
