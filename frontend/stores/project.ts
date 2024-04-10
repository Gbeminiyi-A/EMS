import type Project from "@/types/Project";
import { acceptHMRUpdate } from "pinia";

export const useCompanyProjects = defineStore("useCompanyProjects", () => {
  const projects = ref<Project[]>([]);
  return { projects };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmployeeData, import.meta.hot));
}
