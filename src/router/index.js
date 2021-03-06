import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
        layout: 'main',
      },
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login',
        layout: 'auth',
      },
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'Dashboard',
        layout: 'main',
        requiresAuth: true,
      },
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/champions',
      name: 'champions',
      meta: {
        title: 'Champions',
        layout: 'main',
      },
      component: () => import('@/views/ChampionsView.vue'),
    },
    {
      path: '/champions/:name',
      name: 'champion',
      meta: {
        title: 'Champion',
        layout: 'main',
      },
      component: () => import('@/views/ChampionView.vue'),
    },
    {
      path: '/skins',
      name: 'skins',
      meta: {
        title: 'Skins',
        layout: 'main',
      },
      component: () => import('@/views/ChampionSkinsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Privacy Policy',
        layout: 'main',
      },
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      meta: {
        title: 'About',
        layout: 'main',
      },
      component: () => import('@/views/PrivacyPolicyView.vue'),
    },
    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // scrolls to top of page
    return { top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  const guarded = to.matched.some((route) => route.meta.requiresAuth);
  if (guarded) {
    next('/login');
  }

  next();
});

router.afterEach((to) => {
  nextTick(() => {
    const champion = to.params.name;
    if (champion) {
      document.title = `${to.meta.title} | ${champion}` || 'Aniditt';
    } else {
      document.title = `Wiki League | ${to.meta.title}` || 'Aniditt';
    }
  });
});

export default router;
