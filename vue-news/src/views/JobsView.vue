<template>
<div>
  <div v-for="(job, index) in this.$store.state.jobs" v-bind:key="index" >{{ job.title }}</div>
</div>

</template>

<script>

export default {
  data() {
    return {

    }
  },
created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>

<style>

</style>