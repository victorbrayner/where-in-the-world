<template>
  <q-page class="page flex q-pt-xl">

    <SearchBar />

    <CountriesCards />

  </q-page>
</template>

<script setup>
import SearchBar from 'src/components/SearchBar.vue'
import CountriesCards from 'src/components/CountriesCards.vue'

</script>

<style scoped lang="scss">
.body--light .page{
  background-color: #fafafa;
  color: hsl(209, 23%, 22%);
}
</style>
