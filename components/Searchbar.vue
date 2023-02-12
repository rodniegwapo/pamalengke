<template>
  <div class="navigation">
    <div :class="view.atTopOfPage ? 'fixed bg-black opacity-75' : 'bg-white fixed'" class=" w-full z-30 transition duration-1000 ease-in-out transform top-0 animated">
      <nav :class="view.atTopOfPage ? 'lg:py-2 lg:px-2' : 'lg:px-2'" class="flex justify-between w-full z-20 items-center text-white shadow-md">
        <div class="flex w-full">
          <!----burger menu and logo --->
          <div class="flex lg:w-1/6 md:w-1/6 w-3/6">
            <div class="z-40 lg:hidden md:hidden block  px-2 py-6" @click="toggleSideBar()">
              <svg class="fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
            </div>
            <div>
              <nuxt-link to="/" class="nuxt-link-exact-active nuxt-link-active">
                <div><img class="h-16 object-scale-down" src="~/assets/images/logo.png"></div>
              </nuxt-link>
            </div>
          </div>
          <!----search bar & icon--->
          <div class="flex w-3/6 justify-end items-center">
            <div :class="view.atTopOfPage ? 'hidden' : 'lg:block md:hidden hidden'" class="search-container">
              <form class="flex" @submit.prevent="searchProduct">
                <input v-model="keyword" type="text" placeholder="Nangita ko og..." class=" search expandright py-2 appearance-none w-64 text-gray-700 rounded-l-full border-2 border-yellow-600 outline-none focus:bg-white placeholder-opacity-50 placeholder-black" autofocus>
                <button id="searchright" type="submit" class="z-20 transition ease-in duration-200 lg:flex-shrink-0  px-10 py-2 text-base rounded-full bg-yellow-600 text-white focus:outline-none hover:shadow-lg">
                  <svg class="fill-current pointer-events-none text-grey-darkest inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" /></svg>
                </button>
              </form>
            </div>
            <div class="px-10">
              <button v-if="!view.atTopOfPage" class="focus:outline-none object-none object-center mx-2 -mr-8 text-green-600 lg:hidden" @click="searchToogle()">
                <svg class="fill-current pointer-events-none text-green-600 h-10 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" /></svg>
              </button>
            </div>
          </div>
          <!---avatar & basket----->
          <div class="flex w-1/3 justify-center items-center px-4">
            <template v-if="!this.$store.state.auth.isLoggedIn">
              <nuxt-link to="/login" class="flex focus:outline-none text-green-600 justify-end content-end items-center">
                <svg class="fill-current pointer-events-none h-10 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                </svg>
                <span class="hidden lg:block py-2 text-l ml-1">Login</span>
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link to="/profile" class="flex focus:outline-none text-green-600 justify-end content-end items-center">
                <img
                  v-if="$store.state.auth.user.avatar"
                  :src="$store.state.auth.user.avatar"
                  class="object-cover lg:mt-1 w-8 h-8 rounded-full border border-gray-600 bg-green-600 cursor-pointer"
                >
                <svg
                  v-else
                  class="fill-current pointer-events-none h-10 inline lg:mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                </svg>
                <span class="lg:block md:hidden hidden text-l font-bold py-6 ml-2">{{ this.$store.state.auth.user.first_name }}</span>
              </nuxt-link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button class="flex focus:outline-none text-green-600 justify-end content-end items-center" @click="logout">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 12h-4v-12h4v12zm4.213-10.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z" /></svg>
                <span class="lg:block md:hidden hidden py-6 ml-2">Logout</span>
              </button>
            </template>
              &nbsp;&nbsp;
            <button class="flex focus:outline-none text-green-600 justify-end content-end items-center ml-2" @click="toggleModal()">
              <div v-if="allOrders.length > 0" class="-mt-4 -mr-2 z-30 cart-quantity bg-red-500 h-5 w-5 rounded-full text-white font-semibold text-sm text-center">
                {{ allOrders.length }}
              </div>
              <svg
                class="fill-current pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              ><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
              <span class="lg:block md:hidden hidden py-6 ml-2">Basket</span>
            </button>
          </div>
          <!----end here--->
        </div>
      </nav>
      <Navbar class="fixed z-20" />
    </div>
    <div class="flex justify-end">
      <Addtocart class="z-20" />
    </div>
    <!--Categorymodal-->
    <div v-if="Catmodal" :class="[isActive ? 'left' : 'right']" class="flex w-full h-screen fixed z-50 pin top-0 left-0 overflow-x-hidden">
      <div class="w-3/4 bg-white h-screen overflow-auto">
        <div class="bg-green-700 w-full flex justify-between px-4 py-3 text-3xl font-bold sticky top-0">
          <img src="~/assets/images/logow.png" class="object-fit h-12">
          <span @click="toggleSideBar">
            <svg class="fill-current text-white mt-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
          </span>
        </div>
        <div class="py-1 font-bold text-base flex justify-start cursor-pointer px-4 py-2" @click="handleClicked">
          <svg class="fill-current mt-2 text-green-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" /></svg>
          <nuxt-link to="/" class="pt-3 text-green-700">&nbsp;HOME</nuxt-link>
        </div>
        <div class="mt-2 mb-4">
          <div v-for="(menu, index) in menus" :key="index" class="p-1 rounded text-white">
              <div class="font-bold text-base bg-green-600 flex justify-between cursor-pointer px-4 py-2" @click="showCat(menu.id)">
                <a class="py-1 text-white">{{ menu.name }}</a>
                <svg class="fill-current mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
              </div>
              <template v-if="menu.id === menu_id">
                <div v-for="cat in menu.product_categories" :key="cat.id" @click="handleClicked">
                  <div class="text-gray-900 mt-2 px-2 text-base cursor-pointer rounded w-full">
                    <nuxt-link :to="'/products/' + cat.slug" class="w-full" style="display: inline-block;">
                      {{ cat.name }}
                    </nuxt-link>
                  </div>
                </div>
              </template>
            </div>
        </div>
      </div>
      <div class="w-1/4 bg-green" @click="toggleSideBar" />
    </div>
    <!--Basketmodal-->
    <div v-if="modal" class="kini flex w-full h-full fixed z-50 pin bg-smoke top-0 left-0 overflow-x-hidden" @click.self="toggleModal()">
      <div class="lg:w-1/3 md:w-1/6" @click.self="toggleModal()" />
      <div class="lg:w-1/3 md:w-1/6" @click.self="toggleModal()" />
      <div class="left bg-white lg:w-1/3 md:w-2/3 w-full lg:pl-0 md:pl-0 ml-10 h-screen overflow-auto">
        <BasketModal class="w-full" />
      </div>
      <span class="absolute top-0 right-0 pt-2 px-4" @click="toggleModal">
        <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Addtocart from '~/components/cart/AddToCartPopUp.vue'
import Navbar from '~/components/Navbar.vue'
import BasketModal from '~/components/cart/BasketModal.vue'
export default {
  components: {
    Navbar,
    Addtocart,
    BasketModal
  },
  data () {
    return {
      userInfo: false,
      Catmodal: false,
      unclicked: true,
      hiddenMenu: false,
      keyword: '',
      isActive: true,
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
    ...mapGetters('cart', {
      promos: 'promos',
      non_promos: 'non_promos',
      grand_total: 'grand_total'
    }),
    ...mapGetters({
      menus: 'menus'
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
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    searchProduct () {
      this.$store.commit('search/setSearch', this.keyword)
      if (this.$router.currentRoute.path !== '/search') {
        this.$router.push('/search')
      } else {
        const payload = {
          search: this.keyword,
          page: 1
        }
        this.$store.dispatch('search/doSearch', payload)
      }
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
    searchToogle () {
      this.$store.commit('pop_up/searchToogle')
    },
    async search () {
      await this.$router.go('/search?keyword=' + this.keyword)
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
      this.$store.commit('pop_up/toggleModal', !this.modal)
    },
    toggleSideBar (event) {
      this.isActive = !this.isActive
      this.Catmodal = !this.Catmodal
      setTimeout(function () {
        this.Catmodal = false
      }, 500)
    },
    handleScroll () {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    },
    logout () {
      this.$cookies.removeAll()
      this.$store.commit('auth/setBearerToken', '')
      this.$store.commit('auth/setLogin', false)
      this.$store.commit('auth/setAuth', {})
      this.$router.push('/')
    },
    handleClicked () {
      setTimeout(() => this.toggleSideBar('close'), 500)
    },
    showCat (id) {
      this.menu_id = this.menu_id === id ? null : id
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
nav {
    z-index: 40
}
nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
}
.dropDownCart {
  top: 105px;
}
@media screen and (max-width: 1024px) {
  .cart-quantity {
    right: 68px;
    top: 3px;
  }
}
@media screen and (max-width: 450px) {
  .cart-quantity {
    right: 10px;
    top: 3px;
  }
}
@media screen and (max-width: 450px) {
  .hide-search {
    display: none;
  }
}
.kini {
  transition-duration: 1s;
  transition-timing-function: linear;
}
.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color:transparent;
  color: white;
}
.search {
  background-color: none;
  outline: 0;
  padding: 10px 100px 10px 15px;
  height: 100%;
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}
.search:focus {
  width: 450px; /* Bar width+1px */
  padding: 10px 10px 10px 10px;
}
.expandright {
  left: auto;
  right: 100px;
  margin-right: -20px;
  margin-top: 0;
}
.expandright:focus {
  padding: 10px 10px 10px 10px;
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
.right {
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-name: fadeInRight;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .2s;
    -moz-animation-duration: .2s;
    -o-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -o-animation-duration:.2s;
    animation-delay: .2s;
}
@-webkit-keyframes fadeInLeft {
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
@-moz-keyframes fadeInLeft {
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
@keyframes fadeInLeft {
    from {
        opacity:0;
        -webkit-transform: translatex(100px);
        -moz-transform: translatex(100px);
        -o-transform: translatex(100px);
        transform: translatex(100px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
.left {
    -webkit-animation-name: fadeInLeft;
    -moz-animation-name: fadeInLeft;
    -o-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .2s;
    -moz-animation-duration: .2s;
    -o-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -o-animation-duration:.2s;
    animation-delay: .2s;
}
.user-wrapper {
  margin-left: 0.5rem;
  top: 64px;
  width: 154px;
}
/* .user-wrapper:before {
  content: '';
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #edf2f7;
  position: absolute;
  z-index: -20;
  left: 50%;
  margin-left: -15px;
  bottom: 183px;
} */
</style>
