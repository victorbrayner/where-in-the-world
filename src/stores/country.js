import { defineStore } from "pinia";

const api = "https://restcountries.com/v3.1";

export const useCountryStore = defineStore("country", {
  state: () => ({
    allCountries: [],
    searchedCountries: [],
    openDetails: false,
    country: {},
  }),
  getters: {},
  actions: {
    async fetchCountries() {
      const res = await fetch(`${api}/all`);
      const json = await res.json();
      this.allCountries = json;
      this.searchedCountries = this.allCountries.slice(0, 25);
    },
    async fetchCountriesByName(name) {
      const res = await fetch(`${api}/name/${name}`);
      const json = await res.json();
      this.searchedCountries = json;
    },
    async fetchCountriesByRegion(region) {
      const res = await fetch(`${api}/region/${region}`);
      const json = await res.json();
      this.searchedCountries = json;
    },
    clearSearch() {
      this.searchedCountries = this.allCountries.slice(0, 25);
    },
    setCountry(country) {
      this.country = country;
    },
  },
});
