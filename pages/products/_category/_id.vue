<template>
  <div v-if="filter" v-cloak class="container mx-auto lg:mt-8 mt-0">
    <div class="flex flex-wrap lg:py-8 lg:pt-20 pt-10">
      <div class="sticky lg:w-1/4 md:w-1/4 md:mt-4 w-full h-auto">
        <SearchFilter
          :price-range="prices"
          :brands="filter.brands.data"
          :category="filter.name"
          class="lg:sticky lg:block md:block block py-4 px-4"
          @filterByBrand="filterByBrand"
          @filterByPrice="filterByPrice"
        />
      </div>
      <div class="flex flex-wrap content-start lg:w-3/4 md:w-3/4 w-full h-auto pt-8">
        <div class="flex w-full mt-2 ">
          <BevHeader :category="filter.name" :class-products="filter.class" />
        </div>
        <div class="flex flex-wrap content-start w-full mt-10">
          <div class="w-full">
            <template v-if="filtered_products.length > 0">
              <Product :items="filtered_products" />
              <Product v-if="loaded_products.length > 0" :items="loaded_products" />
              <div class="w-full py-2">
                <button v-if="last" class="w-full flex justify-center py-5 text-lg uppercase font-bold focus:outline-none" @click="showMoreProducts">
                  <span class="px-5">load more</span>
                  <svg
                    v-if="!loading"
                    class="transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  ><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" /></svg>
                  <svg
                    v-if="loading"
                    class="load"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z" /></svg>
                </button>
              </div>
            </template>
            <template v-else>
              <div class="w-full bg-red-600 p-5 text-center">
                <h2 class="text-white text-bold text-xl">
                  Sorry, No Products Found!
                </h2>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BevHeader from '~/components/BevHeader.vue'
import Product from '~/components/Product/Default.vue'
import SearchFilter from '~/components/SearchFilter.vue'

export default {
  auth: false,
  components: {
    BevHeader,
    SearchFilter,
    Product
  },
  data () {
    return {
      loaded_products: [],
      page: 1,
      last: true,
      loading: false,
      id: this.$route.params.id,
      prices: {},
      checked_sub_categories: [],
      checked_brands: [],
      filter: null
    }
  },
  computed: {
    ...mapGetters({
      filtered_products: 'products/filtered_products'
    })
  },
  watch: {
    checked_brands: {
      deep: true,
      handler () {
        this.$nuxt.$loading.start()
        this.getProduts()
        window.scrollTo(0, 10)
      }
    },
    prices: {
      deep: true,
      handler () {
        this.$nuxt.$loading.start()
        this.getProduts()
        window.scrollTo(0, 10)
      }
    }
  },
  async mounted () {
    await this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      this.checked_sub_categories = [this.$route.params.id]
      const result = await this.$axios.get('api/public/category-by-slug/' + this.$route.params.category, {
        params: {
          include: 'brands,product_sub_categories'
        }
      })
      this.filter = result.data.data
      this.prices = result.data.meta.price_range
      await this.getProduts()
    })
  },
  methods: {
    async showMoreProducts () {
      this.loading = true
      const products = await this.$axios.get('api/public/product', {
        params: {
          include: 'image,product_sub_category.product_category',
          limit: 24,
          page: ++this.page,
          product_category_id: this.filter.id,
          brands: this.checked_brands,
          price_from: this.prices.min_price,
          price_to: this.prices.max_price,
          only_available: 1
        }
      })
      if (products.data.meta.pagination.current_page >= products.data.meta.pagination.total_pages) {
        this.last = false
      }
      const data = products.data.data.map((el) => {
        return {
          id: el.id,
          name: el.description,
          desc: el.description,
          discount: el.discount,
          price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
          not_discouted_price: el.price,
          image_md: el.image.data.medium_image,
          image_sm: el.image.data.small_image,
          image_lg: el.image.data.large_image,
          sub_category: el.product_sub_category.data.name,
          sub_category_id: el.product_sub_category.data.id,
          category: el.product_sub_category.data.product_category.data.name,
          category_slug: el.product_sub_category.data.product_category.data.slug,
          stocks: el.stocks
        }
      })
      this.loaded_products = this.loaded_products.length > 0 ? [...this.loaded_products, ...data] : this.loaded_products = data
      this.loading = false
    },
    async getProduts () {
      await this.$store.dispatch('products/getFilteredProducts', {
        product_category_id: this.filter.id,
        product_sub_categories: this.checked_sub_categories,
        brands: this.checked_brands,
        price_from: this.prices.min_price,
        price_to: this.prices.max_price
      })
      this.$nuxt.$loading.finish()
      window.scrollTo(0, 10)
    },
    filterByBrand (value) {
      this.checked_brands = value
      window.scrollTo(0, 10)
    },
    filterByPrice (value) {
      this.newPrice = value
      window.scrollTo(0, 10)
      this.prices = {
        min_price: value[0],
        max_price: value[1]
      }
    }
  }
}
</script>

<style>
.sticky{
  position: -webkit-sticky;
  position: sticky;
  bottom: 4rem;
  align-self: flex-end;
}
.block{
  position: block;
  bottom: 4rem;
  align-self: flex-end;
}
.load {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
