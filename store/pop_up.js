export const state = () => ({
  item: [],
  search_toogle: false,
  modal: false
})

export const getters = {
  search_toogle: state => state.search_toogle,
  modal: state => state.modal
}

export const mutations = {
  toggleModal (state, payload) {
    state.modal = payload
  },
  add_item (state, payload) {
    state.item.push(payload)
  },
  remove_item (state) {
    state.item.shift()
  },
  searchToogle (state) {
    state.search_toogle = !state.search_toogle
  }
}

export const actions = {
}
