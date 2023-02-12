<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-wrap items-end items-start">
        <div v-for="product in items" :key="product.id" class="px-5">
          <div class="flex flex-col justify-center p-2 bg-white rounded-lg shadow-lg">
            <div v-if="product.image_md" class="rounded relative overflow-hidden z-0">
              <img
                v-lazy-load
                :src="product.image_md"
                class="w-full cursor-pointer"
                @click="togglePromo(product)"
              >
              <div v-if="product.discount > 0" class="ribbon bg-red-600 text-lg font-bold text-white whitespace-no-wrap px-4">
                {{ product.discount + '%' }}
              </div>
              <div class="text-center">
                <p class="text-base uppercase text-gray-900 font-bold">
                  {{ product.name }}
                </p>
                <p class="uppercase text-xs text-gray-400">
                  {{ product.desc }}
                </p>
              </div>
            </div>
            <div class="prod-info grid gap-5">
              <div class="items-center text-center text-green-900">
                <div v-if="product.discount > 0" class="flex justify-around">
                  <p class="text-md pt-1 line-through text-red-600">
                    {{ moneyFormat(product.not_discouted_price, '₱') }}
                  </p>
                  <p class="font-bold text-xl">
                    {{ moneyFormat(product.price, '₱') }}
                  </p>
                </div>
                <p v-else class="font-bold text-xl">
                  {{ moneyFormat(product.price, '₱') }}
                </p>
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
                </div>
                <button
                  v-else
                  :disabled="product.stocks < 1"
                  :class="product.stocks < 1 ? 'opacity-50 cursor-not-allowed bg-red-400 hover:bg-red-400 line-through' : 'hover:bg-green-800 bg-green-500'"
                  class="w-full p-1 transition ease-in duration-200 uppercase text-white hover:text-white border-2 rounded-full focus:outline-none"
                  @click="addToBasket(product)"
                >
                  {{ (product.stocks > 0) ? 'Add to cart' : 'Out of stocks' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    showValue: true,
    itemShow: false
  }),
  computed: {
    ...mapGetters('products', {
      product: 'product_detail'
    }),
    promos: {
      get () {
        return this.$store.getters['cart/promos']
      },
      set (val) {
        this.$store.commit('cart/updatePromos', val)
      }
    }
  },
  methods: {
    increment (item) {
      this.showValue = false
      const index = this.promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket and new quantity is lt or et stocks
      if (index !== -1) {
        // changing the current quantity and total in basket
        this.promos[index].quantity++
        this.promos[index].total = this.promos[index].price * this.promos[index].quantity
      }
      this.$cookies.set('promo_order_items', this.promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
      this.showValue = true
    },
    decrement (item) {
      this.showValue = false
      const index = this.promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket
      if (index !== -1) {
        this.promos[index].quantity--
        this.promos[index].total = this.promos[index].price * this.promos[index].quantity
        // Determine if the new quantity is lt or et 0
        if (this.promos[index].quantity <= 0) {
          this.promos.splice(index, 1)
        }
      }
      this.$cookies.set('promo_order_items', this.promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
      this.showValue = true
    },
    updateQuantity (event, item) {
      const tempItem = Object.assign({}, item)
      const targetValue = parseInt(event.target.value)
      const index = this.promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket
      if (index !== -1) {
        this.promos[index].quantity = targetValue
        if (targetValue <= 0) {
          this.promos.splice(index, 1)
        } else if (targetValue > item.stocks) {
          this.promos[index].quantity = item.stocks
          this.promos[index].total = this.promos[index].price * this.promos[index].quantity
        } else {
          this.promos[index].quantity = targetValue
          this.promos[index].total = this.promos[index].price * this.promos[index].quantity
        }
      } else {
        tempItem.quantity = targetValue
        tempItem.total = item.price * item.quantity
        this.promos.push(tempItem)
      }
      this.$cookies.set('promo_order_items', this.promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
    },
    inCartQuantity (item) {
      const find = this.promos.find(el => el.id === item.id)
      return find.quantity ? find.quantity : 0
    },
    ifInCart (item) {
      const find = this.promos.find(el => el.id === item.id)
      return !!find
    },
    addToBasket (product) {
      const tempItem = Object.assign({}, product)
      const index = this.promos.findIndex(el => el.id === product.id)
      if (index !== -1) {
        this.promos[index].quantity++
        this.promos[index].total = this.promos[index].price * this.promos[index].quantity
      } else {
        tempItem.quantity = 1
        tempItem.src = product.image_md
        tempItem.total = product.price * tempItem.quantity
        this.promos.push(tempItem)
        this.$cookies.set('promo_order_items', this.promos.map((el) => {
          return {
            id: el.id,
            quantity: el.quantity
          }
        }))
      }
      this.$store.commit('pop_up/add_item', tempItem)
      setTimeout(() => {
        this.$store.commit('pop_up/remove_item')
      }, 3000)
    },
    togglePromo (item) {
      this.$router.push('/promo/' + item.slug)
      this.$store.commit('products/setSlug', item.slug)
      this.$store.commit('products/setProductDetail', item)
    }
  }
}
</script>
<style>
.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 114px;
  height: 26px;
  text-align: center;
  margin-right: -28px;
  margin-top: 16px;
  transform: rotate(45deg);
}
</style>
