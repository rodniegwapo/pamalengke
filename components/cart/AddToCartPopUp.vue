<template>
  <div class="fixed dropDownCart lg:w-64 md:w-64 w-3/4 rounded">
    <div v-for="(item, index) in items" :key="index" class="p-1">
      <div class="shadow-2xl bg-white border-b-2 rounded text-gray-700 border-green-600">
        <div class="flex justify-center items-center p-2">
          <div class="flex w-full">
            <div class="flex w-1/5">
              <img
                v-lazy-load
                :src="item.src"
                class="lg:w-full md:w-full w-10 rounded object-scale-down"
              >
            </div>
            <div class="flex flex-wrap w-4/5 lg:px-2 md:px-2 px-0">
              <p class="flex w-full font-bold uppercase lg:text-base md:text-base text-xs">
                {{ item.name }}
              </p>
              <p class="flex w-full">
                {{ moneyFormat(item.price, '₱ ') }}
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
  computed: {
    items () {
      return this.$store.state.pop_up.item
    }
  }
}
</script>
<style scoped>
.dropDownCart {
  top: 105px;
}
</style>
