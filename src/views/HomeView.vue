<script>
import Container from '@/components/app/Container.vue';
import { ArrowNarrowDownIcon } from '@heroicons/vue/outline';

export default {
  components: {
    Container,
    ArrowNarrowDownIcon,
  },
};
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="max-w-full mx-auto">
      <section class="flex items-center min-h-screen" v-motion-fade>
        <div>
          <div
            class="flex flex-col sm:grid grid-cols-10 gap-5 sm:items-center mb-40"
          >
            <div class="col-span-5 items-center">
              <h1 class="heading mb-3">Welcome to Wiki League</h1>
              <p class="paragraph hidden sm:flex mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus ut vero non animi voluptatum optio repellat,
                sapiente error sequi? Enim!
              </p>
              <router-link to="/login" class="btn py-3 px-4 text-sm">
                Get started
              </router-link>
            </div>
            <div class="col-span-5 overflow-hidden rounded-sm">
              <img
                src="@/assets/img/annie-tibber-statue-day.png"
                alt="Annie tibber statue"
                class="rounded-sm shadow-sm hover:shadow-lg hover:scale-110 transition ease-out duration-300"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <ArrowNarrowDownIcon class="h-20 animate-bounce stroke-1" />
          </div>
        </div>
      </section>

      <section class="flex items-center min-h-screen justify-center">
        <div class="flex flex-col justify-center gap-10 items-center mb-20">
          <div class="max-w-xl text-center">
            <h2 class="heading font-medium mb-5">
              View your favorite champions
            </h2>
            <p class="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              autem corrupti consectetur velit incidunt eaque eius vel. Nam,
              sapiente aspernatur distinctio possimus natus ut rerum, debitis
              hic quis earum praesentium.
            </p>
            <router-link to="/champions" as="button" class="btn py-2 px-3"
              >See champions</router-link
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
