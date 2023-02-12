<template>
  <div class="block clear-both">
    <!---alert--->
    <div v-if="showThis" class="alert-toast fixed shadow-2xl top-0 right-0 m-8 mt-24 z-50 w-5/6 md:w-full max-w-sm">
      <input id="footertoast" type="checkbox" class="hidden">

      <label :class="dynamic_class" class="close cursor-pointer flex items-center justify-between w-full p-2 h-24 rounded shadow-lg text-white" title="close" for="footertoast" @click="toggleThis">
        {{ message }}
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </label>
    </div>
    <!-- newsletter -->
    <div
      id="newsletter"
      class="w-full relative bg-gray-500  bg-no-repeat bg-cover"
      lazy-background="~/assets/images/gulay.jpg"
    >
      <div class="py-20 relative z-10 flex  flex-col  flex-wrap  justify-center  content-center">
        <div class="w-full px-10 py-4">
          <div class=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
            Subscribe to our Newsletter!
          </div>
          <div class=" m-0  p-0  text-xl  text-white  antialiased  text-center">
            To get a chance to Receive Promos and Free Delivery
          </div>
          <form @submit.prevent="addEmailSubscribe">
            <div class="lg:w-1/2 w-full mx-auto justify-end mt-3  flex  flex-row  flex-wrap">
              <input v-model="email" type="text" class=" text-gray-600  w-full lg:px-8 lg:text-left md:text-left text-center p-3 md:pl-6 border border-yellow-700  lg:rounded-l-full md:rounded-r-full rounded-full focus:outline-none" placeholder="Email Address">
              <button :class="btnLoading ? 'cursor-not-allowed': ''" type="submit" class="lg:mt-0 md:mt-0 mt-2 p-3 lg:absolute md:absolute lg:z-20 md:z-20 static lg:w-1/6 md:w-1/3 w-full  bg-yellow-700 border border-yellow-700 lg:rounded-r-full md:rounded-r-full rounded-full  text-white hover:bg-yellow-600 focus:outline-none">
                <span v-if="btnLoading">
                  <pulse-loader class="inline-flex" :btn-loading="btnLoading" />
                </span>
                <span v-else class="ml-2 mt-5px">Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-black h-auto lg:h-52 items-center justify-center text-gray-500">
      <div class="container mx-auto">
        <div class="flex flex-wrap w-full lg:justify-around md:justify-around lg:p-10 md:p-4 p-4">
          <div class="lg:w-1/4 md:w-1/4 w-1/2 lg:p-5 md:p-5 p-2">
            <div class="font-bold text-lg">
              Information
            </div>
            <p>
              <nuxt-link to="/terms" class="hover:text-white">
                Terms & Conditions
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/privacy" class="hover:text-white">
                Privacy Policy
              </nuxt-link>
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/4 w-1/2 lg:p-5 md:p-5 p-2">
            <div class="font-bold text-lg">
              Help
            </div>
            <p>
              <nuxt-link to="/faqs" class="hover:text-white">
                FAQs
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/return" class="hover:text-white">
                Return & Exchange
              </nuxt-link>
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/4 w-1/2 lg:p-5 md:p-5 p-2">
            <div class="font-bold text-lg">
              Contact Us
            </div>
            <p class="hover:text-white lg:text-base md:text-base text-sm">
              <a href="mailto:support@pamalengke.ph">
                support@pamalengke.ph
              </a>
            </p>
            <p class="hover:text-white lg:text-base md:text-base text-sm">
              <a href="tel:639173075883">
                +639173075883
              </a>
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/4 w-1/2 lg:p-5 md:p-5 p-2">
            <nuxt-link to="/">
              <img src="~assets/images/logow.png" class="lg:w-64 md:w-64 w-full">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showThis: false,
      email: '',
      message: '',
      dynamic_class: '',
      btnLoading: false
    }
  },
  methods: {
    async addEmailSubscribe () {
      try {
        this.btnLoading = true
        const payload = {
          email: this.email
        }
        await this.$axios.post('api/public/email-subscribe', payload)
        this.message = 'You have been successfully subscribed to our Newsletter!'
        this.dynamic_class = 'bg-green-600'
        this.showThis = !this.showThis
        this.email = ''
        setTimeout(() => this.closeThis('close'), 4000)
      } catch (error) {
        this.message = 'Something went wrong!'
        this.dynamic_class = 'bg-red-800'
        this.showThis = !this.showThis
        setTimeout(() => this.closeThis('close'), 4000)
      } finally {
        this.btnLoading = false
      }
    },
    closeThis () {
      this.showThis = !this.showThis
    }
  }
}
</script>

<style>
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.6);
}
.bg-green-smoke {
  background-color: rgba(22, 63, 41, 0.9);
}
#newsletter::before {
  content: '';
  display: block;
  clear: both;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
