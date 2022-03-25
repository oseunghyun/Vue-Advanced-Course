import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

// 상태 관리: 여러 컴포넌트에서 공유되는 데이터 관리
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  // 스토어에 있는 computed
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations,
  // 액션을 호출하려면 디스패치s
  actions,
})