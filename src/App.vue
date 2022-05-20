<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
.heading {
  @apply text-3xl font-semibold;
}
.subheading {
  @apply text-xl font-medium;
}

a {
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(263, 70%, 50%, 0.2);
  }
  ::selection {
    background-color: hsla(263, 70%, 50%, 0.2);
  }
  ::-moz-selection {
    background-color: hsla(263, 70%, 50%, 0.2);
  }
}

.tank {
  background: #9d836c;
  border: #9d836c 1px solid;
  color: #fff;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(157,131,108,0.3)];
}
.fighter {
  background: #ff7979;
  border: #ff7979 1px solid;
  color: #1f2937;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(255,122,122,0.3)];
}
.mage {
  background: #686de0;
  border: #686de0 1px solid;
  color: #fff;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(104,109,224,0.3)];
}
.assassin {
  background: #30336b;
  border: #30336b 1px solid;
  color: #fff;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(48,51,107,0.3)];
}
.support {
  background: #6ab04c;
  border: #6ab04c 1px solid;
  color: #fff;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(106,176,76,0.3)];
}
.marksman {
  background: #f6e58d;
  border: #f6e58d 1px solid;
  color: #1f2937;
  @apply focus:ring-2 focus:outline-none focus:ring-[rgba(246,229,141,0.3)];
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
