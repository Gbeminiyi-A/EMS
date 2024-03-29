export default function ({}, inject) {
  const loading = ref(false);
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
  });

  router.afterEach(() => {
    loading.value = false;
  });

  inject('loading', loading);
}