import type Employee from "@types/Employee.ts";
import { acceptHMRUpdate } from "pinia";

export const useEmployer = defineStore("useEmployer", () => {
  const employees = ref<Employee[]>([]);
  return { employees };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmployer, import.meta.hot));
}
