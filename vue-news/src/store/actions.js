import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index';


export default {
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