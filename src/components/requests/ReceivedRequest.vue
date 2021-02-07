<template>
    <q-card square flat bordered>
        <q-card-section>
            <p class="text-weight-bold" color="primary">{{email}}</p>
            <div v-html="message"></div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    props: ['email','message']
}
</script>