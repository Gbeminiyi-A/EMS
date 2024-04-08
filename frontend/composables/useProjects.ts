//composable with asynchoronous function to get and post projects data
import type Employee from "~/types/Employee";
// import { useToast } from "@/stores/toast";

export default function useCreateEmployee() {
  const toast = useToast();

  const createProject = async () => {
    try {
      const res = await $fetch(
        "https://ems-backend-9ojf.onrender.com/projects/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        }
      );
      if (res) {
        toast.addToast("Project created successfully", "success");
      } else {
        toast.addToast("Failed to create project", "error");
      }
    } catch (err) {
      toast.addToast("Failed to create project", "error");
    }
  };

  const getProjects = async () => {
    try {
      const res = await $fetch(
        "https://ems-backend-9ojf.onrender.com/projects/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        console.log(res);
      }
    } catch (err) {
      toast.addToast("Couldn't fetch data", "error");
    }
  };

  return { createProject, getProjects };
}
