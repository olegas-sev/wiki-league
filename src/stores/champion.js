import { defineStore } from 'pinia';

export const useChampionStore = defineStore({
  id: 'champion',
  state: () => ({
    champions: [],
  }),
  actions: {
    async fetchChampions() {
      try {
        const res = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json'
        );
        const data = await res.json();
        this.champions = data.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});
