<template>
  <div>
    <Teleport to="body">
      <div class="overlay p-4 md:p-0">
        <Transition name="modal">
          <div class="bg-white-primary p-4 rounded-lg w-full md:w-[500px]">
            <div
              class="bg-blue-secondary p-4 rounded-lg w-full grid md:grid-cols-2 gap-4"
            >
              <BaseInputComponent
                :eye="false"
                labelText="Designation"
                inputType="text"
                class="text-gray-300"
              />
              <BaseSelectOptionComponent
                labelText="Pay Band"
                placeholder="Choose..."
                class=""
              />
              <BaseInputComponent
                v-for="i in inputsData"
                :eye="false"
                :labelText="i.label"
                :inputType="i.type"
                modelValue="2"
                class="text-gray-300"
              />
            </div>
            <BaseButton
              @click="closeModal"
              class="bg-blue-secondary p-2 rounded text-white-primary block mx-auto mt-4"
              >Close</BaseButton
            >
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type Input from "@/types";
const emit = defineEmits<{
  (e: "closeModal"): void;
}>();
defineProps<{
  inputsData: Input[];
}>();
const closeModal = () => {
  emit("closeModal");
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-y: hidden;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
