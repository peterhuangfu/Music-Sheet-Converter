import agent from './agent';

const Explore = {
  state: {
    information: '',
  },
  mutations: {
    NOOT(state, payload) {
      state.information = payload;
    },
  },
  actions: {
    get_profile({ commit }) {
      agent
        .get('profile/get_profile')
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
