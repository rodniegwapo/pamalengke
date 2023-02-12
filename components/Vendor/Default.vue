<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap w-full justify-center">
      <div v-for="(vendors, i) in items" :key="i" class="flex w-1/4 justify-center p-4">
        <div v-if="vendors.avatar" class="flex flex-col justify-center p-2 rounded-lg shadow-lg bg-green-600 mt-4 transition duration-500 ease-in- hover:shadow-2xl transform hover:-translate-y-1 hover:scale-100">
          <div class="rounded relative overflow-hidden z-0">
            <img
              v-lazy-load
              :src="vendors.avatar"
              class="w-30 cursor-pointer"
              @click="toggleItem(vendors)"
            >
            <div class="text-center py-2">
              <p class="uppercase text-white font-bold w-auto">
                {{ vendors.company_name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toggleItem (item) {
      this.$router.push('/vendor/' + item.slug)
      this.$store.commit('products/setSlug', item.slug)
      this.$store.commit('products/setVendorDetail', item)
    }
  }
}
</script>
