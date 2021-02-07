<template>
  <q-card>
    <q-card-section>
      <h5>{{ name }}</h5>
      <p class="text-weight-bold">${{ price }}/hour</p>
    </q-card-section>
  </q-card>
  <q-card class="q-pa-md">
    <q-card-section>
      <h5 class="q-mb-md">Interested? Reach out now!</h5>
      <q-btn class="q-mb-md" color="primary" label="Contact" />
      <q-card flat bordered class="input-card">
        <q-card-section>
          <q-form>
            <q-input
              outlined
              v-model="userEmail"
              type="email"
              label="Your E-Mail"
            />
            <div>
              <div class="text-weight-bold">Message</div>
              <q-editor v-model="messageBody" min-height="5rem" />
            </div>
            <div class="row justify-center q-mt-md">
              <q-btn color="primary" label="Send Message"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-card-section>
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
      userEmail: null,
      messageBody: null,
      specializations: [],
      chipColors: ["pink-4", "cyan-4", "green-4"],
    };
  },
};
</script>

<style scoped>
form {
  padding: 1rem 3rem;
}

.q-input {
  max-width: 300px;
  margin-bottom: 1rem;
}

.input-card {
  margin: 0 2rem;
}
</style>