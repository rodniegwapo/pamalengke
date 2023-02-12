<template>
  <div>
    <div v-if="modal" class="animated fadeIn fixed z-50 overflow-auto bg-smoke flex items-center justify-center h-screen">
      <Otp />
      <span class="absolute top-0 right-0 pt-4 px-4" @click="toggleModal">
        <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
      </span>
    </div>
    <!----Order Details will show on md and sm screens------>
    <div v-if="allOrders.length > 0" :class="view.atTopOfPage ? 'tago lg:hidden block' : 'lg:hidden block sticky z-50 top-0'" class="diara flex flex-wrap w-full bg-green-600 text-white text-base px-4 py-2">
      <div class="flex w-full font-bold">
        Grand Total: {{ moneyFormat((grand_total + delivery_charge), '₱ ') }}
      </div>
      <div class="flex w-full justify-between font-semibold">
        <div class="flex">
          Delivery Date: {{ date }}
        </div>
        <div class="flex cursor-pointer" @click="toggleOrderDetails">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" /></svg>
        </div>
      </div>
    </div>
    <!-----Order Details will show as a modal------>
    <div v-if="hiddenOrder" class="w-full animated fadeIn fixed top-0 z-50 md:px-20 px-4 overflow-auto bg-smoke flex items-center justify-center h-screen" @click="toggleOrderDetails">
      <OrderDetails class="bg-white rounded-lg" />
    </div>
    <div class="mt-4 w-full mx-auto">
      <div class="flex flex-wrap w-full mx-auto px-2">
        <hr class="pb-6 mt-6">
        <div class="flex flex-wrap w-full mx-auto justify-center mb-10">
          <div class="flex lg:w-2/3 w-full">
            <!-- Basket -->
            <div v-if="step === 1" class="flex flex-wrap mx-auto justify-center lg:px-10 px-6 mb-10">
              <div class="flex flex-wrap w-full mx-auto justify-center items-center py-2 bg-white mb-4">
                <div class="flex w-full justify-center items-center">
                  <img src="~/assets/images/logo.png" class="object-fit h-16">
                </div>
                <div class="flex w-full mx-auto justify-between px-6">
                  <div class="w-1/2 flex z-10">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">1</span>
                    </div>
                  </div>
                  <div class="w-1/2 flex z-10 justify-end">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">2</span>
                    </div>
                  </div>
                </div>
                <div class="flex w-full mx-auto -mt-6 z-0 px-8">
                  <base-progress :percentage="contentProgress" />
                </div>
                <div class="flex w-full mx-auto mt-2 lg:text-base text-xs">
                  <div class="w-1/2 text-left">
                    My Basket
                  </div>
                  <div class="w-1/2 text-right">
                    Shipping Information
                  </div>
                </div>
              </div>
              <Basket v-model="inputed_note" class="flex w-full bg-white shadow-lg px-4 rounded-lg" />
              <div class="max-w-auto pb-2">
                <button :disabled="grand_total < 500" :class="grand_total < 500 ? 'opacity-50 cursor-not-allowed' : ''" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none" @click="toShip">
                  <svg
                    aria-hidden="true"
                    data-prefix="far"
                    data-icon="credit-card"
                    class="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  ><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                  <span class="ml-2 mt-5px">Continue Checkout</span>
                </button>
              </div>
              <div v-if="grand_total < 500" class="w-full bg-gray-200 p-5 rounded flex flex-wrap text-lg text-red-600 fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" /></svg>
                <p class="px-2">
                  Please Take Note: ₱500 is our minimum order!
                </p>
              </div>
            </div>
            <!----Ship Info -->
            <div v-if="step === 2" class="flex flex-wrap mx-auto justify-center lg:px-10 px-2 mb-10">
              <div class="flex flex-wrap w-full mx-auto justify-center items-center py-2 bg-white mb-4">
                <div class="flex w-full justify-center items-center">
                  <img src="~/assets/images/logo.png" class="object-fit h-16">
                </div>
                <div class="flex w-full mx-auto justify-between px-6">
                  <div class="w-1/2 flex z-10">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">2</span>
                    </div>
                  </div>
                  <div class="w-1/2 flex z-10 justify-end">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">3</span>
                    </div>
                  </div>
                </div>
                <div class="flex w-full mx-auto -mt-6 z-0 px-8">
                  <base-progress :percentage="contentProgress" />
                </div>
                <div class="flex w-full mx-auto mt-2 lg:text-base text-xs">
                  <div class="w-1/2 text-left">
                    Shipping Information
                  </div>
                  <div class="w-1/2 text-right">
                    Review Order
                  </div>
                </div>
              </div>
              <ShipContactInfo class="flex w-full bg-white shadow-lg px-4 rounded-lg" />
              <div class="flex flex-wrap w-full mx-auto lg:justify-between justify-center lg:px-8 lg:text-base text-sm">
                <div class="flex w-full px-4">
                  <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none" @click="backBasket">
                    <svg
                      class="fill-current w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    ><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                    <span class="ml-2 mt-5px">Return to Basket</span>
                  </button>
                </div>
              </div>
            </div>
            <!----Ship Final -->
            <div v-if="step === 3" class="flex flex-wrap mx-auto justify-center lg:px-10 px-6 mb-10">
              <div class="flex flex-wrap w-full mx-auto justify-center items-center py-2 bg-white mb-4">
                <div class="flex w-full justify-center items-center">
                  <img src="~/assets/images/logo.png" class="object-fit h-16">
                </div>
                <div class="flex w-full mx-auto justify-between px-6">
                  <div class="w-1/2 flex z-10">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">3</span>
                    </div>
                  </div>
                  <div class="w-1/2 flex z-10 justify-end">
                    <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                      <span class="text-white text-center w-full">4</span>
                    </div>
                  </div>
                </div>
                <div class="flex w-full mx-auto -mt-6 z-0 px-8">
                  <base-progress :percentage="contentProgress" />
                </div>
                <div class="flex w-full mx-auto mt-2 lg:text-base text-xs">
                  <div class="w-1/2 text-left">
                    Review Order
                  </div>
                  <div class="w-1/2 text-right">
                    Confirmation
                  </div>
                </div>
              </div>
              <ShipFinalDetails class="flex w-full bg-white shadow-lg px-4 rounded-lg" />
              <div class="flex flex-wrap w-full mx-auto lg:justify-between justify-center lg:px-8 lg:text-base text-sm">
                <div class="flex w-full px-2">
                  <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none" @click="backShip">
                    <svg
                      class="fill-current w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    ><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                    <span class="ml-2 mt-5px">Return to Ship Info</span>
                  </button>
                </div>
                <div class="flex w-full px-2">
                  <button :class="btnLoading ? 'cursor-not-allowed': ''" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none" @click="toConfirm">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      class="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    ><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                    <span v-if="btnLoading">
                      <pulse-loader class="inline-flex" :btn-loading="btnLoading" :color="color" :size="size" />
                    </span>
                    <span v-else class="ml-2 mt-5px">Place Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 lg:block hidden">
            <OrderDetails v-if="step < 4" class="kina mt-24" />
          </div>
        </div>
        <!----Confirmation-->
        <div v-if="step === 4" class="flex flex-wrap mx-auto justify-center px-10 mb-10">
          <div class="flex flex-wrap w-full mx-auto justify-center items-center py-2 bg-white mb-4">
            <div class="flex w-full justify-center items-center">
              <img src="~/assets/images/logo.png" class="object-fit h-16">
            </div>
            <div class="flex w-full mx-auto justify-between px-6">
              <div class="w-1/2 flex z-10">
                <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                  <span class="text-white text-center w-full">3</span>
                </div>
              </div>
              <div class="w-1/2 flex z-10 justify-end">
                <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
                  <span class="text-white text-center w-full">4</span>
                </div>
              </div>
            </div>
            <div class="flex w-full mx-auto -mt-6 z-0 px-8">
              <base-progress :percentage="contentProgress" />
            </div>
            <div class="flex w-full mx-auto mt-2 lg:text-base text-xs">
              <div class="w-1/2 text-left">
                Review Order
              </div>
              <div class="w-1/2 text-right">
                Confirmation
              </div>
            </div>
          </div>
          <ShipConfirmed class="flex w-full" />
          <div class="flex w-full max-w-auto justify-center">
            <nuxt-link to="/profile">
              <button class="flex justify-center w-full px-10 py-3 mt-6 tracking-wider font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                <svg
                  class="fill-current w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                ><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
                <span class="ml-2 mt-5px">Go to My Profile</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Basket from '~/components/checkout/Basket.vue'
import ShipContactInfo from '~/components/checkout/ShipContactInfo.vue'
import ShipFinalDetails from '~/components/checkout/ShipFinalDetails.vue'
import BaseProgress from '~/components/checkout/BaseProgress.vue'
import ShipConfirmed from '~/components/checkout/ShipConfirmed.vue'
import OrderDetails from '~/components/checkout/OrderDetails.vue'
import Otp from '~/components/Otp.vue'
export default {
  middleware: 'auth',
  layout: 'checkout',
  components: {
    Basket,
    ShipContactInfo,
    ShipFinalDetails,
    BaseProgress,
    ShipConfirmed,
    OrderDetails,
    Otp,
    PulseLoader
  },
  data () {
    return {
      contentProgress1: 30,
      contentProgress2: 0,
      contentProgress3: 0,
      imBasket: true,
      imShipping: false,
      imReview: false,
      hiddenOrder: false,
      inputed_note: '',
      btnLoading: false,
      openBasket: true,
      openShip: false,
      openPlace: false,
      openConfirm: false,
      Confirmed: true,
      date: '',
      view: {
        atTopOfPage: true
      }
    }
  },
  computed: {
    ...mapGetters('checkout', {
      contentProgress: 'contentProgress',
      step: 'step',
      modal: 'modal'
    }),
    ...mapGetters('cart', {
      grand_total: 'grand_total',
      delivery_charge: 'delivery_charge',
      promos: 'promos',
      non_promos: 'non_promos'
    }),
    ...mapGetters('order', {
      orders: 'orders'
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
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeCreate () {
    this.$store.commit('checkout/updateStep', 1)
    this.$store.commit('checkout/openContentProgress', 30)
  },
  async mounted () {
    await this.getDate()
    if (this.allOrders.length > 0) {
      this.solveGrandTotal()
    }
  },
  methods: {
    getDate () {
      const date = moment().format('a')
      if (date === 'am') {
        this.date = moment().format('MMMM Do YYYY') + ' 1:00 pm - 5:00 pm'
      } else {
        this.date = moment().add(1, 'days').format('MMMM Do YYYY') + ' 8:00 am - 11:00 am'
      }
    },
    solveGrandTotal () {
      const total = []
      this.allOrders.map((el) => {
        total.push(el.total)
      })
      const grandTotal = total.reduce((a, b) => a + b)
      this.$store.commit('cart/pushGrandTotal', grandTotal)
    },
    toShip () {
      this.$store.commit('checkout/note', this.inputed_note)
      this.$store.commit('checkout/updateStep', this.step + 1)
      this.$store.commit('checkout/openContentProgress', this.contentProgress + 25)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    backBasket () {
      this.$store.commit('checkout/updateStep', this.step - 1)
      this.$store.commit('checkout/openContentProgress', this.contentProgress - 25)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    toPlace () {
      this.$store.commit('checkout/openContentProgress', this.contentProgress + 25)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    backShip () {
      this.$store.commit('checkout/updateStep', this.step - 1)
      this.$store.commit('checkout/openContentProgress', this.contentProgress - 25)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async toConfirm () {
      try {
        this.btnLoading = true
        if (!this.$store.state.auth.user.otp) {
          this.$store.commit('checkout/toggleModal', true)
          await this.$axios.post('api/authorized/customer/send-code', {
            contact_number: this.orders.contact_no
          })
        } else {
          await this.$axios.post('api/authorized/customer/order', this.orders)
          this.Confirmed = false
          this.promos.length = 0
          this.non_promos.length = 0
          this.$cookies.set('order_items', this.non_promos)
          this.$cookies.set('promo_order_items', this.promos)
          this.$store.commit('checkout/updateStep', this.step + 1)
          this.$store.commit('checkout/openContentProgress', this.contentProgress + 30)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
        await this.$axios.get('api/authorized/auth-details')
      } catch (error) {
        // console.log(error)
      } finally {
        this.btnLoading = false
      }
    },
    toggleModal () {
      this.$store.commit('checkout/toggleModal', false)
    },
    toggleOrderDetails () {
      this.hiddenOrder = !this.hiddenOrder
    },
    handleScroll () {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    }
  }
}
</script>

<style>
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.5);
}
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
.kina {
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
}
@-webkit-keyframes dara {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes dara {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes dara {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes dara {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
.diara {
  -webkit-animation: dara 1s ; /* Safari 4+ */
  -moz-animation:    dara 1s ; /* Fx 5+ */
  -o-animation:      dara 1s ; /* Opera 12+ */
  animation:         dara 1s ; /* IE 10+, Fx 29+ */
}
</style>
