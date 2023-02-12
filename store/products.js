export const state = () => ({
  promos: [],
  products: [],
  vendors_profile: [],
  filtered_products: [],
  product_detail: '',
  vendor_detail: '',
  relatedProducts: {},
  relatedPromoProducts: {},
  slug: '',
  availables: []
})

export const getters = {
  promos: state => state.promos,
  products: state => state.products,
  vendors_profile: state => state.vendors_profile,
  filtered_products: state => state.filtered_products,
  product_detail: state => state.product_detail,
  vendor_detail: state => state.vendor_detail,
  availables: state => state.availables,
  relatedProducts: state => state.relatedProducts,
  relatedPromoProducts: state => state.relatedPromoProducts,
  slug: state => state.slug
}

export const mutations = {
  setPromoItems (state, payload) {
    state.promos = payload
  },
  setProducts (state, payload) {
    state.products = payload
  },
  setVendors (state, payload) {
    state.vendors_profile = payload
  },
  setFilteredProducts (state, payload) {
    state.filtered_products = payload
  },
  setProductDetail (state, payload) {
    state.product_detail = payload
  },
  setVendorDetail (state, payload) {
    state.vendor_detail = payload
  },
  setRelatedProducts (state, payload) {
    const data = payload.map((el) => {
      return {
        id: el.id,
        vendor_id: el.vendor_id,
        name: el.description,
        desc: el.description,
        discount: el.discount,
        price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
        not_discouted_price: el.price,
        image_md: el.image.data.medium_image,
        image_sm: el.image.data.small_image,
        image_lg: el.image.data.large_image,
        vendor_company_name: el.vendor.data.company_name,
        vendor_company_slug: el.vendor.data.slug,
        sub_category: el.product_sub_category.data.name,
        sub_category_id: el.product_sub_category.data.id,
        category: el.product_sub_category.data.product_category.data.name,
        category_slug: el.product_sub_category.data.product_category.data.slug,
        stocks: el.stocks,
        slug: el.slug
      }
    })
    state.relatedProducts = data
  },
  setRelatedPromoProducts (state, payload) {
    const data = payload.map((el) => {
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
        category_name: el.promo_product_category.data.name,
        stocks: el.stocks,
        slug: el.slug
      }
    })
    state.relatedPromoProducts = data
  },
  setSlug (state, payload) {
    state.slug = payload
  }
}

export const actions = {
  async getPromos ({ commit }) {
    const promos = await this.$axios.get('api/public/promo-product', {
      params: {
        include: 'image,promo_product_category',
        ppc: 'hot-promos',
        limit: 12,
        page: 1,
        only_available: 1
      }
    })
    const data = promos.data.data.map((el) => {
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
        category_name: el.promo_product_category.data.name,
        stocks: el.stocks,
        slug: el.slug
      }
    })
    commit('setPromoItems', data)
  },
  async getProducts ({ commit }) {
    const products = await this.$axios.get('api/public/product', {
      params: {
        include: 'vendor,image,product_sub_category.product_category',
        limit: 24,
        page: 1
      }
    })
    const data = products.data.data.map((el) => {
      return {
        id: el.id,
        vendor_id: el.vendor_id,
        name: el.description,
        desc: el.description,
        discount: el.discount,
        price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
        not_discouted_price: el.price,
        image_md: el.image.data.medium_image,
        image_sm: el.image.data.small_image,
        image_lg: el.image.data.large_image,
        stocks: el.stocks,
        sub_category: el.product_sub_category.data.name,
        sub_category_id: el.product_sub_category.data.id,
        vendor_company_name: el.vendor.data.company_name,
        vendor_company_slug: el.vendor.data.slug,
        category: el.product_sub_category.data.product_category.data.name,
        category_slug: el.product_sub_category.data.product_category.data.slug,
        slug: el.slug
      }
    })
    commit('setProducts', data)
  },
  async getFilteredProducts ({ commit }, payload) {
    const payloads = {
      include: 'image,product_sub_category.product_category',
      limit: 24,
      page: 1,
      only_available: 1,
      ...payload
    }
    const products = await this.$axios.get('api/public/product', {
      params: payloads
    })
    const data = products.data.data.map((el) => {
      return {
        id: el.id,
        name: el.description,
        desc: el.description,
        discount: el.discount,
        vendor_id: el.vendor_id,
        price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
        not_discouted_price: el.price,
        image_md: el.image.data.medium_image,
        image_sm: el.image.data.small_image,
        image_lg: el.image.data.large_image,
        sub_category: el.product_sub_category.data.name,
        sub_category_id: el.product_sub_category.data.id,
        category: el.product_sub_category.data.product_category.data.name,
        category_slug: el.product_sub_category.data.product_category.data.slug,
        stocks: el.stocks,
        slug: el.slug
      }
    })
    commit('setFilteredProducts', data)
  }
}
