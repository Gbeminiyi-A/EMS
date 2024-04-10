export default function useResetForm() {
  const resetForm = (formObject: any) => {
    for (let key in formObject) {
      if (Array.isArray(formObject[key])) {
        formObject[key] = [];
      } else {
        formObject[key] = "";
      }
    }
    console.log(formObject);
  };
  return { resetForm };
}
