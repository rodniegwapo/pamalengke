<template>
  <div>
    <div v-if="clicked" class="absolute z-50 flex flex-wrap absolute top-0 h-screen w-full mx-auto justify-center bg-smoke-black lg:px-10 md:px-8 px-4">
      <div :class="message.code === 200 ? 'bg-smoke-green border-green-500' : 'bg-smoke-red border-red-500'" class="absolute w-auto lg:mt-48 md:mt-48 mt-40 text-white lg:text-lg md:text-base text-sm flex mx-auto justify-center text-center border-2 rounded-lg text-lg font-semibold mb-1 py-1 px-4">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" /></svg>
        &nbsp;{{ message.message }}
      </div>
      <pulse-loader class="flex mt-64" :btn-loading="btnLoading" :color="color" :size="size" />
    </div>
    <div v-if="clicks" class="absolute z-50 lg:mt-40 mt-32 text-white lg:text-lg md:text-base text-sm flex w-full mx-auto justify-center bg-smoke-red border-2 border-red-500 rounded-lg text-lg font-semibold mb-1 py-1 px-4">
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" /></svg>
      &nbsp;Error! You have entered an incorrect pin.
    </div>
    <div class="in-down flex flex-wrap lg:w-1/4 md:w-1/2 bg-white rounded-lg mx-auto justify-center lg:px-10 md:px-10 px-6 lg:py-10 md:py-10 py-6 text-center overflow-hidden">
      <div class="flex w-full mx-auto justify-center text-lg font-semibold mb-4">
        Enter One Time Password (OTP)
      </div>
      <div class="flex flex-wrap w-full mx-auto justify-center text-sm text-center mb-6">
        <p class="flex">
          One Time Password (OTP) has been sent to your mobile number {{ orders.contact_no }}.
        </p>
        <p class="flex">
          Please Enter the same to continue.
        </p>
      </div>
      <div class="flex flex-wrap w-full mx-auto justify-center">
        <div style="display: flex; flex-direction: row;" class="flex w-full mx-auto justify-center mb-4">
          <v-otp-input
            ref="otpInput1"
            input-classes="otp-input"
            separator="-"
            :num-inputs="4"
            :should-auto-focus="true"
            input-type="number"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        </div>
        <button class="flex text-base text-gray-900 uppercase focus:outline-none font-semibold" @click="handleClearInput('otpInput1')">
          Reset
        </button>
      </div>
      <div class="flex w-full mx-auto justify-center">
        <div class="flex px-1">
          <button class="flex justify-center w-full px-10 py-3 mt-6 text-base text-white uppercase bg-yellow-700 rounded-full shadow item-center hover:bg-yellow-600 focus:shadow-outline focus:outline-none" @click="placeOrder">
            <span class="ml-2 mt-5px">Submit</span>
          </button>
        </div>
      </div>
      <div class="flex w-full mx-auto justify-center text-base font-semibold py-4">
        <p>
          Haven't receive the code yet?
          <a href="#" class="text-blue-500" @click="toggleResend()">
            <span v-if="resend">
              Resend
            </span>
            <span v-if="btnLoading">
              <moon-loader class="inline-flex" :btn-loading="btnLoading" :color="color" :size="size" />
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import OtpInput from '~/components/otp/OtpInput.vue'

export default {
  components: {
    'v-otp-input': OtpInput,
    MoonLoader,
    PulseLoader
  },
  data () {
    return {
      clicks: false,
      clicked: false,
      max: 1,
      btnLoading: false,
      resend: true,
      modal: true,
      message: '',
      pin: null
    }
  },
  computed: {
    ...mapGetters('checkout', {
      contentProgress: 'contentProgress',
      step: 'step'
    }),
    ...mapGetters('order', {
      orders: 'orders'
    }),
    ...mapGetters('cart', {
      promos: 'promos',
      non_promos: 'non_promos'
    })
  },
  methods: {
    async placeOrder () {
      try {
        const payload = {
          contact_number: this.orders.contact_no,
          pin: this.pin
        }
        const response = await this.$axios.post('api/authorized/customer/validate-code', payload)

        this.message = response.data
        this.clicked = true
        setTimeout(() => this.closeModal('close'), 3000)
        if (this.message.code === 200) {
          setTimeout(() => this.$store.commit('checkout/toggleModal', false), 3000)
          await this.$axios.post('api/authorized/customer/order', this.orders)
          this.promos.length = 0
          this.non_promos.length = 0
          this.$store.commit('checkout/updateStep', this.step + 1)
          this.$store.commit('checkout/openContentProgress', this.contentProgress + 30)
          window.scrollTo(0, 0)
        }
      } catch (error) {
        // console.log(error)
      }
    },
    closeModal () {
      this.clicked = !this.clicked
    },
    toggleError () {
      this.clicked = !this.clicked
    },
    toggleCorrect () {
      this.clicks = !this.clicks
    },
    handleOnComplete (value) {
      this.pin = value
    },
    handleOnChange (value) {
    },
    handleClearInput (ref) {
      this.$refs[ref].clearInput()
    },
    async toggleResend () {
      try {
        this.btnLoading = !this.btnLoading
        this.resend = !this.resend
        await this.$axios.post('api/authorized/customer/send-code', {
          contact_number: this.orders.contact_no
        })
      } catch (error) {
        // console.log(error)
      } finally {
        this.btnLoading = !this.btnLoading
        this.resend = !this.resend
      }
    }
  }
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}
.bg-smoke-green {
  background: rgba(22, 63, 41, 0.7);
}
.bg-smoke-red {
  background: rgba(240, 52, 52, 0.7);
}
.bg-smoke-black {
  background: rgba(0, 0, 0, 0.9);
}
.otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  .otp-input .error {
      border: 1px solid red !important;
    }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @-webkit-keyframes fadeInDown {
    from {
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
    }
}
@-moz-keyframes fadeInDown {
    from {
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
    }
}
@keyframes fadeInDown {
    from {
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
    }
}
.in-down {
    -webkit-animation-name: fadeInDown;
    -moz-animation-name: fadeInDown;
    -o-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
}
</style>
