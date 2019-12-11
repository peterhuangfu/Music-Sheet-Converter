import agent from './agent';

const Profile = {
  namespaced: true,
  state: {
    profiles: {},
  },
  mutations: {
    GETPROFILE(state, payload) {
      state.profiles = payload;
    },
  },
  actions: {
    getAllProfiles({ commit }) {
      agent
        .get(`profile/get_profile`)
        .then(res => {
          commit('GETPROFILE', res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  getters: {},
};

export default Profile;
