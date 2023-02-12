<template>
  <div class="container my-auto mx-auto pt-32">
    <div class="lg:flex lg:justify-around text-center px-10">
      <h1 class="text text-green-600 text-2xl">
        Searching for "{{ search }}"
      </h1>
      <form class="flex justify-center" @submit.prevent="searchProducts">
        <input v-model="keyword" type="text" placeholder="Nangita ko og..." class=" search expandright py-2 appearance-none w-64 text-gray-700 rounded-l-full border-2 border-yellow-600 outline-none focus:bg-white placeholder-opacity-50 placeholder-black" autofocus>
        <button id="searchright" type="submit" class="transition ease-in duration-200 lg:flex-shrink-0  px-10 py-2 text-base rounded-full bg-yellow-600 text-white focus:outline-none hover:shadow-lg">
          <svg class="fill-current pointer-events-none text-grey-darkest inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" /></svg>
        </button>
      </form>
    </div>
    <div>
      <div v-if="products.length > 0 || promo_products.length > 0" class="pt-10 font-bold">
        <div v-if="promo_products.length > 0">
          <div class="text-2xl text-center py-10 text-green-600">
            Promo Products
          </div>
          <PromoProduct :items="promo_products" />
        </div>
        <div v-if="products.length > 0">
          <div class="text-2xl text-center py-10 text-green-600">
            Regular Products
          </div>
          <Product :items="products" />
        </div>
      </div>
      <div v-else class="py-20 flex justify-center">
        <div>
          <div class="text-lg">
            No results found, Please search another items.
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="products.length > 0 || promo_products.length > 0"
      class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
    >
      <vue-paginate
        v-model="page"
        :page-count="total_pages"
        :page-range="3"
        :margin-pages="2"
        :prev-text="'<'"
        :next-text="'>'"
        :next-class="'font-bold text-lg px-2 rounded bg-green-600 text-white'"
        :prev-class="'font-bold text-lg px-2 rounded bg-green-600 text-white'"
        :container-class="' flex justify-center px-10 py-3 shadow bg-gray-100 rounded'"
        :page-class="'px-2 border-r border-l text-green-600 text-lg font-bold'"
        :page-link-class="'focus:bg-green-600 rounded border border-transparent hover:bg-green-600 focus:text-white hover:text-white px-2'"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PromoProduct from '~/components/Product/Promo_Product.vue'
import Product from '~/components/Product/Default.vue'
export default {
  auth: false,
  components: {
    Product,
    PromoProduct
  },
  data () {
    return {
      keyword: '',
      page: 1,
      paginate: {}
    }
  },
  computed: {
    ...mapGetters('search', {
      search: 'search',
      promo_products: 'promo_products',
      products: 'products',
      total_pages: 'total_pages'
    })
  },
  watch: {
    page () {
      this.getProducts()
    }
  },
  async mounted () {
    await this.getProducts()
  },
  methods: {
    async searchProducts () {
      try {
        this.$store.commit('search/setSearch', this.keyword)
        await this.getProducts()
      } catch {
      } finally {
      }
    },
    async getProducts () {
      try {
        const payload = {
          page: this.page,
          search: this.search,
          only_available: 1
        }
        await this.$store.dispatch('search/doSearch', payload)
      } catch {
      } finally {
      }
    }
  }
}
</script>
