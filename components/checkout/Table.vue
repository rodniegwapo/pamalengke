<template>
  <div>
    <table class="w-full text-xs lg:text-sm" cellspacing="0">
      <thead>
        <tr class="h-12 uppercase">
          <th class="hidden md:table-cell" />
          <th class="text-left">
            Product
          </th>
          <th class="lg:text-right text-left pl-5 lg:pl-0">
            <span class="lg:hidden" title="Quantity">Qtd</span>
            <span class="hidden lg:inline">Quantity</span>
          </th>
          <th class="hidden text-right md:table-cell">
            Unit price
          </th>
          <th class="text-right">
            Total price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(basket, index) in allOrders" :key="index">
          <td class="hidden pb-4 md:table-cell">
            <a href="#">
              <img :src="basket.image_sm" class="w-10 rounded" alt="Thumbnail">
            </a>
          </td>
          <td>
            <a href="#">
              <p class="mb-2 md:ml-4">{{ basket.name }}</p>
              <button v-if="showRemove" class="text-gray-700 md:ml-4" @click="removeItem(basket)">
                <small>(Remove item)</small>
              </button>
            </a>
          </td>
          <td class="justify-center md:justify-end md:flex mt-6">
            <div class="w-20 h-10">
              <div class="relative flex flex-row w-full h-8">
                <input
                  type="number"
                  :disabled="canInput"
                  :value="basket.quantity"
                  class="w-full font-semibold text-center text-gray-700 outline-none focus:outline-none hover:text-black focus:text-black"
                  @input="updateQuantity($event, basket)"
                >
              </div>
            </div>
          </td>
          <td class="hidden text-right md:table-cell">
            <span class="text-sm lg:text-base font-medium">
              {{ moneyFormat(basket.price, '₱') }}
            </span>
          </td>
          <td class="text-right">
            <span class="text-sm lg:text-base font-medium">
              {{ moneyFormat(basket.price * basket.quantity, '₱') }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    canInput: {
      type: Boolean
    },
    showRemove: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters('cart', {
      promos: 'promos',
      non_promos: 'non_promos'
    }),
    allOrders () {
      const data = [...this.promos, ...this.non_promos]
      return data
    }
  },
  methods: {
    removeItem (item) {
      const promoItems = this.promos.find(el => el.id === item.id)
      const promoItemIndex = this.promos.findIndex(el => el.id === item.id)
      const nonPromoItems = this.non_promos.find(el => el.id === item.id)
      const nonPromoItemIndex = this.non_promos.findIndex(el => el.id === item.id)
      if (promoItems) {
        this.promos.splice(promoItemIndex, 1)
        this.$cookies.set('promo_order_items', this.promos)
      }
      if (nonPromoItems) {
        this.non_promos.splice(nonPromoItemIndex, 1)
        this.$cookies.set('order_items', this.non_promos)
      }
    },
    updateQuantity (event, item) {
      const targetValue = parseInt(event.target.value)
      const promoItems = this.promos.find(el => el.id === item.id)
      const promoItemIndex = this.promos.findIndex(el => el.id === item.id)
      const nonPromoItems = this.non_promos.find(el => el.id === item.id)
      const nonPromoItemIndex = this.non_promos.findIndex(el => el.id === item.id)
      // Determine if the product is found in basket
      if (promoItems) {
        this.promos[promoItemIndex].quantity = targetValue
        if (targetValue <= 0) {
          this.promos.splice(promoItemIndex, 1)
        } else {
          this.promos[promoItemIndex].quantity = targetValue
          this.promos[promoItemIndex].total = this.promos[promoItemIndex].price * this.promos[promoItemIndex].quantity
        }
        this.$cookies.set('promo_order_items', this.promos)
      }
      if (nonPromoItems) {
        this.non_promos[nonPromoItemIndex].quantity = targetValue
        if (targetValue <= 0) {
          this.non_promos.splice(nonPromoItemIndex, 1)
        } else {
          this.non_promos[nonPromoItemIndex].quantity = targetValue
          this.non_promos[nonPromoItemIndex].total = this.non_promos[nonPromoItemIndex].price * this.non_promos[nonPromoItemIndex].quantity
        }
        this.$cookies.set('order_items', this.non_promos)
      }
    }
  }
}
</script>
