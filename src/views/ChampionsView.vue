<script>
import Container from '@/components/app/Container.vue';
import Loader from '@/components/app/Loader.vue';
import { useChampionStore } from '../stores/champion';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from '@vue/runtime-core';

export default {
  setup() {
    const store = useChampionStore();
    let { champions } = storeToRefs(store);
    const { fetchChampions } = store;
    const currentTag = ref();
    const loading = ref(true);
    const championSearch = ref();

    onMounted(async () => {
      await fetchChampions();
      // Data fetched, disable loading state
      loading.value = false;
    });

    const setCurrentTag = function (tagName) {
      // If user clicks on same button tag
      if (currentTag.value == tagName) {
        return (currentTag.value = '');
      }

      // set currentTag to the clicked tag
      currentTag.value = tagName;
    };

    const filtered = computed(() => {
      // if user typed to input
      if (championSearch.value) {
        let search = Object.values(champions.value);
        if (currentTag.value) {
          search = Object.values(champions.value).filter((c) =>
            c.tags.includes(currentTag.value)
          );
        }

        return search.filter((c) =>
          c.name.toLowerCase().startsWith(championSearch.value.toLowerCase())
        );
      }
      // if user clicked filter button
      if (currentTag.value)
        return Object.values(champions.value).filter((c) =>
          c.tags.includes(currentTag.value)
        );
      // if not
      else return champions.value;
    });

    return {
      filtered,
      currentTag,
      setCurrentTag,
      loading,
      championSearch,
    };
  },
  data() {
    return {
      tags: [
        {
          id: 'fighter',
          name: 'Fighter',
        },
        {
          id: 'tank',
          name: 'Tank',
        },
        {
          id: 'mage',
          name: 'Mage',
        },
        {
          id: 'assassin',
          name: 'Assassin',
        },
        {
          id: 'marksman',
          name: 'Marksman',
        },
        {
          id: 'support',
          name: 'Support',
        },
      ],
    };
  },
  components: {
    Container,
    Loader,
  },
};
</script>

<template>
  <Container class="py-20">
    <h1 class="heading mb-2">Champions</h1>
    <div class="flex justify-between">
      <div>
        <button
          v-for="tag in tags"
          v-bind:key="tag.id"
          @click="setCurrentTag(tag.name)"
          :class="
            currentTag == tag.name ? tag.id : tag.id + ' bg-white text-black'
          "
          class="text-xs mr-2 px-2.5 py-1.5 rounded disabled:bg-gray-300 disabled:border-none disabled:text-gray-800"
          :disabled="loading"
        >
          {{ tag.name }}
        </button>
      </div>
      <div>
        <div class="flex justify-center">
          <div class="xl:w-96">
            <div
              class="input-group relative flex flex-wrap items-stretch w-full rounded"
            >
              <input
                v-model="championSearch"
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div v-if="loading" class="loader-container">
        <!-- IF DATA NOT LOADED YET -->
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div v-else-if="filtered.length == 0">
        <h1 class="subheading py-2">No champions were found</h1>
      </div>
      <div v-else class="championsContainer">
        <div v-for="c in filtered" v-bind:key="c.id" class="mb-2">
          <div class="flex items-center mb-2 space-x-4">
            <h5 class="subheading">{{ c.name }}</h5>
            <div>
              <span
                v-for="role in c.tags"
                :class="
                  role.toLowerCase() +
                  ' text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'
                "
                v-bind:key="role"
                >{{ role }}</span
              >
            </div>
          </div>
          <div
            class="overflow-hidden shadow-[inset_0_0_250px_rgba(255,0,0,1)] z-50"
          >
            <router-link :to="'/champions/' + c.id">
              <img
                :src="
                  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
                  c.image.full.split('.')[0] +
                  '_0' +
                  '.jpg'
                "
                :alt="c.name"
                class="transition duration-300 hover:scale-105"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
button {
  @apply transition ease-in-out;
}
</style>
