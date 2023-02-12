<template>
  <div>
    <div class="w-full mx-auto my-4 border-b-2 pb-4 ">
      <div class="flex flex-wrap w-full mx-auto px-2">
        <div class="w-1/4 flex">
          <div class="w-10 h-10 bg-green-500 rounded-full text-lg flex items-center">
            <span class="text-white text-center w-full">1</span>
          </div>
          <span class="py-2 px-4">My Basket</span>
        </div>
        <div class="w-1/4 flex">
          <div class="w-10 h-10 bg-green-500 rounded-full text-lg flex items-center">
            <span class="text-white text-center w-full">2</span>
          </div>
          <span class="py-2 px-4">Shipping Information</span>
        </div>
        <div class="w-1/4 flex">
          <div class="w-10 h-10 bg-green-500 rounded-full text-lg flex items-center">
            <span class="text-white text-center w-full">1</span>
          </div>
          <span class="py-2 px-4">Place Order</span>
        </div>
        <div class="w-1/4 flex">
          <div class="w-10 h-10 bg-green-500 rounded-full text-lg flex items-center">
            <span class="text-white text-center w-full">1</span>
          </div>
          <span class="py-2 px-4">Confirmation</span>
        </div>
        <div class="flex w-full mx-auto">
          <base-progress :percentage="contentProgress" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseProgress from '~/components/checkout/BaseProgress.vue'
export default {
  components: {
    BaseProgress
  },
  data () {
    return {
      contentProgress: 25
    }
  },
  methods: {
    increasePercentage () {
      if (this.contentProgress <= 75) {
        this.contentProgress += 25
      }
    },
    decreasePercentage () {
      if (this.contentProgress >= 25) {
        this.contentProgress -= 25
      }
    }
  }
}
</script>

<style>
.step1 {
  width: 80%;
  animation: step1 2s;
}
@keyframes step1 {
  0%{
    width:0%;
  }
  100%{
    width:80%
  }
}
</style>
