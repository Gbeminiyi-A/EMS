<template>
  <div
    class="absolute top-0 left-0 p-4 min-w-full min-h-full flex justify-center items-center"
  >
    <div class="absolute top-[50%] left-[50%] translate-x-[-50%] z-[50]">
      <div class="bg-gray-200 rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
          @click="closeModal"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <div class="flex justify-center items-center">
            <img src="~/assets/success.gif" />
          </div>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <button
            data-modal-hide="popup-modal"
            type="button"
            class="red-button"
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeModal'])
const closeModal = () => {
    emit('closeModal')
}
</script>

<style scoped></style>
