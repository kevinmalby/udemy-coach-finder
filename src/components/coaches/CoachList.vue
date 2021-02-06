<template>
<q-card>
    <q-card-section>
      <q-btn color="primary" label="Refresh"/>
      <ul>
          <coach-list-item v-for="coach in coachData"
          :key="coach.name"
          :name="coach.name"
          :price="coach.price"
          :specializations="coach.specializations"></coach-list-item>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script>
import CoachListItem from './CoachListItem'
export default {
    components: {
        CoachListItem
    },
    data() {
        return {
            coachData: [
                {
                    name: 'Manuel Lorenz',
                    price: 39,
                    specializations: ['Frontend', 'Backend']
                },
                {
                    name: 'Max Schwarz',
                    price: 41,
                    specializations: ['Frontend', 'Backend', 'Career']
                }
            ]
        };
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0
}
</style>