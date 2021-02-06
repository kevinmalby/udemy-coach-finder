<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Find a Coach </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/coaches" label="All Coaches" />
          <q-route-tab to="/requests" label="Requests" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="main-content">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

main {
  padding-top: 2rem;
}

.main-content {
  width: 70%;
  margin: 0 auto;
}

.q-card {
  margin-bottom: 1.5rem;
}

.q-card:first-child {
  margin-top: 1.5rem;
}
</style>
