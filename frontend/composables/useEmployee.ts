//composable with asynchoronous function to get and post data
import type Employee from "~/types/Employee";
// import { useToast } from "@/stores/toast";

export default function useCreateEmployee() {
  const toast = useToast();
  const employer = useEmployer();

  const createEmployee = async (employeeObject: Employee) => {
    console.log(toRaw(employeeObject));

    try {
      const res = await $fetch(
        "https://ems-backend-9ojf.onrender.com/employees/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeeObject),
        }
      );
      if (res) {
        toast.addToast("Employee created successfully", "success");
      } else {
        toast.addToast("Failed to create employee", "error");
      }
    } catch (err) {
      toast.addToast("Failed to create employee", "error");
    }
  };

  const getEmployees = async () => {
    try {
      const res = await $fetch(
        "https://ems-backend-9ojf.onrender.com/employees/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        employer.employees = res.employees;
      }
    } catch (err) {
      toast.addToast("Couldn't fetch data", "error");
    }
  };

  return { createEmployee, getEmployees };
}
