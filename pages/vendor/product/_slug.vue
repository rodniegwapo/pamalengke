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
            <nuxt-link :to="'/vendor/' + product.vendor_company_slug">
              {{ product.vendor_company_name }}
            </nuxt-link>
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
      <!-- <div class="flex flex-wrap w-full rounded bg-white lg:py-4 md:py-4 lg:px-4 md:px-4 py-2 px-2">
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
          </div>
        </div>
      </div> -->
      <div class="flex w-full bg-white rounded-lg py-10 px-10">
        <div class="flex flex-wrap w-full">
          <div class="flex lg:w-1/3 md:w-1/3 w-full max-w-lg">
            <!-- <img
                  v-lazy-load
                  :src="product.image_lg"
                  class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                  > -->
            <vueMagnifier :small-img="product.image_lg" :big-img="product.image_lg" class="z-20"/>
          </div>
          <div class="flex lg:w-2/3 md:w-2/3 w-full max-w-lg h-full mx-auto md:pl-2">
            <div class="block w-full h-full items-start">
              <h3 class="text-gray-700 uppercase text-2xl font-black">
                {{ product.name }}
              </h3>
              <span class="text-red-500 mt-3 text-2xl font-bold">{{ moneyFormat(product.price, '₱') }}</span>
              <hr class="my-3">
                <div class="hungry flex w-full justify-around mt-2">
                  <label class="text-gray-700 text-sm" for="count">Description:</label>
                  <div class="selection uppercase text-center">
                    <input id="pizza" name="hungry" type="radio">
                    <label for="pizza">small</label>
                  </div>
                  <div class="selection uppercase text-center">
                    <input id="burger" name="hungry" type="radio">
                    <label for="burger">medium</label>
                  </div>
                  <div class="selection uppercase text-center">
                    <input id="bread" name="hungry" type="radio">
                    <label for="bread">large</label>
                  </div>
                </div>
              <div class="mt-2">
                <div v-if="ifInCart(product)" class="flex justify-around items-center">
                  <label class="text-gray-700 text-sm" for="count">Quantity:</label>
                    <div>
                      <button class="border-none bg-green-600 px-2 text-white rounded" @click="decrement(product)">
                        <span class="text-lg">-</span>
                      </button>
                    </div>
                    <div>
                      <input
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
                      <label class="text-gray-700 text-sm">Total:</label>&nbsp;<label class="text-red-600 font-bold text-2xl">{{ moneyFormat(product.price * inCartQuantity(product), '₱') }}</label>
                    </div>
                  </div>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex flex-wrap w-full py-2 lg:px-10 text-black items-center">
                  <nuxt-link to="/checkout" class="flex w-1/2">
                    <button
                      :disabled="product.stocks < 1"
                      :class="product.stocks < 1 ? 'opacity-50 cursor-not-allowed bg-red-400 hover:bg-red-400 line-through' : 'hover:bg-yellow-600 bg-yellow-700'"
                      class="w-full p-4 transition ease-in duration-200 uppercase text-white hover:text-white border-2 rounded-full focus:outline-none"
                      @click="addToBasket(product)"
                    >
                      <svg
                        class="h-5 w-5 inline-flex"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {{ (product.stocks > 0) ? 'Buy Now' : 'Out of stocks' }}
                    </button>
                  </nuxt-link>
                  <button
                    :disabled="product.stocks < 1"
                    :class="product.stocks < 1 ? 'opacity-50 cursor-not-allowed bg-red-400 hover:bg-red-400 line-through' : 'hover:bg-green-600 bg-green-700'"
                    class="w-1/2 p-4 transition ease-in duration-200 uppercase text-white hover:text-white border-2 rounded-full focus:outline-none"
                    @click="addToBasket(product)"
                  >
                    <svg
                      class="h-5 w-5 inline-flex"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    {{ (product.stocks > 0) ? 'Add to Basket' : 'Out of stocks' }}
                  </button>
                </div>
              </div>
              <div class="mt-3 items-center">
                <label class="text-gray-700 text-sm inline-flex focus:outline-none">Rating:</label>
                <rate :length="5" :value="3" class="z-5"/>
              </div>
              <div class="flex mt-3 items-center">
                <label class="text-gray-700 text-sm">Share this product on:</label>
                <button class="flex bg-blue-600 hover:bg-blue-500 rounded items-center shadow-lg pr-2 p-1 cursor-pointer focus:outline-none">
                  <ShareNetwork
                  network="facebook"
                  url="https://tailwindcss.com/docs/background-color#class-reference"
                  title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                  description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                  quote="The hot reload is so fast it\'s near instant. - Evan You"
                  hashtags="vuejs,vite"
                >
                  <span>
                    <svg
                      class="w-9 h-9 fill-current text-blue-800 inline-flex bg-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </span>&nbsp;<span class="text-white text-sm">Share on Facebook</span>
              </ShareNetwork>
                </button>
                <button class="flex bg-red-600 hover:bg-red-500 rounded items-center shadow-lg ml-1 pr-2 p-1 cursor-pointer focus:outline-none">
                  <ShareNetwork
                  network="instagram"
                  url="https://tailwindcss.com/docs/background-color#class-reference"
                  title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                  description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                  quote="The hot reload is so fast it\'s near instant. - Evan You"
                  hashtags="vuejs,vite"
                >
                  <span>
                    <svg
                      class="w-9 h-9 fill-current text-red-800 inline-flex bg-white rounded"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
                  </span>&nbsp;<span class="text-white text-sm">Share on Instagram</span>
              </ShareNetwork>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full bg-white rounded py-4 px-4 mt-2">
        <div class="flex w-full justify-center items-center py-10 text-green-600 text-2xl">
          Recommended For You
        </div>
        <div v-if="relatedProducts.length >= 1" class="flex w-full justify-center items-center">
          <Product :items="relatedProducts" />
        </div>
        <div v-else>
          <p class="text-red-600 uppercase">
            Products comming soon!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'vue-rate/dist/vue-rate.css'
import Product from '~/components/Product/Default.vue'
import vueMagnifier from '~/components/vue-magnifier.vue'
export default {
  components: {
    Product,
    vueMagnifier
  },
  async asyncData (app) {
    const response = await app.$axios.get('api/public/product/' + app.store.state.products.slug, {
      params: {
        include: 'image,recommended_products.image,recommended_products.vendor, recommended_products.product_sub_category.product_category'
      }
    })
    const data = response.data.data
    app.store.commit('products/setRelatedProducts', data.recommended_products.data)
  },
  data: () => ({
    showValue: true,
    itemShow: false,
    temp_value: null,
    ratings: [1, 2, 3, 4, 5]
  }),
  computed: {
    ...mapGetters('products', {
      product: 'product_detail',
      products: 'products',
      relatedProducts: 'relatedProducts'
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
      this.$cookies.set('order_items', this.non_promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
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
      this.$cookies.set('order_items', this.non_promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
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
      this.$cookies.set('order_items', this.non_promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
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
      this.$cookies.set('order_items', this.non_promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
      this.$store.commit('pop_up/add_item', tempItem)
      setTimeout(() => {
        this.$store.commit('pop_up/remove_item')
      }, 3000)
      window.scrollTo(0, 0)
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
.hungry .selection {
  margin-bottom: 1em;
}

.hungry .selection label {
  display: inline-block;
  width:8em;
  background-color: #e2e8f0;
  border-radius: 6px;
  color: #000000;
  padding: 0.5em;
  cursor: pointer;
}

.hungry .selection label:hover {
  background-color: #e53e3e;
  color: #ffffff;
}

.hungry .selection input[type=radio] {
  display: none;
}

.hungry .selection input[type=radio]:checked ~ label {
  background-color: #e53e3e;
  color: #ffffff;
}
</style>
