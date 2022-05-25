<script>
import Container from '@/components/app/Container.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    let championData = ref();

    onMounted(async () => {
      const champion = route.params.name;
      const res = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${champion}.json`
      );
      let { data } = await res.json();
      // Grab 1st element from object
      championData.value = Object.values(data)[0];
      console.log(data);
    });
    return { championData };
  },
  components: {
    Container,
  },
};
</script>

<template>
  <Container class="py-20">
    <div class="flex justify-end">
      <button @click="$router.back()" class="btn px-5 py-1.5 mb-2">Back</button>
    </div>
    <div class="mb-3" v-if="championData">
      <div class="flex items-end space-x-2 mb-3">
        <h2 class="heading">{{ championData.name }}</h2>
        <span>{{ championData.title }}</span>
        <div>
          <span
            v-for="role in championData.tags"
            :class="role.toLowerCase() + ' text-xs mr-2 px-2.5 py-0.5 rounded'"
            v-bind:key="role"
            >{{ role }}</span
          >
        </div>
      </div>
      <div>
        <img
          :src="
            'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
            championData.image.full.split('.')[0] +
            '_0' +
            '.jpg'
          "
          :alt="championData.name"
        />
      </div>
      <div>
        <h4 class="subheading">Lore</h4>
        <p class="paragraph">
          {{ championData.lore }}
        </p>
      </div>
    </div>
  </Container>
</template>
