<script>
import Navbar from '@/components/app/Navbar.vue';
import Footer from '@/components/app/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
