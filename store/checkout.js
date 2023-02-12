export const state = () => ({
  contentProgress: 30,
  form: {},
  step: 1,
  modal: false,
  note: ''
})
export const getters = {
  basket: state => state.basket,
  step: state => state.step,
  contentProgress: state => state.contentProgress,
  form: state => state.form,
  modal: state => state.modal,
  note: state => state.note
}
export const mutations = {
  updateStep (state, payload) {
    state.step = payload
  },
  openContentProgress (state, payload) {
    state.contentProgress = payload
  },
  orderForm (state, payload) {
    state.form = payload
  },
  toggleModal (state, payload) {
    state.modal = payload
  },
  note (state, payload) {
    state.note = payload
  }
}
export const actions = {
}
