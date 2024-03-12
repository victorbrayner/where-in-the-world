<template>
  <div>
    <q-btn
      class="q-mx-xl q-px-lg header"
      icon="mdi-arrow-left"
      no-caps
      @click="closeDetails()"
    >
      Back
    </q-btn>

    <div class="flex q-pt-xl q-px-xl justify-between q-gutter-xl">
      <div>
        <q-img
          :src="store.country.flags.svg"
          :style="$q.screen.lt.md ? 'width: 300px;' : 'width: 600px;'"
        />
      </div>

      <div class="column">
        <span class="text-h4 text-weight-bolder q-mb-lg">{{ store.country.name.common }}</span>

        <div class="q-gutter-xl" :class="$q.screen.lt.md ? 'row' : 'column'">
          <div class="col-12 col-md-6">
            <p><b>Native Name:</b> {{ store.country.name.official }}</p>
            <p><b>Population:</b> {{ formatNumber(store.country.population)}}</p>
            <p><b>Region:</b> {{ store.country.region}}</p>
            <p><b>Sub Region:</b> {{ store.country.subregion }}</p>
            <p><b>Capital:</b> {{ store.country.capital ? store.country.capital[0] : '' }}</p>
          </div>
          <div class="col-12 col-md-6">
            <p><b>Top Level Domain:</b> {{ store.country.tld ? store.country.tld[0] : '' }}</p>
            <p><b>Currencies:</b> {{ Object.keys(store.country.currencies).toString() }}</p>
            <p><b>Languages:</b> {{ Object.values(store.country.languages).toString() }}</p>
          </div>
        </div>

        <div class="row" :class="$q.screen.lt.md ? 'q-mb-xl' : ''">
          <span>Border Countries:</span>
          <q-btn class="header" size="sm" v-for="border in store.country.borders" :key="border"> {{ border }}</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from '../stores/country'

const store = useCountryStore()

const formatNumber = (number) => new Intl.NumberFormat().format(number)

const closeDetails = () => {
  store.openDetails = false
  store.clearSearch()
}
</script>

<style scoped lang="scss">
.country-card {
  min-width: 300px;
  height: 350px;
  margin-bottom: 80px;
}

.q-card__section--vert {
  padding: 0 !important;
}
</style>
