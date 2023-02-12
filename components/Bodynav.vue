<template>
  <div>
    <nav class="flex flex-wrap bg-green-600 text-white px-4 items-center text-center">
      <div class="w-full lg:w-1/6 h:12 py-2">
        <a href="/beverage"><button class="focus:outline-none hover:text-white hover:font-bold hover:underline hovertext-lg">
          Beverages
        </button></a>
      </div>
      <div class="w-full lg:w-1/6 h:12 py-2">
        <button class="focus:outline-none hover:text-white hover:font-bold hover:underline hover:text-lg">
          Bread/Bakery
        </button>
      </div>
      <div class="w-full lg:w-1/6 h:12 py-2">
        <button class="focus:outline-none hover:text-white hover:font-bold hover:underline hover:text-lg">
          Canned/Jarred Goods
        </button>
      </div>
      <div class="w-full lg:w-1/6 h:12 py-2">
        <button class="focus:outline-none hover:text-white hover:font-bold hover:underline hover:text-lg">
          Dry Goods
        </button>
      </div>
      <div class="w-full lg:w-1/6 h:12 py-2">
        <button class="focus:outline-none hover:text-white hover:font-bold hover:underline hover:text-lg">
          Frozen Foods
        </button>
      </div>
      <div class="w-full lg:w-1/6 h:12 py-2">
        <button class="focus:outline-none hover:text-white hover:font-bold hover:underline hover:text-lg">
          Produce
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleModal () {
      this.modal = !this.modal
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
