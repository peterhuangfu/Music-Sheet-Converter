import agent from './agent'

const Auth = {
  namespaced: true,
  state: {
    isLoginCheck: false,
    isAuthenticated: false,
    user: {},
    switch_judge: false,
    error: false
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload.user
      state.isAuthenticated = !!payload.user
      state.switch_judge = !state.switch_judge
      state.error = false
    },
    CHECK_LOGIN_STATUS (state, payload) {
      state.user = payload.user
      state.isAuthenticated = !!payload.user
      state.isLoginCheck = !!payload.user
      state.switch_judge = !state.switch_judge
      state.error = false
    },
    ERROR_OCCUR (state) {
      state.error = true
    },
    LOGOUT (state) {
      state.isLoginCheck = false
      state.isAuthenticated = false
      state.user = {}
      state.switch_judge = !state.switch_judge
      state.error = false
    },
    NOT_LOGIN (state) {
      state.switch_judge = !state.switch_judge
    }
  },
  actions: {
    UserLogin ({ commit }, { user }) {
      agent.post('login/google', { user: user })
        .then(res => {
          commit('SET_USER', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    CheckLoginStatus ({ commit }) {
      agent.get('login/check_status')
        .then(res => {
          if (res.data.type === 'success') {
            commit('CHECK_LOGIN_STATUS', res.data)
          } else {
            commit('NOT_LOGIN')
          }
        })
        .catch(err => {
          console.error(err)
          commit('ERROR_OCCUR')
        })
    },
    Logout ({ commit }, history) {
      agent.get('logout')
        .then(res => {
          commit('LOGOUT')
          history.push('/login')
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  getters: {

  }
}

export default Auth
