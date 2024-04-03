<template>
  <div class="flex justify-between w-full items-center font-semibold text-md">
    <h3 class="text-white-primary mb-4">{{ title }}</h3>
    <p class="text-red-primary">{{ status }}</p>
  </div>
  <div class="table-container">
    <table class="border-collapse w-full">
      <tr class="border hover:bg-blue-primary duration-150">
        <th class="border">
          <BaseInputComponent
            :eye="false"
            type="checkbox"
            class="w-4"
            v-if="showCheckBox"
          />
          <p class="text-white-primary font-normal text-base" v-else>ID</p>
        </th>
        <th
          v-for="title in projectHeaders"
          class="text-white-primary border font-normal text-base"
        >
          {{ title }}
        </th>
      </tr>
      <tr
        class="border text-center hover:bg-blue-primary duration-150"
        v-for="(i, index) in 3"
      >
        <td class="border">
          <BaseInputComponent
            :eye="false"
            type="checkbox"
            class="w-4"
            v-if="showCheckBox"
          />
          <p class="text-gray-primary font-normal text-base" v-else>
            {{ index + 1 }}
          </p>
        </td>
        <td v-for="i in getLength" class="border text-gray-secondary text-sm">
          Alfreds Futterkiste
        </td>
        <td class="border">
          <BaseButton
            class="bg-red-primary text-white-primary p-1 rounded hover:bg-red-secondary duration-150"
            >{{ buttonName }}</BaseButton
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  projectHeaders: Array<string>;
  title: string;
  status: string;
  buttonName: string;
  showCheckBox: boolean;
}>();
const getLength = computed(() => props.projectHeaders.length - 1);
// const emit = defineEmits<{
//   (e: "showDetails"): void;
// }>();
// const showDetails = () => {
//   emit("showDetails");
// };
</script>

<style scoped>
.table-container::-webkit-scrollbar {
  width: 4px;
  height: 3px;
}
.table-container::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 4px;
}
.table-container::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 4px;
}
th,
td {
  border-color: #000;
  padding: 8px;
  whitespace: nowrap;
}
[type="checkbox"]:checked {
  background-color: red;
}
.table-container {
  overflow-x: auto;
}
input[type="checkbox"]:checked {
  background-color: #ff004d;
}
</style>
