<template>
  <div class="w-full flex flex-wrap lg:-py-10">
    <div class="flex lg:w-1/2 w-full justify-center">
      <div class="font-bold text-gray-800 text-2xl">
        {{ category }}
      </div>
    </div>
    <div class="flex lg:w-1/2 w-full lg:-mt-4 mt-4 justify-center">
      <div class="text-gray-700 lg:text-right lg:justify-right justify-center lg:px-4 lg:py-2 lg:-mb-2">
        <button v-for="classname in classProducts" :key="classname" class="cursor-pointer transition ease-in duration-200 focus:outline-none border-2 border-yellow-300 py-2 px-4 hover:shadow-md rounded-full text-sm">
          {{ classname }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classProducts: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      viewCategory: false,
      hideCategory: true
    }
  },
  methods: {
    toggleViewCategory () {
      this.viewCategory = !this.viewCategory
      this.hideCategory = !this.hideCategory
    }
  }
}
</script>
