<template>
  <div>
    <div v-if="itemShow" class="trans-in bg-smoke flex w-full h-full fixed z-50 pin top-0 left-0 overflow-x-hidden" @click="closeModal()">
      <div class="flex flex-col justify-center items-center w-full max-w-lg mx-auto lg:my-8 md:my-8 my-48 lg:px-0 md:px-0 px-10">
        <img
          v-lazy-load
          :src="product.image_lg"
          class="h-full w-full object-cover rounded-t-lg shadow-md bg-cover bg-center"
        >
        <div class="w-full">
          <div class="w-full bg-green-800 shadow-lg rounded-b-lg overflow-hidden">
            <div class="py-2 text-center font-bold uppercase tracking-wide text-white">
              {{ product.name }}
            </div>
            <div class="flex items-center justify-between py-2 px-3 bg-white">
              <h1 class="text-black text-lg font-bold pr-2">
                {{ moneyFormat(product.price, '₱') }}
              </h1>
              <button
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
        <span class="absolute top-0 right-0 md: mt-8 mr-8">
          <svg class="h-12 w-12 fill-current text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap items-end">
        <div v-for="(product, i) in items" :key="i" class="md:w-1/3 w-3/6 p-2 lg:w-1/6">
          <div class="flex flex-col justify-center p-2 bg-white rounded-lg shadow-lg">
            <div v-if="product.image_md" class="rounded relative overflow-hidden z-0">
              <img
                v-lazy-load
                :src="product.image_md"
                class="w-full cursor-pointer"
                @click="toggleItem(product)"
              >
              <div v-if="product.discount > 0" class="ribbon bg-red-600 text-lg font-bold text-white whitespace-no-wrap px-4">
                {{ product.discount + '%' }}
              </div>
              <div class="text-center">
                <p class="text-base uppercase text-gray-900 font-bold">
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
                <!----->
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
    non_promos: {
      get () {
        return this.$store.getters['cart/non_promos']
      },
      set (val) {
        this.$store.commit('cart/updateNonPromos', val)
      }
    }
  },
  mounted () {
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
    toggleItem (item) {
      const product = Object.assign({}, item)
      this.$store.commit('products/setProductDetail', product)
      this.itemShow = !this.itemShow
    },
    closeModal () {
      this.itemShow = !this.itemShow
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
