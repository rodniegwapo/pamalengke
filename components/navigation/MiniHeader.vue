<template>
  <div>
    <div class="flex w-full bg-green-800">
      <div class="flex w-1/2 justify-start text-left content-start px-2">
        <nuxt-link to="/">
          <img class="h-16" src="~/assets/images/logow.png">
        </nuxt-link>
      </div>
      <div class="flex w-1/2 justify-end text-right content-end py-2 text-white">
        <div class="flex flex-row-reverse">
          <button class="lg:mt-0 mt-2 flex focus:outline-none text-white mx-5 relative" @click="toggleModal()">
            <div v-if="allOrders.length > 0" class="-mr-2 z-30 cart-quantity bg-red-500 h-5 w-5 rounded-full text-white font-semibold text-sm text-center">
              {{ allOrders.length }}
            </div>
            <svg class="fill-current pointer-events-none text-white h-10 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
            <span class="hidden lg:block py-2 text-l ml-1">Basket</span>
          </button>
          <button class="flex focus:outline-none text-white" @click="logout">
            <img
              v-if="$store.state.auth.user.avatar"
              :src="$store.state.auth.user.avatar"
              class="object-cover lg:mt-2 w-8 h-8 rounded-full border border-gray-600 bg-green-600 cursor-pointer"
            >
            <svg
              v-else
              class="fill-current pointer-events-none h-10 inline"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
            </svg>
            <span class="hidden lg:block py-2 text-l ml-1 text-white">Logout</span>
          </button>
        </div>
      </div>
      <!--Basketmodal-->
      <div v-if="modal" class="kini flex w-full h-full fixed z-50 pin bg-smoke top-0 left-0 overflow-x-hidden" @click.self="toggleModal()">
        <div class="lg:w-1/3" @click.self="toggleModal()" />
        <div class="lg:w-1/3" @click.self="toggleModal()" />
        <div class="in-left bg-white lg:w-1/3 w-full h-screen overflow-auto">
          <BasketModal class="w-full" />
          <span class="absolute top-0 right-0 pt-2 px-4" @click="toggleModal">
            <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasketModal from '~/components/cart/BasketModal.vue'
export default {
  components: {
    BasketModal
  },
  data () {
    return {
      userInfo: false,
      modal: false
    }
  },
  computed: {
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
        } else {
          this.promos[promoItemIndex].quantity = targetValue
          this.promos[promoItemIndex].total = this.promos[promoItemIndex].price * this.promos[promoItemIndex].quantity
        }
      }
      if (nonPromoItems) {
        this.non_promos[nonPromoItemIndex].quantity = targetValue
        if (targetValue <= 0) {
          this.non_promos.splice(nonPromoItemIndex, 1)
        } else {
          this.non_promos[nonPromoItemIndex].quantity = targetValue
          this.non_promos[nonPromoItemIndex].total = this.non_promos[nonPromoItemIndex].price * this.non_promos[nonPromoItemIndex].quantity
        }
      }
    },
    toggleModal () {
      this.modal = !this.modal
    },
    logout () {
      this.$cookies.removeAll()
      this.$store.commit('auth/setBearerToken', '')
      this.$store.commit('auth/setLogin', false)
      this.$store.commit('auth/setAuth', {})
      this.$router.push('/')
    }
  }
}
</script>

<style>
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.8);
}
.bg-green {
  background-color: rgba(0, 0, 0, 0.8);
}
.dropdown:hover .dropdown-menu {
  display: block;
}
@-webkit-keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
@-moz-keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
@keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
.in-right {
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-name: fadeInRight;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .1s;
    -moz-animation-duration: .1s;
    -o-animation-duration: .1s;
    animation-duration: .1s;
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -o-animation-duration:.1s;
    animation-delay: .1s;
}
</style>
