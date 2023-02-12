<template>
  <div class="w-full flex-wrap text-sm lg:text-base md:text-sm">
    <div class="mx-auto w-full flex flex-wrap text-center py-6 mt-6 lg:mt-0">
      <h1 class=" mx-auto flex text-center font-semibold text-lg text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 0l9 15.094v5.906l4 3v-8.906l9-15.094h-22zm18.479 2l-2.981 5h-8.996l-2.981-5h14.958z" /></svg>
        Search Filter
      </h1>
    </div>
    <div class="lg:block md:block hidden mx-auto w-full text-center flex flex-wrap justify-center bg-green-600 py-2">
      <h1 class="mx-auto text-center font-semibold text-lg text-white">
        By Brands
      </h1>
      <button v-if="hideCategory" class="md:hidden block text-white text sm px-4" @click="toggleViewCategory">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
      </button>
      <button v-if="viewCategory" class="md:hidden block text-white text sm px-4" @click="toggleViewCategory">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
      </button>
    </div>
    <!---mobile-->
    <div class="lg:hidden md:hidden block flex w-full overflow-auto">
      <div v-for="brand in brands" :key="brand.id" class="inline-flex p-1">
        <div class="flex border-2 border-green-600 px-4 py-2 rounded-full justify-center items-center">
          <label class="custom-label flex">
            <div class="border-2 rounded-full bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
              <input v-model="selectedBrand" :value="brand.id" type="checkbox" class="hidden">
              <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
                <g
                  fill="none"
                  stroke-width="none"
                  stroke-miterlimit="10"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode:normal"
                >
                  <path d="M0 172V0h172v172z" />
                  <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1" /></g>
              </svg>
            </div>
            <span class="select-none whitespace-no-wrap">{{ brand.name }}</span>
          </label>
        </div>
      </div>
    </div>
    <!---desktop/ tablet-->
    <div v-if="hideCategory" class="lg:block md:block hidden mx-auto lg:max-w-xs md:max-w-xs w-full border-2 border-green-600">
      <div class="mx-auto max-w-xs px-4 py-2 font-semibold">
        {{ category }}
      </div>
      <hr>
      <div v-for="brand in brands" :key="brand.id" class="mx-auto max-w-xs text-left flex flex-wrap justify-start lg:px-10 md:px-4 py-2">
        <label class="custom-label flex cursor-pointer">
          <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
            <input v-model="selectedBrand" :value="brand.id" type="checkbox" class="hidden">
            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
              <g
                fill="none"
                stroke-width="none"
                stroke-miterlimit="10"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode:normal"
              >
                <path d="M0 172V0h172v172z" />
                <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1" /></g>
            </svg>
          </div>
          <span class="select-none">{{ brand.name }}</span>
        </label>
      </div>
    </div>
    <div class="mx-auto lg:max-w-xs md:max-w-xs w-full text-center flex flex-wrap justify-center bg-green-600 py-2 lg:mt-0 md:mt-0 mt-2">
      <h1 class="mx-auto text-center font-semibold text-lg text-white">
        By Price
      </h1>
    </div>
    <div class="lg:py-4 py-2 lg:px-6 px-4 border-2 border-green-600 text-black">
      <vue-slider
        v-model="priceMinMax"
        :enable-cross="false"
        :tooltip="'always'"
        :dot-size="18"
        :height="6"
        :min-range="priceMinMax[0]"
        :max-range="priceMinMax[1]"
        @change="filterByPrice"
      />
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  props: {
    brands: {
      type: Array,
      required: true
    },
    priceRange: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      active_el: 0,
      viewCategory: false,
      hideCategory: true,
      selectedBrand: [],
      priceMinMax: [parseInt(this.priceRange.min_price), parseInt(this.priceRange.max_price)]
    }
  },
  watch: {
    selectedBrand: {
      deep: true,
      handler () {
        this.$emit('filterByBrand', this.selectedBrand)
        window.scrollTo(0, 10)
      }
    }
  },
  mounted () {
    window.scrollTo(0, 10)
  },
  methods: {
    toggleViewCategory () {
      this.viewCategory = !this.viewCategory
      this.hideCategory = !this.hideCategory
      window.scrollTo(0, 0)
    },
    filterByPrice: _.debounce(function () {
      this.$emit('filterByPrice', this.priceMinMax)
      window.scrollTo(0, 10)
    }, 500),
    activate (el) {
      this.active_el = el
    }
  }
}
</script>
<style>
.custom-label input:checked + svg {
    display: block !important;
}
.vue-slider-process {
  background-color: #38a169;
}

.active {
  color:#38a169;
  font-weight:bold;
}
</style>
