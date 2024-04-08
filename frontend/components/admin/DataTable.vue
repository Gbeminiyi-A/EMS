<template>
  <div class="flex justify-between w-full items-center font-semibold text-md">
    <h3 class="text-white-primary mb-4">{{ title }}</h3>
    <p class="text-red-primary hover:text-white-primary duration-200 cursor-pointer" v-if="status">{{ status }}</p>
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
        v-if="datas"
        v-for="(data, index) in filteredDatas"
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
        <td v-for="d in data" class="border text-gray-secondary text-sm">
          {{ d }}
        </td>
        <td class="border">
          <BaseButton
            @click="showDetails(data.id)"
            v-if="buttonName"
            class="bg-red-primary text-white-primary p-1 rounded hover:bg-red-secondary duration-150"
            >{{ buttonName }}</BaseButton
          >
        </td>
      </tr>
      <!-- <tr class="w-full" v-else>
        <h3 class="text-center text-2xl text-white-primary">No Data</h3>
      </tr> -->
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  projectHeaders: Array<string>;
  title: string;
  status: string | boolean;
  buttonName: string | boolean;
  showCheckBox: boolean;
  datas: any;
}>();
const getLength = computed(() => {
  if (props.buttonName) {
    return props.projectHeaders.length - 1;
  }
  return props.projectHeaders.length;
});
// Create a computed property that filters the datas array
const keysToInclude = ref(['id', 'name', 'designation', 'skills', 'date_joined']);

const filteredDatas = computed(() => {
  return props.datas.map(data => {
    let filteredData = {};
    keysToInclude.value.forEach(key => {
      filteredData[key] = data[key];
    });
    return filteredData;
  });
});
//emitted events
const emit = defineEmits<{
  (e: "showDetails", data): any;
}>();
const showDetails = (data: any) => {
  emit("showDetails", data);
};
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
  width: fit-content;
  white-space: nowrap;
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
