<template>
  <q-card>
    <q-card-section>
      <h4>Find Your Coach</h4>
      <div class="q-pa-lg">
        <q-option-group
          name="specializations"
          v-model="selectedSpecialization"
          :options="coachSpecializations"
          type="checkbox"
          color="primary"
          inline
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      selectedSpecialization: [ ],
      coachSpecializations: [
        {
          value: "Frontend",
          label: "Frontend"
        },
        {
          value: "Backend",
          label: "Backend"
        },
        {
          value: "Career",
          label: "Career"
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>