export const state = () => ({
  baskets: [],
  promos: [],
  non_promos: [],
  grand_total: 0,
  delivery_charge: 65,
  vendor_id: null
})

export const getters = {
  baskets: state => state.baskets,
  grand_total: state => state.grand_total,
  delivery_charge: state => state.delivery_charge,
  promos: state => state.promos,
  non_promos: state => state.non_promos,
  vendor_id: state => state.vendor_id
}

export const mutations = {
  setVendorId (state, payload) {
    state.vendor_id = payload
  },
  setPromo (state, payload) {
    state.promos.push(payload)
  },
  setPromos (state, payload) {
    state.promos = []
    state.promos = payload
  },
  updatePromos (state, payload) {
    state.promos = payload
  },
  setNonPromo (state, payload) {
    state.non_promos.push(payload)
  },
  setNonPromos (state, payload) {
    state.non_promos = []
    state.non_promos = payload
  },
  updateNonPromos (state, payload) {
    state.non_promos = []
    state.non_promos = payload
  },
  setBasket (state, payload) {
    state.baskets.push(payload)
  },
  setBaskets (state, payload) {
    state.baskets = []
    state.baskets = payload
  },
  updateQuantity (state, payload) {
    const index = state.baskets.findIndex(el => el.id === payload.id)
    if (index !== -1) {
      state.baskets[index].quantity = payload.qty
      if (state.baskets[index].quantity <= 0) {
        state.baskets = state.baskets.splice(index, 1)
      }
    }
  },
  removeInBasket (state, payload) {
    state.baskets.splice(state.baskets.findIndex(el => el.id === payload.id), 1)
  },
  updateBaskets (state, payload) {
    state.baskets = payload
  },
  pushGrandTotal (state, payload) {
    state.grand_total = payload
  }
}

export const actions = {
  addToBasket ({ commit }, payload) {
    commit('setBasket', payload)
  }
}
