<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Find a Coach
        </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/coaches" label="All Coaches" />
          <q-route-tab to="/requests" label="Requests" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

}
</script>
