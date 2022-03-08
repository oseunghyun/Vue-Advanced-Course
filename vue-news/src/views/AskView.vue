<template>
<div>
  <div v-for="(item, index) in ask" v-bind:key="index" >{{ item.title}}</div>
</div>

</template>

<script>
import { fetchAskList } from '../api/index';
export default {
  data() {
    return {
      ask: []
    }
  },
  // 컴포넌트가 생성되자 마자 시작하는 로직(라이프 사이클 훅)
created() {
  var vm = this;
  fetchAskList()
    .then(function(response) {
      console.log(response);
      vm.ask = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  },
}
</script>

<style>

</style>