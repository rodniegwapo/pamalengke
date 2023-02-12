export const strict = false

export const state = () => ({
  menus: [],
  baranggays: []
})

export const getters = {
  baranggays: state => state.baranggays[0].barangays.data.map((el) => {
    return {
      id: el.id,
      name: el.name
    }
  }),
  menus: state => state.menus.map((el) => {
    return {
      id: el.id,
      name: el.name,
      slug: el.slug,
      product_categories: el.product_categories.data.map((el1) => {
        if (el1.product_sub_categories.data.length > 0) {
          return {
            id: el1.id,
            name: el1.name,
            slug: el1.slug,
            product_sub_categories: el1.product_sub_categories.data.map((el2) => {
              return {
                id: el2.id,
                name: el2.name,
                slug: el2.slug
              }
            })
          }
        } else {
          return {
            name: el1.name,
            slug: el1.slug
          }
        }
      })
    }
  })
}

export const mutations = {
  set_menus (state, payload) {
    state.menus = payload
  },
  set_baranggays (state, payload) {
    state.baranggays = payload
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, state }) {
    try {
      await dispatch('getMenus')
      await dispatch('getBarangays')
    } catch (error) {
      // console.log(error)
    }
  },
  async getMenus ({ commit, state }) {
    try {
      const menus = await this.$axios.get('api/public/product-department', {
        params: {
          include: 'product_categories.product_sub_categories',
          sort_by: 'created_at',
          sort_desc: 1
        }
      })
      commit('set_menus', menus.data.data)
    } catch (error) {
      // console.log(error)
    }
  },
  async getBarangays ({ commit, state }) {
    try {
      const baranggays = await this.$axios.get('api/public/district', {
        params: {
          include: 'barangays'
        }
      })
      commit('set_baranggays', baranggays.data.data)
    } catch (error) {
      // console.log(error)
    }
  }
}
