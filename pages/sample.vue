<template>
  <div>
    <div v-if="part1">
      <div class="flex w-full py-24 justify-center items-center">
        <label class="text-lg font-bold">Part 1</label>
      </div>
      <div class="flex w-full py-24 justify-center items-center px-24">
        <button class="bg-green-600 text-white px-4 py-4 rounded" @click="to2 ()">
          go to 2
        </button>
      </div>
    </div>
    <div v-if="part2">
      <div class="flex w-full py-24 justify-center items-center">
        <label class="text-lg font-bold">Part 2</label>
      </div>
      <div class="flex w-full py-24 justify-between items-center px-24">
        <button class="bg-gray-600 text-white px-4 py-4 rounded" @click="to1()">
          back to 1
        </button>
        <button class="bg-green-600 text-white px-4 py-4 rounded" @click="to3()">
          go to 3
        </button>
      </div>
    </div>
    <base-progress v-if="to22" :percentage="contentProgress" />
    <base-progress v-if="to33" :percentage="contentProgress1" />
    <div v-if="to22" class="flex w-full mx-auto justify-between -mt-5">
      <div class="w-1/4 flex z-10">
        <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
          <span class="text-white text-center w-full">1</span>
        </div>
      </div>
      <div class="w-1/4 flex z-10 justify-end">
        <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
          <span class="text-white text-center w-full">2</span>
        </div>
      </div>
    </div>
    <div v-if="to33" class="flex w-full mx-auto justify-between -mt-5">
      <div class="w-1/4 flex z-10">
        <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
          <span class="text-white text-center w-full">2</span>
        </div>
      </div>
      <div class="w-1/4 flex z-10 justify-end">
        <div class="w-8 h-8 bg-green-500 rounded-full text-lg flex items-center">
          <span class="text-white text-center w-full">3</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseProgress from '~/components/checkout/BaseProgress.vue'
export default {
  layout: 'blank',
  components: {
    BaseProgress
  },
  data () {
    return {
      to22: true,
      to33: false,
      part1: true,
      part2: false,
      contentProgress: 30,
      contentProgress1: 0
    }
  },
  methods: {
    to1 () {
      this.part1 = !this.part1
      this.part2 = !this.part2
      this.contentProgress -= 70
      setTimeout(() => {
        this.to22 = false
      }, 2000)
      setTimeout(() => {
        this.content1('show')
      }, 2200)
      setTimeout(() => {
        this.to33 = true
      }, 2000)
    },
    to2 () {
      this.part1 = !this.part1
      this.part2 = !this.part2
      this.contentProgress += 70
      setTimeout(() => {
        this.to22 = false
      }, 2000)
      setTimeout(() => {
        this.content('show')
      }, 2200)
      setTimeout(() => {
        this.to33 = true
      }, 2000)
    },
    content () {
      this.contentProgress1 += 30
    },
    content1 () {
      this.contentProgress1 -= 30
    }
  }
}
</script>
