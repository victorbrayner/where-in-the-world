<template>
  <q-page class="page flex q-pt-xl">

    <SearchBar />

  </q-page>
</template>

<script setup>
import SearchBar from 'src/components/SearchBar.vue'

</script>

<style scoped lang="scss">
.body--light .page{
  background-color: #fafafa;
  color: hsl(209, 23%, 22%);
}
</style>
