<template>
  <q-page class="page flex q-pt-xl">

    <SearchBar v-if="!store.openDetails" />

    <CountriesCards v-if="!store.openDetails" />

    <CountryDetails v-else />

  </q-page>
</template>

<script setup>
import SearchBar from 'src/components/SearchBar.vue'
import CountriesCards from 'src/components/CountriesCards.vue'
import CountryDetails from 'src/components/CountryDetails.vue'
import { useCountryStore } from '../stores/country'

const store = useCountryStore()

</script>

<style scoped lang="scss">
.body--light .page{
  background-color: #fafafa;
  color: hsl(209, 23%, 22%);
}
</style>
