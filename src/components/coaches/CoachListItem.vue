<template>
  <q-card class="coach-list-item" flat bordered>
    <q-card-section>
        <h6>{{name}}</h6>
        <p>${{price}}/hour</p>
        <div>
            <q-chip square :ripple="false"
            v-for="(specialization, index) in specializations"
            :key="specialization"
            :color="chipColors[index]">
                {{ specialization }}
            </q-chip>
        </div>
        <div class="row justify-end">
            <router-link class="btn-link" to="/coaches/contact">
                <q-btn color="secondary" label="Contact"/>
            </router-link>
            <router-link class="btn-link" to="/coaches/details">
                <q-btn color="primary" label="View Details"/>
            </router-link>
        </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
    props: ['name', 'price', 'specializations'],
    data() {
        return {
            chipColors: ['pink-4', 'cyan-4', 'green-4']
        }
    }
}
</script>

<style scoped>
.coach-list-item {
    max-width: 600px;
}

.btn-link:not(:last-of-type) {
    margin-right: 1rem;
}
</style>