export const state = () => ({
  search: '',
  promo_products: [],
  products: [],
  total_pages: 0
})
export const getters = {
  search: state => state.search,
  promo_products: state => state.promo_products,
  products: state => state.products,
  total_pages: state => state.total_pages
}
export const mutations = {
  setTotalPages (state, payload) {
    state.total_pages = payload
  },
  setPromoProducts (state, payload) {
    state.promo_products = payload
  },
  setProducts (state, payload) {
    state.products = payload
  },
  setSearch (state, payload) {
    state.search = payload
  }
}
export const actions = {
  async doSearch ({ commit }, payload) {
    try {
      this.app.router.app.$loading.start()
      const response = await this.$axios.get('api/public/search-product', {
        params: {
          page: payload.page,
          limit: 20,
          search: payload.search,
          only_available: 1,
          include: 'image'
        }
      })
      commit('setTotalPages', response.data.meta.pagination.total_pages)
      let products = response.data.data.filter((obj) => {
        return obj.type === 'product'
      })
      products = products.map((el) => {
        return {
          id: el.id,
          name: el.description,
          discount: el.discount,
          price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
          not_discouted_price: el.price,
          image_md: el.image.data.medium_image,
          image_sm: el.image.data.small_image,
          image_lg: el.image.data.large_image,
          stocks: el.stocks
        }
      })
      commit('setProducts', products)
      let promoProducts = response.data.data.filter((obj) => {
        return obj.type === 'promo_product'
      })
      promoProducts = promoProducts.map((el) => {
        return {
          id: el.id,
          name: el.name,
          desc: el.description,
          discount: el.discount,
          price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
          not_discouted_price: el.price,
          image_md: el.image.data.medium_image,
          image_sm: el.image.data.small_image,
          image_lg: el.image.data.large_image,
          stocks: el.stocks
        }
      })
      commit('setPromoProducts', promoProducts)
    } catch (error) {
      throw error(error)
    } finally {
      this.app.router.app.$loading.finish()
    }
  }
}
