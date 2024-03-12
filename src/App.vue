<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useCountryStore } from './stores/country'

const store = useCountryStore()

onMounted(() => {
  store.fetchCountries()
})

</script>
<style >
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
