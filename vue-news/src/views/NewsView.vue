<template>
  <div>
    <div v-for="(user, index) in this.$store.state.news" v-bind:key="index" >{{ user.title }}</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  },
created() {
  this.$store.dispatch('FETCH_NEWS');
  // // 1
  // fetchNewsList()
  //   .then(response => this.users = response.data)
  //   .catch(error => console.log(error));
  },
}

</script>

<style>

</style>