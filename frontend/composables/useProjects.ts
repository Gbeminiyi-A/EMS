//composable with asynchoronous function to get and post projects data
import type Project from "@/types/Project";

export default function useProjects() {
  const toast = useToast();
  const companyProjects = useCompanyProjects();

  const createProject = async (projectObject: Project) => {
    try {
      const res = await $fetch(
        "https://ems-backend-9ojf.onrender.com/projects/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectObject),
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
        companyProjects.projects = res.projects;        
      }
    } catch (err) {
      toast.addToast("Couldn't fetch data", "error");
    }
  };

  return { createProject, getProjects };
}
