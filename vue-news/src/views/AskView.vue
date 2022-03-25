<template>
<div>
  <div v-for="(item, index) in fetchedAsk" v-bind:key="index" >{{ item.title}}</div>
</div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
    }
  },
  // 컴포넌트가 생성되자 마자 시작하는 로직(라이프 사이클 훅)
created() {
    this.$store.dispatch('FETCH_ASK');
  },
  computed: {
    ...mapGetters([
      'fetchedAsk'
      // fetchedAsk: 'fetchedAsk'
      // 컴포넌트 이름: 'vuex 속성'
    ]),
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),
    // #1
    // ask() {
    //  return this.$store.state.ask; 
    },
  }

</script>

<style>

</style>