<template>
  <q-card>
    <q-card-content>
      <h5>{{ name }}</h5>
      <p text-subtitle2>${{ price }}/hour</p>
    </q-card-content>
  </q-card>
  <q-card>
    <q-card-content>
      <h5>Interest? Reach out now!</h5>
      <q-btn color="primary" label="Contact" />
      <q-card flat bordered>
        <q-card-content> </q-card-content>
      </q-card>
    </q-card-content>
  </q-card>
  <q-card>
    <q-chip
      square
      :ripple="false"
      v-for="(specialization, index) in specializations"
      :key="specialization"
      :color="chipColors[index]">
      {{ specialization }}
    </q-chip>
  </q-card>
</template>

<script>
export default {
    data() {
        return {
            specializations: [],
            chipColors: ['pink-4', 'cyan-4', 'green-4']
        }
    }
}
</script>