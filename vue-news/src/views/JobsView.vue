<template>
<div>
  <div v-for="(user, index) in users" v-bind:key="index" >{{ user }}</div>
</div>

</template>

<script>
import { fetchJobsList } from '../api/index';
export default {
  data() {
    return {
      users: []
    }
  },
created() {
  var vm = this;
  fetchJobsList()
    .then(function(response) {
      console.log(response);
      vm.users = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  },
}
</script>

<style>

</style>