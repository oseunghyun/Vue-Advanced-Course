import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index';
import { fetchJobsList } from '../api/index';
import { fetchAskList } from '../api/index';

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

  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    }
  },
  // 액션을 호출하려면 디스패치s
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList() 
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data);
        // 뮤테이션에 데이터를 넘김
      })
      .catch(error => {
        console.log(error);
      })
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
    .then(({ data }) => {
      commit('SET_JOBS', data);
    })
    .catch(error => {
      console.log(error);
    })
  },
  FETCH_ASK(context) {
      fetchAskList()
    .then(response => {
      context.commit('SET_ASK', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
})