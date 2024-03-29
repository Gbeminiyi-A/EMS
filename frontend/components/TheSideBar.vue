<template>
  <nav
    class="fixed top-0 z-50 w-full bg-blue-secondary dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button
            @click="showSideBar = !showSideBar"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-1 text-md text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:bg-red-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <NuxtLink to="/" class="flex ms-2 md:me-24">
            <Icon name="CustomEmployeeIcon" color="#EE2B47" />
            <span
              class="self-center text-xl font-extrabold font-poppins sm:text-2xl whitespace-nowrap tracking-widest text-red-primary dark:text-white uppercase"
              >Ems</span
            >
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 relative rounded-full focus:ring-4 focus:ring-red-primary dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="../assets/user-avatar.png"
                  alt="user-avatar"
                  ref="avatarImage"
                />
                <div
                  class="absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-400 border-white-primary border-2"
                ></div>
              </button>
            </div>
            <!-- <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    :class="{ 'translate-x-0': showSideBar, '-translate-x-full': !showSideBar }"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-blue-secondary transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 overflow-y-auto dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="link in employeeNavLinks" :key="link" v-if="!isAdmin">
          <NuxtLink
            active-class="active-link"
            :to="link.to"
            class="flex items-center p-4 font-poppins text-white-primary rounded-tr-full rounded-br-full hover:bg-black duration-100 hover:text-red-primary hover:border-l-4 hover:border-red-primary hover:font-bold dark:hover:bg-gray-700 dark:text-white group"
          >
            <Icon :name="link.iconName" />
            <span class="ms-3">{{ link.name }}</span>
          </NuxtLink>
        </li>
        <li v-for="link in adminNavLinks" :key="link" v-if="isAdmin">
          <NuxtLink
            active-class="active-link"
            :to="link.to"
            class="flex items-center p-4 font-poppins text-white-primary rounded-tr-full rounded-br-full hover:bg-black duration-100 hover:text-red-primary hover:border-l-4 hover:border-red-primary hover:font-bold"
          >
            <Icon :name="link.iconName" />
            <span class="ms-3">{{ link.name }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="navigateTo('/')"
            class="flex items-center p-4 text-white-primary rounded-tr-full rounded-br-full cursor-pointer hover:bg-black hover:text-red-primary hover:border-l-4 hover:border-red-primary hover:font-bold"
          >
            <Icon name="heroicons-outline:logout" />
            <span class="flex-1 ms-3 whitespace-nowrap">LogOut</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
const showSideBar = ref<boolean>(false);
const employee = useEmployeeData();
const { isAdmin } = storeToRefs(employee);
const employeeNavLinks = ref<Link[]>([
  {
    name: "My Profile",
    to: "/dashboard/myprofile",
    iconName: "iconamoon:profile-circle-duotone",
  },
  {
    name: "Update Info",
    to: "/dashboard/updateinfo",
    iconName: "ic:twotone-update",
  },
  {
    name: "My Salary",
    to: "/dashboard/mysalary",
    iconName: "fluent:grid-16-regular",
  },
]);

const adminNavLinks = ref<Link[]>([
  {
    name: "Dashboard",
    to: "/admin/dashboard",
    iconName: "ic:outline-dashboard",
  },
  {
    name: "Add Employee",
    to: "/admin/addEmployee",
    iconName: "material-symbols:add-box-sharp",
  },
  {
    name: "Add Project",
    to: "/admin/addProject",
    iconName: "octicon:project-16",
  },
  {
    name: "Allocate Project",
    to: "/admin/allcateProject",
    iconName: "octicon:project-16",
  },
  {
    name: "Update Salary",
    to: "/admin/updateSalary",
    iconName: "ic:baseline-update",
  },
]);

const avatarImage = ref<HTMLImageElement | null>(null);
watch(
  () => employee.avatarSrc,
  (newAvatarSrc) => {
    if (avatarImage.value && newAvatarSrc) {
      avatarImage.value.src = newAvatarSrc;
    }
  }
);
</script>

<style scoped></style>
~/types/Link