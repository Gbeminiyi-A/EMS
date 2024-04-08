<template>
  <Transition name="modal">
    <div
      class="modal bg-blue-primary md:w-[450px] md:min-h-[350px] p-3 rounded-lg"
    >
      <h1 class="headers">{{ title }}</h1>
      <div class="border-t border-b py-4 border-white-primary min-h-[70%] my-3">
        <slot name="body" />
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
defineProps<{
  title: string;
}>();
const closeModal = () => {
  emit("closeModal");
};
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
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
  top: 7%;
  left: 40%;
  z-index: 1000;
}
@media (max-width: 540px) {
  .modal {
    left: 10%;
  }
}
</style>
