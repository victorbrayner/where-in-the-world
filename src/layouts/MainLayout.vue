<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header shadow-1 flex" style="height: 4rem">
      <q-toolbar>

        <q-toolbar-title class="q-ml-lg">
          <span
            class="text-h6 text-weight-bolder"
            :class="$q.dark.isActive ? 'text-white' : 'text-dark'"
            :style="$q.screen.lt.md ? 'font-size: 16px' : ''"
          >
            Where in the World?
          </span>
        </q-toolbar-title>

        <q-btn
          flat
          color="primary"
          icon="mdi-theme-light-dark"
          :text-color="$q.dark.isActive ? 'white' : 'dark'"
          label="Dark Mode"
          no-caps
          @click="$q.dark.toggle()"
        />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

</script>

<style lang="scss">
.body--light .header{
  background-color: white;
  color: hsl(209, 23%, 22%);
}
.body--dark .header{
  background-color: hsl(209, 23%, 22%);
}
</style>
