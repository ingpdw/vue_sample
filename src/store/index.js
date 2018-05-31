import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const listAPI = '/static/data.json';

export default new Vuex.Store({
  state: {
    items: {},
  },
  getters: {
    list: state => state.items.pageList,
  },
  mutations: {
    setList(state, items) {
      state.items = items;
    },
    addList(state, items) {
      state.items.pageList.push(...items);
    },
  },
  actions: {
    getList(context) {
      axios.get(listAPI)
        .then((res) => {
          context.commit('setList', res.data);
        });
    },
    addList(context) {
      axios.get(listAPI)
        .then((res) => {
          context.commit('addList', res.data.pageList);
        });
    },
  },
});
