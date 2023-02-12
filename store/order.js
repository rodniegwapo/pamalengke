export const state = () => ({
  orders: {},
  orders_by_user: [],
  order_details: {}
})
export const getters = {
  orders: state => state.orders,
  orders_by_user: state => state.orders_by_user,
  order_details: state => state.order_details
}
export const mutations = {
  setOrders (state, payload) {
    state.orders = payload
  },
  setOrdersByUser (state, payload) {
    state.orders_by_user = payload
  },
  setOrderDetails (state, payload) {
    state.order_details = payload
  }
}
export const actions = {
  addOrders ({ commit }, payload) {
    commit('setOrders', payload)
  },
  getAllOrdersByUser ({ commit }, payload) {
    commit('setOrdersByUser', payload)
  }
}
