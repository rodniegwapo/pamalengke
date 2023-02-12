<template>
  <div class="w-full">
    <div :class="view.atTopOfPage ? 'hidden' : 'block'" class="w-full transition duration-500 ease-in-out transform animated">
      <div class="w-full text-left text-gray-700">
        <div class="text-black bg-green-600 w-full px-2 py-2 hidden lg:block md:block">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <nuxt-link to="/" class="lg:block md:hidden mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <svg class="fill-current pointer-events-none text-grey-darkest w-5 h-5 inline text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" /></svg>
                <span class="lg:font-semibold tracking-tight lg:ml-1 ml-2 text-white">Home</span>
              </nuxt-link>
              <div v-for="menu in menus" :key="menu.id" class="group inline-block ml-5s">
                <a class="block mt-4 md:mt-0 lg:inline-block lg:mt-0 text-green-100 hover:text-white ml-4  cursor-pointer">
                  <span class="pr-1 flex">{{ menu.name }}</span>
                </a>
                <ul class="demo cursor-pointer mt-1 bg-smoke-green text-white rounded-sm transform list-none scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                  <li v-for="cat in menu.product_categories" :key="cat.id" class="rounded-sm relative px-3 py-1 hover:bg-green-100 hover:text-black">
                    <nuxt-link :to="'/products/' + cat.slug" class="w-full text-left flex items-center outline-none focus:outline-none">
                      <span class="pr-1 flex-1">{{ cat.name }}</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        ><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </nuxt-link>
                    <ul class="demo cursor-pointer bg-smoke-green text-white rounded-sm absolute top-0 right-0 list-none transition duration-150 ease-in-out origin-top-left min-w-32">
                      <nuxt-link v-for="sub in cat.product_sub_categories" :key="sub.id" :to="'/products/' + cat.slug + '/' + sub.id">
                        <li class="px-3 py-1 hover:bg-green-100 hover:text-black">
                          {{ sub.name }}
                        </li>
                      </nuxt-link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="search_toogle" class="w-screen h-screen style-black">
      <div class="flex justify-end p-2">
        <button @click="searchToogle()">
          <div class="font-bold px-2 border-b text-white">
            X
          </div>
        </button>
      </div>
      <div class="py-48">
        <div class="flex justify-center">
          <form @submit.prevent="searchProduct">
            <div class="lg:w-1/2 w-full mx-auto justify-end mt-3  flex  flex-row  flex-wrap">
              <input v-model="keyword" type="text" class=" text-gray-600  w-full lg:px-8 lg:text-left md:text-left text-center p-3 md:pl-6 border border-yellow-700  lg:rounded-l-full md:rounded-r-full rounded-full focus:outline-none" placeholder="Nangita ko ug...">
              <button type="submit" class="lg:mt-0 md:mt-0 mt-2 p-3 lg:absolute md:absolute lg:z-20 md:z-20 static lg:w-1/6 md:w-1/3 w-full  bg-yellow-700 border border-yellow-700 lg:rounded-r-full md:rounded-r-full rounded-full  text-white hover:bg-yellow-600 focus:outline-none">
                <span class="flex justify-center">
                  <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" /></svg>
                  Search</span>
              </button>
            </div>
          </form>
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
      keyword: '',
      isOpen: false,
      view: {
        atTopOfPage: true
      }
    }
  },
  computed: {
    ...mapGetters('pop_up', {
      search_toogle: 'search_toogle'
    }),
    ...mapGetters({
      menus: 'menus'
    })
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
      this.$store.commit('pop_up/searchToogle')
    },
    searchToogle () {
      this.$store.commit('pop_up/searchToogle')
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
.style-black {
  background: rgba(0, 0, 0, 0.8);
}
.bg-smoke-green {
  background: linear-gradient(0deg, rgba(56,161,105,0.9) 0%, rgba(56,161,105,0.9) 0%, rgba(56,161,105,0.9) 0%);
}
.dropdown:hover .dropdown-menu {
  display: block;
}
li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > a svg       { transform: rotate(-90deg) }
  li:hover > a svg { transform: rotate(-270deg) }
.group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
ul.demo {
  list-style: none;
}
ul.demo li::before {
  list-style-type: none;
  color: rgba(255,255,0,0);
}
</style>
