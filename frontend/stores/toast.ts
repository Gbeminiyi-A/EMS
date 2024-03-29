export const useToast = defineStore("useToast", () => {
    const showToast = ref(false);
    const toastText = ref("");
    const bgColor = ref("");
    const icon = ref("");
  
    const addToast = (text: string, status: string) => {
      showToast.value = true;
      toastText.value = text;
      switch (status) {
        case "success":
          bgColor.value = "bg-green-100";
          icon.value = "icon-park-solid:success"
          break;
        case "error":
          bgColor.value = "bg-red-400";
          icon.value = "ic:sharp-error"
          break;
        case "info":
          bgColor.value = "bg-yellow-300";
          break;
      }
      setTimeout(() => {
        showToast.value = false;
        toastText.value = "";
        bgColor.value = "";
      }, 4000);
    };
    return { showToast, addToast, bgColor, toastText, icon };
  });