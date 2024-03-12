<template>
  <div
    v-if="Array.isArray(store.searchedCountries)"
    class="flex q-pt-xl q-px-xl"
    :class="$q.screen.lt.md ? 'q-mt-xl' : ''"
  >
    <q-infinite-scroll @load="onLoad" :offset="250" class="flex justify-between q-gutter-xl">
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>

      <q-card v-for="country in store.searchedCountries" :key="country.ccn3" class="country-card">

        <q-card-section>
          <q-img
            :src="country.flags.png"
            style="height: 150px;"
          />
        </q-card-section>

        <q-card-section class="q-mx-md">

          <q-card-section class="q-mb-md q-mt-md">
            <span class="text-h6 text-weight-bolder"> {{ country.name.common }}</span>
          </q-card-section>

          <q-card-section>
            <p> <b>Population:</b> {{ formatNumber(country.population) }}</p>
            <p> <b>Region:</b> {{ country.region }}</p>
            <p> <b>Capital:</b> {{ country.capital ? country.capital[0] : ''  }}</p>
          </q-card-section>

        </q-card-section>

        <q-card-actions>
          <q-btn flat icon="mdi-list-box-outline" @click="openDetails(country)" no-caps>Detalhes</q-btn>
        </q-card-actions>

      </q-card>



    </q-infinite-scroll>
  </div>
</template>

<script setup>
import { useCountryStore } from '../stores/country'
import { ref } from 'vue'

const store = useCountryStore()
const currentIndex = ref(50)

const formatNumber = (number) => new Intl.NumberFormat().format(number)

const openDetails = (country) => {
  store.openDetails = true
  store.setCountry(country)
}

const onLoad = (index, done) => {
  if(currentIndex.value <= 250) {
    store.searchedCountries = store.allCountries.slice(0, currentIndex.value)
    currentIndex.value += 25
  }
  done()
}
</script>

<style scoped lang="scss">
.country-card {
  width: 300px;
  height: 360px;
  margin-bottom: 60px;
}

.q-card__section--vert {
  padding: 0 !important;
}

p {
  margin: 5px 0 5px 0;
}
</style>
