<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
.heading {
  @apply text-3xl font-semibold mb-3;
}
.subheading {
  @apply text-xl font-medium mb-3;
}

.btn {
  @apply text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0;
}

a {
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(263, 70%, 50%, 0.2);
  }
}
</style>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    },
  },
  components: {
    MainLayout,
    AuthLayout,
  },
};
</script>
