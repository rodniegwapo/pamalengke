<template>
  <div>
    <div class="w-full">
      <div class="sticky top-0 bg-white">
        <div class="h-16 w-full bg-green-200 flex justify-between items-center ">
          <div class="font-bold pl-8 py-4">
            <svg class="fill-current pointer-events-none text-grey-darkest h-10 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
            My Basket
          </div>
          <div class="lg:mr-24 mr-16 my-4 lg:mr-2">
            <template v-if="!this.$store.state.auth.isLoggedIn">
              <n-link to="/login" class="flex bg-green-600 hover:bg-green-900 p-2 px-4 font-bold rounded text-white">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z" /></svg>
                &nbsp;Sign in
              </n-link>
            </template>
            <!---- Diria -->
            <template v-else>
              <nuxt-link v-if="allOrders.length > 0" to="/checkout" class="flex w-full justify-center py-2 px-4 rounded-full bg-yellow-600 hover:bg-yellow-900 text-white" @click="checkout">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" /></svg>
                &nbsp;Checkout
              </nuxt-link>
            </template>
          </div>
        </div>
        <div v-if="allOrders.length <= 0" class="flex justify-between border-b p-4">
          <div>
            <p class="text-sm">
              No items in your Basket!
            </p> <!---->
          </div>
          <div class="pr-4">
            <p class="font-bold">
              ₱ 0.00
            </p> <!---->
          </div>
        </div>
        <div v-else class="flex justify-between border-b p-4">
          <div>
            <p class="text-sm font-bold">
              TOTAL AMOUNT
            </p> <!---->
          </div>
          <div class="pr-4">
            <p class="font-bold">
              {{ moneyFormat(grand_total, '₱ ') }}
            </p> <!---->
          </div>
        </div>
      </div>
      <div v-if="allOrders.length <= 0">
        <div class=" my-10">
          <div class="flex justify-center">
            <div class="w-32">
              <img alt="" class="w-full  " src="~assets/images/logo.png">
            </div>
          </div>
          <div class="p-10">
            <div v-for="(menu, index) in menus" :key="index" class="p-1 rounded text-gray-700">
              <div class="font-bold text-sm hover:border-green-600 border-b flex justify-between cursor-pointer" @click="showCat(menu.id)">
                <a class="py-1 text-green-600">{{ menu.name }}</a>
                <svg class="fill-current mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
              </div>
              <template v-if="menu.id === menu_id">
                <div v-for="cat in menu.product_categories" :key="cat.id">
                  <div class="hover:bg-green-600 hover:text-white px-2 text-sm cursor-pointer rounded w-full">
                    <nuxt-link :to="'/products/' + cat.slug" class="w-full" style="display: inline-block;">
                      {{ cat.name }}
                    </nuxt-link>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="text-center pt-4 font-bold text-sm px-4 focus:outline-none">
            <a href="" class="nuxt-link-exact-active nuxt-link-active">
              <button class="focus:outline-none p-2 rounded w-full bg-green-600 hover:bg-green-900 text-white">Start Shopping Now</button>
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="p-4 overflow-x-auto lg:text-sm md:text-sm text-xs overflow-y-auto">
          <table v-if="allOrders" class="py-1 w-full text-left">
            <tr class="w-full">
              <th>Product</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
            <tr v-for="(basket, index) in allOrders" :key="index" class="w-full">
              <td>
                <div class="lg:w-10 md:w-10 w-full">
                  <img
                    v-lazy-load
                    :src="basket.image_sm"
                    class="w-full"
                  >
                </div>
              </td>
              <td>
                <div>
                  {{ basket.name.substring(0, 15) + '...' }}
                </div>
              </td>
              <td>
                <div>
                  <input
                    :id="basket.id"
                    type="number"
                    :value="basket.quantity"
                    class="rounded border py-1 w-12 text-center border-gray-500"
                    @input="updateQuantity($event, basket)"
                  >
                </div>
              </td>
              <td>
                {{ moneyFormat(basket.price, '₱') }}
              </td>
              <td>
                <div>
                  {{ moneyFormat(basket.price * basket.quantity, '₱') }}
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="flex w-full mx-auto px-4 my-8">
          <nuxt-link to="/checkout" class="flex w-full justify-center py-2 rounded-full bg-yellow-600 hover:bg-yellow-900 text-white" @click="checkout">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            ><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" /></svg>
            &nbsp;Checkout
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userInfo: false,
      Catmodal: false,
      unclicked: true,
      view: {
        atTopOfPage: true,
        isClicked: true
      },
      menu_id: null
    }
  },
  computed: {
    ...mapGetters('pop_up', {
      modal: 'modal'
    }),
    ...mapGetters({
      menus: 'menus'
    }),
    ...mapGetters('cart', {
      promos: 'promos',
      non_promos: 'non_promos',
      grand_total: 'grand_total'
    }),
    allOrders () {
      const data = [...this.promos, ...this.non_promos]
      return data
    }
  },
  watch: {
    allOrders: {
      deep: true,
      handler () {
        if (this.allOrders.length > 0) {
          this.solveGrandTotal()
        }
      }
    }
  },
  mounted () {
    if (this.allOrders.length > 0) {
      this.solveGrandTotal()
    }
  },
  methods: {
    showCat (id) {
      this.menu_id = this.menu_id === id ? null : id
    },
    toggleModal () {
      this.$store.commit('pop_up/toggleModal', !this.modal)
    },
    checkout () {
      this.$store.commit('checkout/openBasket', true)
    },
    solveGrandTotal () {
      const total = []
      this.allOrders.map((el) => {
        total.push(el.total)
      })
      const grandTotal = total.reduce((a, b) => a + b)
      this.$store.commit('cart/pushGrandTotal', grandTotal)
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
        } else if (targetValue > item.stocks) {
          this.promos[promoItemIndex].quantity = item.stocks
          this.promos[promoItemIndex].total = this.promos[promoItemIndex].price * this.promos[promoItemIndex].quantity
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
        } else if (targetValue > item.stocks) {
          this.non_promos[nonPromoItemIndex].quantity = item.stocks
          this.non_promos[nonPromoItemIndex].total = this.non_promos[nonPromoItemIndex].price * this.non_promos[nonPromoItemIndex].quantity
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

<style>
</style>
