<template>
  <div>
    <div class="flex flex-wrap w-full py-20 lg:px-10 md:px-10 px-2 bg-gray-200">
      <div class="flex w-full justify-start items-left lg:block md:block hidden text-black font-bold my-4" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center">
            <nuxt-link to="/">
              Home
            </nuxt-link>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
          </li>
          <li>
            <a class="text-gray-500 uppercase" aria-current="page">
              {{ vendor_detail.company_name }}
            </a>
          </li>
        </ol>
      </div>
      <div class="flex flex-wrap w-full shadow-lg">
        <div
          :lazy-background="vendor_detail.building_photo"
          class="flex w-full h-64 justify-center bg-no-repeat rounded-t-lg object-cover bg-cocer"
          style="background-position:center"
        >
          <div class="border-4 border-green-600 lg:w-1/6 md:w-1/5 w-1/4 rounded-full overflow-hidden shadow-inner bg-white-600 absolute z-10 mt-16">
            <img
              :src="vendor_detail.avatar"
              class="object-cover w-full"
            >
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white rounded-b-lg py-6 leading-tight text-green-600">
          <div class="flex w-full justify-center items-center">
            <p class="uppercase text-4xl font-black" v-text="vendor_detail.company_name" />
          </div>
          <div class="lg:flex md:block w-full justify-between items-center border-t-2 py-2 px-10">
            <p><b>&#x20b1;&#x20b1;</b>&#x20b1; &bull; American &bull; Burgers &bull; Chicken &bull; Western &bull; Fast Food</p>
            <p>Open 6:00 AM - 11:30 PM</p>
            <p>Landline (082) 228 6236</p>
            <p v-text="vendor_detail.address" />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full bg-white rounded py-4 px-4 mt-2">
        <div class="flex w-full justify-center items-center py-10 text-green-600 text-4xl">
          Our Products
        </div>
        <div v-if="relatedProducts.length >= 1" class="flex w-full justify-center items-center">
          <Product :items="relatedProducts" />
        </div>
        <div v-else>
          <p class="text-red-600 uppercase">
            Sorry we're close for now, please keep in touch with our schedule:
          </p>
          <div v-for="(item, index) in availables" :key="index">
            <span v-text="convertDay(item.day_from) + ' to ' + convertDay(item.day_to)" />
            <span v-text="item.time_from + ' - ' + item.time_to" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex w-full rounded py-4 lg:px-10 md:px-10 px-4 bg-gray-200">
      <div class="bg-white flex flex-wrap w-full rounded-lg shadow-lg">
        <div class="flex w-full justify-center items-center py-4 text-green-600 text-2xl">
          Our Products
        </div>
        <div v-if="relatedProducts.length >= 1 && checkAvailable" class="flex w-full justify-center py-6 items-center">
          <Product :items="relatedProducts" />
        </div>
        <div v-else>
          <p class="text-red-600 uppercase">
            Sorry we're close for now, please keep in touch with our schedule:
          </p>
          <div v-for="(item, index) in availables" :key="index">
            <span v-text="convertDay(item.day_from) + ' to ' + convertDay(item.day_to)" />
            <span v-text="item.time_from + ' - ' + item.time_to" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import Product from '~/components/Product/Default.vue'
export default {
  components: {
    Product
  },
  async asyncData (app) {
    const response = await app.$axios.get('api/public/vendor-product/' + app.store.state.products.slug, {
      params: {
        include: 'office_available,products.image,products.vendor,products.product_sub_category.product_category'
      }
    })
    const data = response.data.data
    app.store.state.products.availables = data.office_available.data
    app.store.commit('products/setRelatedProducts', data.products.data)
  },
  data: () => ({
    schedule: '',
    available: false,
    showValue: true,
    itemShow: false
  }),
  computed: {
    ...mapGetters('products', {
      vendor_detail: 'vendor_detail',
      products: 'products',
      relatedProducts: 'relatedProducts',
      availables: 'availables'
    }),
    ...mapGetters({
      menus: 'menus'
    }),
    non_promos: {
      get () {
        return this.$store.getters['cart/non_promos']
      },
      set (val) {
        this.$store.commit('cart/updateNonPromos', val)
      }
    },
    checkAvailable () {
      const item = this.availables
      const day = moment().day()
      item.map((el) => {
        if (parseInt(day) > parseInt(el.day_from - 1) && parseInt(day) < parseInt(el.day_to - 1)) {
          if (moment().isAfter(moment(el.time_from, 'hh:mm a').toDate()) && moment().isBefore(moment(el.time_to, 'hh:mm a').toDate())) {
            this.available = true
          }
        }
      })
      return this.available
    }
  },
  methods: {
    convertDay (day) {
      return moment().day(day).format('dddd')
    },
    increment (item) {
      const index = this.non_promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket and new quantity is lt or et stocks
      if (index !== -1) {
        // changing the current quantity and total in basket
        this.non_promos[index].quantity++
        this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
      }
    },
    decrement (item) {
      const index = this.non_promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket
      if (index !== -1) {
        this.non_promos[index].quantity--
        this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
        // Determine if the new quantity is lt or et 0
        if (this.non_promos[index].quantity <= 0) {
          this.non_promos.splice(index, 1)
        }
      }
    },
    updateQuantity (event, item) {
      const tempItem = Object.assign({}, item)
      const targetValue = parseInt(event.target.value)
      const index = this.non_promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket
      if (index !== -1) {
        this.non_promos[index].quantity = targetValue
        if (targetValue <= 0) {
          this.non_promos.splice(index, 1)
        } else if (targetValue > item.stocks) {
          this.non_promos[index].quantity = item.stocks
          this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
        } else {
          this.non_promos[index].quantity = targetValue
          this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
        }
      } else {
        tempItem.quantity = targetValue
        tempItem.total = item.price * item.quantity
        this.non_promos.push(tempItem)
      }
    },
    inCartQuantity (item) {
      const find = this.non_promos.find(el => el.id === item.id)
      return find.quantity ? find.quantity : 0
    },
    ifInCart (item) {
      const find = this.non_promos.find(el => el.id === item.id)
      return !!find
    },
    addToBasket (product) {
      const tempItem = Object.assign({}, product)
      if (this.non_promos[0].vendor_id === product.vendor_id) {
        this.non_promos = []
      } else {
        const index = this.non_promos.findIndex(el => el.id === product.id)
        if (index !== -1) {
          this.non_promos[index].quantity++
          this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
        } else {
          tempItem.quantity = 1
          tempItem.src = product.image_md
          tempItem.vendor_id = product.vendor_id
          tempItem.total = product.price * tempItem.quantity
          this.non_promos.push(tempItem)
        }
      }
      this.$store.commit('pop_up/add_item', tempItem)
      setTimeout(() => {
        this.$store.commit('pop_up/remove_item')
      }, 3000)
    },
    showItem (item) {
      this.itemShow = !this.itemShow
      const product = Object.assign({}, item)
      this.$store.commit('products/setProductDetail', product)
    },
    closeModal () {
      this.itemShow = !this.itemShow
    }
  }
}
</script>

<style>
.bg-greensmoke {
  background: linear-gradient(90deg, rgba(56,161,105,1) 0%, rgba(56,161,105,1) 56%, rgba(56,161,105,0.8435749299719888) 76%, rgba(56,161,105,0.6054796918767507) 87%, rgba(56,161,105,0) 100%);
}
</style>
