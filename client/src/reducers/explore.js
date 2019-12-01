import agent from './agent';

const Explore = {
  namespaced: true,
  state: {
    information: '',
  },
  mutations: {
    NOOT(state, payload) {
      state.information = payload;
    },
  },
  actions: {
    getProfile({ commit }, { text }) {
      agent
        .post('explore/convert', { text: text })
        .then(res => {
          commit('NOOT', res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  getters: {},
};

export default Explore;
