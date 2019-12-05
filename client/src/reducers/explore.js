import agent from './agent';

const Explore = {
  namespaced: true,
  state: {
    information: '',
    works: [],
  },
  mutations: {
    NOOT(state, payload) {
      state.works = payload;
    },
  },
  actions: {
    getAllWorks({ commit }, { time_range }) {
      agent
        .get(`explore/getPublicPDF?time_range=${time_range}`)
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
