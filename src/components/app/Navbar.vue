<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="flex space-x-12">
        <router-link to="/" class="flex items-center">
          <img
            src="@/assets/logo.png"
            class="mr-3 h-6 w-full sm:h-9"
            alt="Vue logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:flex"
            >Wiki League</span
          >
        </router-link>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li v-for="(link, i) in links" :key="i">
              <router-link
                :to="link.url"
                class="block py-2 pr-4 pl-3 text-gray-700 bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0"
                active-class="active"
                :exact="link.exact"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2">
        <router-link to="/login" class="btn hidden md:flex py-2 px-3 text-sm">
          Get started
        </router-link>
        <button
          data-collapse-toggle="mobile-menu-4"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-4"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active {
  @apply font-bold;
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Home', url: '/', exact: true },
        { title: 'Champions', url: '/champions' },
        { title: 'Skins', url: '/skins' },
        { title: 'About', url: '/about' },
      ],
    };
  },
};
</script>
