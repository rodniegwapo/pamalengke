<template>
  <div>
    <!-- <Slider /> -->
    <div lazy-background="~/assets/images/pamalengke-banner.png" class="object-fit bg-cover flex-end">
      <div
        class="flex w-full mx-auto justify-center px-4 bg-smoke-green"
      >
        <div class="lg:py-56 py-24 flex flex-wrap w-full mx-auto justify-center text-center font-sans">
          <div class="flex w-full lg:text-6xl md:text-5xl text-4xl text-white font-bold justify-center text-center">
            Gusto Mamalengke pero walay Time ?
          </div>
          <div class="flex w-full px-10 mt-2 lg:text-lg text-base text-white font-semibold justify-center text-center">
            Walay Problema, Ania na ang solusyon. Ihatud sa inyung balay ang mga pagkaon og mga butang nga gikinahanglan nimo!
          </div>
          <div class="flex w-full mt-4 justify-center text-center">
            <form class="flex" @submit.prevent="searchProduct">
              <input v-model="keyword" type="text" placeholder="Nangita ko og..." class="py-2 lg:px-20 md:px-10 px-2 appearance-none w-full text-gray-700 rounded-l-full border-2 border-yellow-600 outline-none focus:bg-white placeholder-opacity-50 placeholder-black">
              <button type="submit" class="transition ease-in duration-200 lg:flex-shrink-0  px-6  text-white text-base rounded-r-full bg-yellow-600 text-white focus:outline-none hover:shadow-lg">
                <span><svg class="hidden fill-current pointer-events-none text-grey-darkest w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" /></svg> Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--
    <h1 class="text text-green-600 lg:text-4xl text-3xl text-center py-10">
      Our Hot Promos
    </h1>
    <PromoProduct :items="promos" />
    <div class="lg:block hidden container mx-auto mb-10">
      <img v-lazy-load data-src="~/assets/images/banner.jpg" alt="" title="">
    </div>-->
    <Steps />
    <div class="flex flex-wrap w-full justify-center items-center pt-2 pb-10">
      <div class="flex w-full w-full justify-center items-center">
        <h1 class="text text-green-600 lg:text-4xl text-3xl text-center py-0">
          Our Partners
        </h1>
      </div>
      <!-- <Horizontal /> -->
      <Vendor :items="vendors_profile" class="flex w-full" />
    </div>
    <div class="flex flex-wrap w-full lg:px-10 px-4 py-10 bg-gray-300">
      <div class="flex flex-wrap w-full">
        <div class="flex lg:w-1/2 w-full px-4 ">
          <div class="flex lg:flex-no-wrap md:flex-no-wrap flex-wrap w-full justify-between skewed-bg px-4 py-5 bg-white border-2 rounded-lg transition duration-500 ease-in- hover:bg-green-200 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-100">
            <div class="block w-full  z-10">
              <h2 class="text-4xl font-bold tracking-wide text-green-600">
                Become a Vendor
              </h2>
              <p class="text-green-600">
                Ikaw ba usa ka negosyo nga nanginahanglan pagpadala? Gagmayng negosyante o korporasyon, pwede mahimong usa ka Partner Vendor!
              </p>
              <nuxt-link to="/merchant_form">
                <button class="focus:outline-none bg-green-600 text-white px-4 py-2 rounded-full mt-6 shadow-lg transform hover:-translate-y-1 hover:scale-110">
                  Sign Up Now
                </button>
              </nuxt-link>
            </div>
            <img src="~assets/svg/shops.svg" class="lg:w-1/2 md:w-1/2 w-full z-10">
          </div>
        </div>
        <div class="flex lg:w-1/2 w-full px-4 lg:mt-0 mt-4">
          <div class="flex lg:flex-no-wrap md:flex-no-wrap flex-wrap w-full justify-between skewed-bg px-4 py-5 bg-white border-2 rounded-lg transition duration-500 ease-in- hover:bg-green-200 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-100">
            <div class="block w-full  z-10">
              <h2 class="text-4xl font-bold tracking-wide text-green-600">
                Apply as Rider
              </h2>
              <p class="text-green-600">
                Ang tanan nga mga bikers nag-agi sa higpit nga mga tseke sa background, pagbansay sa kaluwasan, ug mga pagtasa sa kahanas.
              </p>
              <nuxt-link to="/rider_form">
                <button class="focus:outline-none bg-green-600 text-white px-4 py-2 rounded-full mt-6 shadow-lg transform hover:-translate-y-1 hover:scale-110">
                  Sign Up Now
                </button>
              </nuxt-link>
            </div>
            <img src="~assets/svg/bike.svg" class="lg:w-1/2 md:w-1/2 w-full z-10">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Steps from '~/components/Steps.vue'
import Vendor from '~/components/Vendor/Default.vue'
export default {
  components: {
    Steps,
    Vendor
  },
  async asyncData (app) {
    console.log('trigger')
    const vendors = await app.$axios.get('api/public/vendor-product', {
      params: {
        include: 'products.image,products.product_sub_category.product_category'
      }
    })
    const data = vendors.data.data.map((el) => {
      return {
        id: el.id,
        company_name: el.company_name,
        slug: el.slug,
        avatar: el.avatar,
        address: el.address,
        building_photo: el.building_photo
      }
    })
    app.store.commit('products/setVendors', data)
  },
  data: () => ({
    keyword: '',
    page: 1,
    loaded_vendors: [],
    loading: false,
    last: true
  }),
  computed: {
    ...mapGetters({
      promos: 'products/promos',
      vendors_profile: 'products/vendors_profile'
    })
  },
  methods: {
    searchProduct () {
      this.$store.commit('search/setSearch', this.keyword)
      if (this.$router.currentRoute.path !== '/search') {
        this.$router.push('/search')
      } else {
        const payload = {
          search: this.keyword,
          page: 1,
          only_available: 1
        }
        this.$store.dispatch('search/doSearch', payload)
      }
    },
    async getVendors () {
      this.loading = true
      const vendors = await this.$axios.get('api/public/vendor-product', {
        params: {
          include: 'products.image,products.product_sub_category.product_category',
          limit: 24,
          page: ++this.page
        }
      })
      if (vendors.data.meta.pagination.current_page >= vendors.data.meta.pagination.total_pages) {
        this.last = false
      }
      const data = vendors.data.data.map((el) => {
        return {
          id: el.id,
          company_name: el.company_name,
          avatar: el.avatar
        }
      })
      this.loaded_vendors = this.loaded_vendors.length > 0 ? [...this.loaded_vendors, ...data] : this.loaded_vendors = data
      this.loading = false
    }
  }
}
</script>

<style>
.skewed-bg {
    color: #FFF;
    padding: 2em;
    position: relative;
    min-height:300px;
    overflow:hidden;
}
.skewed-bg::after {
  content: '';
  position: absolute;
  bottom: -75%; left: 0; right: 0;
  height:100%;
  background:#FFF;
  transform: skew(0deg, -9deg);
}
#banner::before {
  content: '';
  display: block;
  clear: both;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bg-smoke-green {
  background: rgba(22, 63, 41,0.8);
}

.texti {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}
.load {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
