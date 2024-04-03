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
          bgColor.value = "#114232";
          icon.value = "icon-park-solid:success"
          break;
        case "error":
          bgColor.value = "#ff004d";
          icon.value = "ic:sharp-error"
          break;
        case "info":
          bgColor.value = "#ffc700";
          break;
      }
      setTimeout(() => {
        showToast.value = false;
        toastText.value = "";
        bgColor.value = "";
      }, 5000);
    };
    return { showToast, addToast, bgColor, toastText, icon };
  });