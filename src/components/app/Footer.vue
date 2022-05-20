<template>
  <footer
    class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 w-full mx-auto bottom-0"
  >
    <div class="container mx-auto sm:flex sm:items-center sm:justify-between">
      <router-link to="/" class="flex items-center mb-4 sm:mb-0">
        <img
          src="@/assets/logo-footer.png"
          class="mr-3 h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Wiki League</span
        >
      </router-link>
      <ul
        class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <li v-for="(link, i) in links" v-bind:key="i">
          <router-link
            :to="link.url"
            active-class="active"
            :exact="link.exact"
            class="mr-4 hover:underline md:mr-6"
            >{{ link.title }}</router-link
          >
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022
      <router-link to="/" class="hover:underline">Wiki-League™</router-link>.
      All Rights Reserved.
    </span>
  </footer>
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
        { title: 'Privacy Policy', url: '/privacy-policy' },
        { title: 'About', url: '/about' },
      ],
    };
  },
};
</script>
