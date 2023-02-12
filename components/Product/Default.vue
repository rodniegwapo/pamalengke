<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap w-full justify-center items-end">
      <div v-for="(product, i) in items" :key="i" class="flex lg:w-1/4 md:w-1/3 w-1/2 justify-center p-4">
        <div class="flex flex-col justify-center p-2 rounded-lg shadow-lg mt-4 transition duration-500 ease-in- hover:bg-green-100 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-100">
          <div v-if="product.image_md" class="rounded relative overflow-hidden z-0">
            <img
              v-lazy-load
              :src="product.image_md"
              class="w-30 cursor-pointer"
              @click="toggleItem(product)"
            >
            <div v-if="product.discount > 0" class="ribbon bg-red-600 lg:text-lg md:text-lg text-sm font-bold text-white whitespace-no-wrap px-4">
              {{ product.discount + '%' }}
            </div>
            <div class="text-center">
              <p class="uppercase lg:text-lg md:text-lg text-sm text-gray-900 font-bold w-auto">
                {{ product.name }}
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
                :class="product.stocks < 1 ? 'opacity-50 cursor-not-allowed bg-red-400 hover:bg-red-400 line-through' : 'hover:bg-green-800 bg-green-500 lg:px-4 px-2'"
                class="w-full p-1 transition ease-in duration-200 uppercase text-white hover:text-white border-2 rounded-full focus:outline-none lg:text-lg md:text-base text-sm"
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
  data () {
    return {
      showValue: true,
      itemShow: false
    }
  },
  computed: {
    ...mapGetters('products', {
      product: 'product_detail'
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
      this.showValue = false
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
      this.showValue = true
    },
    decrement (item) {
      this.showValue = false
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
      this.showValue = true
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
      const id = product.vendor_id
      const tempItem = Object.assign({}, product)
      const index2 = this.non_promos.findIndex(el => el.vendor_id !== product.vendor_id)
      if (index2 === 0) {
        this.non_promos = []
      }
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
      this.$cookies.set('order_items', this.non_promos.map((el) => {
        return {
          id: el.id,
          quantity: el.quantity
        }
      }))
      this.$store.commit('pop_up/add_item', tempItem)
      this.$store.commit('cart/setVendorId', id)
      setTimeout(() => {
        this.$store.commit('pop_up/remove_item')
      }, 3000)
    },
    toggleItem (item) {
      this.$router.push('/vendor/product/' + item.slug)
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

.trans-in {
animation: trans ease 1s;
-webkit-animation: trans ease 1s;
-moz-animation: trans ease 1s;
-o-animation: trans ease 1s;
-ms-animation: trans ease 1s;
}
@keyframes trans {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes trans {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes trans {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes trans {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes trans {
0% {opacity:0;}
100% {opacity:1;}
}
</style>
