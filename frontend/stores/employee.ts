export const useEmployeeData = defineStore("useEmployeeData", () => {
  const avatarSrc = ref<string | any>("");
  const email = ref("");
  const isAdmin = computed(() => email.value.includes("@admin.com"));
  return { avatarSrc, email, isAdmin};
});
