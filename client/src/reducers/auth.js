const Auth = {
  namespaced: true,
  state: {
    isLoginCheck: false,
    isAuthenticated: false,
    user: {}
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload.user.El
      state.isAuthenticated = !!payload.user
    },
    CHECK_LOGIN_STATUS (state, payload) {
      state.isLoginCheck = !!payload.isAuthenticated
    }
  },
  actions: {
    SetUser ({ commit }, payload) {
      commit('SET_USER', payload)
    },
    CheckLoginStatus ({ commit }, payload) {
      commit('CHECK_LOGIN_STATUS', payload)
    }
  },
  getters: {

  }
}

export default Auth
