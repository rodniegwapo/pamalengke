<template>
  <div>
    <div class="bg-gray-900 h-auto lg:h-32 lg:text-base text-xs justify-center text-gray-500 sticky">
      <div class="flex flex-wrap mx-auto justify-end px-10 py-4">
        <div class="flex lg:w-1/4 w-full" />
        <div class="flex lg:w-3/4 w-full mx-auto justify-end">
          <div class="flex w-full max-w-auto justify-end">
            <span class="flex lg:block md:block hidden text-white mt-10 px-4">Must have it? We’ve got it.</span>
            <nuxt-link to="/">
              <button class="flex justify-center w-full px-10 lg:py-3 md:py-3 py-2 lg:mt-6 md:mt-6 mt-2 tracking-wider font-medium text-sm text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none" @click="contentProgress = 0">
                <svg
                  class="fill-current w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                ><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
                <span class="ml-2 mt-5px">Continue Shopping</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('checkout', {
      contentProgress: 'contentProgress'
    })
  }
}
</script>
