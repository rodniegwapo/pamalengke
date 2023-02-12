export const state = () => ({
  isLoggedIn: false,
  bearerToken: '',
  expires_in: '',
  user: {}
})
export const getters = {
  bearerToken: state => state.bearerToken,
  isLoggedIn: state => state.isLoggedIn,
  expires_in: state => state.expires_in,
  user: state => state.user
}

export const mutations = {
  setExpiresIn (state, payload) {
    state.expires_in = payload
  },
  setBearerToken (state, payload) {
    state.bearerToken = payload
  },
  setLogin (state, payload) {
    state.isLoggedIn = payload
  },
  setAuth (state, payload) {
    state.user = payload
  }
}
