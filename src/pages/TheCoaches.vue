<template>
    <q-page>
        <coach-filter></coach-filter>
        <coach-list></coach-list>
    </q-page>
</template>

<script>
import CoachFilter from './../components/coaches/CoachFilter';
import CoachList from './../components/coaches/CoachList';

export default {
    components: {
        CoachFilter,
        CoachList
    }
}
</script>