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
          <li class="flex items-center">
            {{ product.category_name }}
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
          </li>
          <li>
            <a class="text-gray-500 uppercase" aria-current="page">
              {{ product.name }}
            </a>
          </li>
        </ol>
      </div>
      <!------>
      <div class="flex flex-wrap w-full rounded bg-white lg:py-4 md:py-4 lg:px-4 md:px-4 py-2 px-2">
        <div class="flex lg:w-1/3 md:w-1/3 w-full">
          <vueMagnifier :small-img="product.image_lg" :big-img="product.image_lg" />
        </div>
        <div class="flex lg:w-2/3 md:w-2/3 w-full">
          <div class="flex flex-wrap w-full text-sm">
            <div class="flex w-full bg-greensmoke py-4 px-10 text-white font-bold text-2xl uppercase">
              {{ product.name }}
            </div>
            <div class="flex w-full p-1 lg:px-10 md:px-4 px-2 text-black">
              <div v-if="product.discount > 0" class="flex w-1/2 py-2 lg:px-10 text-black items-center justify-between">
                Before:<label class="text-2xl line-through text-red-600 px-2">{{ moneyFormat(product.not_discouted_price, '₱') }}</label>
              </div>
              <div class="flex w-1/2 py-2 lg:px-10 text-black items-center justify-between">
                Available Stocks:<label class="text-2xl font-bold text-gray-400 px-2">{{ product.stocks }}</label>
              </div>
            </div>
            <div class="flex w-full p-1 lg:px-10 md:px-4 px-2 text-black">
              <div class="flex w-1/2 py-2 lg:px-10 text-black items-center justify-between">
                Now:<label class="text-2xl font-bold text-black px-2">{{ moneyFormat(product.price, '₱') }}</label>
              </div>
              <div class="flex w-1/2 py-2 lg:px-10 text-black" />
            </div>
            <div class="flex w-full p-1 lg:px-10 md:px-4 px-2 text-black">
              <div v-if="product.discount > 0" class="flex w-1/2 py-2 lg:px-10 text-black items-center justify-between">
                Discount:<label class="text-sm font-bold text-white rounded-full bg-red-600 px-2 py-2">{{ product.discount + '%' }}&nbsp;off</label>
              </div>
              <div class="flex w-1/2 py-2 lg:px-10 text-black" />
            </div>
            <div class="flex w-full py-2 lg:px-10 md:px-4 px-2 text-black">
              <div class="flex flex-wrap w-full py-2 lg:px-10 text-black items-center">
                <div v-if="ifInCart(product)" class="flex justify-around items-center">
                  <div>
                    <button class="border-none bg-green-600 px-2 text-white rounded" @click="decrement(product)">
                      <span class="text-lg">-</span>
                    </button>
                  </div>
                  <div>
                    <input
                      v-if="showValue"
                      type="number"
                      :value="inCartQuantity(product)"
                      class="rounded border py-1 w-24 text-center border-gray-500"
                      @input="updateQuantity($event, product)"
                    >
                  </div>
                  <div>
                    <button class="border-none bg-green-600 px-2 text-white rounded" @click="increment(product)">
                      <span class="text-lg">+</span>
                    </button>
                  </div>
                  <div class="flex px-3 items-center">
                    Total Amount:&nbsp;<label class="text-red-600 font-bold text-2xl">{{ moneyFormat(product.price * inCartQuantity(product), '₱') }}</label>
                  </div>
                </div>
                <button
                  v-else
                  :disabled="product.stocks < 1"
                  :class="product.stocks < 1 ? 'opacity-50 cursor-not-allowed bg-red-400 hover:bg-red-400 line-through' : 'hover:bg-green-800 bg-green-500'"
                  class="w-full p-4 transition ease-in duration-200 uppercase text-white hover:text-white border-2 rounded-full focus:outline-none"
                  @click="addToBasket(product)"
                >
                  {{ (product.stocks > 0) ? 'Add to cart' : 'Out of stocks' }}
                </button>
              </div>
            </div>
            <div class="flex w-full py-2 lg:px-10 md:px-4 px-2 text-black">
              <img
                v-lazy-load
                :src="product.image_sm"
                class="object-cover"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full bg-white rounded py-4 px-4 mt-2">
        <div class="flex w-full justify-center items-center py-10 text-green-600 text-2xl">
          Recommended For You
        </div>
        <div class="flex w-full justify-center items-center">
          <Promo :items="relatedPromoProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Promo from '~/components/Product/Promo_Product.vue'
import vueMagnifier from '~/components/vue-magnifier.vue'
export default {
  components: {
    Promo,
    vueMagnifier
  },
  async asyncData (app) {
    const response = await app.$axios.get('api/public/promo-product/' + app.store.state.products.slug, {
      params: {
        include: 'image,recommended_promo_products.image, recommended_promo_products.promo_product_category'
      }
    })
    const data = response.data.data
    app.store.commit('products/setRelatedPromoProducts', data.recommended_promo_products.data)
  },
  data: () => ({
    showValue: true,
    itemShow: false
  }),
  computed: {
    ...mapGetters('products', {
      product: 'product_detail',
      products: 'products',
      relatedPromoProducts: 'relatedPromoProducts'
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
    }
  },
  methods: {
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
      const index = this.non_promos.findIndex(el => el.id === product.id)
      if (index !== -1) {
        this.non_promos[index].quantity++
        this.non_promos[index].total = this.non_promos[index].price * this.non_promos[index].quantity
      } else {
        tempItem.quantity = 1
        tempItem.src = product.image_md
        tempItem.total = product.price * tempItem.quantity
        this.non_promos.push(tempItem)
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
