<template>
  <div
    class="flex justify-between"
    style="width: 100%; height: 56px;"
    :class="$q.screen.lt.md ? 'q-px-lg q-mb-xl' : 'q-px-xl'"
  >
    <q-input
      filled
      clearable
      v-model="name"
      label="Search for a country..."
      :class="$q.screen.lt.md ? 'q-mb-xl' : ''"
      style="width: 600px; height: 56px;"
      :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      class="shadow-1"
      :label-color="$q.dark.isActive ? 'white' : 'dark'"
      @keyup.enter="searchByName(name)"
      @clear="store.clearSearch()"
    >
      <template v-slot:prepend>
        <q-icon class="q-pa-md" name="mdi-magnify" :color="$q.dark.isActive ? 'white' : 'dark'" />
      </template>
    </q-input>

    <q-select
      filled
      clearable
      v-model="region"
      :options="regionOpt"
      label="Filter by Region"
      style="width: 250px; height: 56px;"
      :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      class="shadow-1"
      :label-color="$q.dark.isActive ? 'white' : 'dark'"
      @update:model-value="searchByRegion(region)"
      @clear="store.clearSearch()"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCountryStore } from '../stores/country'

const store = useCountryStore()

const name = ref('')
const region = ref(null)
const regionOpt = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const searchByName = (name) => store.fetchCountriesByName(name)

const searchByRegion = (region) => {
  if (region) store.fetchCountriesByRegion(region)
}
</script>
