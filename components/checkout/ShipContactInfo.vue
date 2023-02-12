<template>
  <div>
    <div class="flex flex-wrap w-full lg:px-10 px-2 py-4 text-gray-800">
      <div class="w-full ">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="w-full text-lg pb-10 " @submit.prevent="handleSubmit(doPlaceOrder)">
            <p class="text-gray-800 font-bold py-4">
              Customer information
            </p>
            <div class="text-sm">
              <ValidationProvider
                v-slot="{ errors }"
                name="First Name"
                rules="required"
              >
                <label class="block text-sm text-gray-700">First Name</label>
                <input
                  v-model="form.cp_first_name"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="text"
                  placeholder="First Name"
                  aria-label="Name"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="text-sm">
              <ValidationProvider
                v-slot="{ errors }"
                name="Last Name"
                rules="required"
              >
                <label class="block text-sm text-gray-700">Last Name</label>
                <input
                  v-model="form.cp_last_name"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Name"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="mt-2 text-sm">
              <ValidationProvider
                v-slot="{ errors }"
                name="Email"
                rules="required"
              >
                <label class="block text-sm text-gray-600">Email</label>
                <input
                  v-model="form.email"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="text"
                  placeholder="Your Email"
                  aria-label="Email"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="mt-2 text-sm">
              <ValidationProvider
                v-slot="{ errors }"
                name="Contact Number"
                rules="required"
              >
                <label class="block text-sm text-gray-600">Contact Number</label>
                <input
                  v-model="form.contact_no"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="number"
                  placeholder="Your Contact Number"
                  aria-label="Contact Number"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="mt-2 text-sm">
              <ValidationProvider
                v-slot="{ errors }"
                name="Address"
                rules="required"
              >
                <label class=" block text-sm text-gray-600">Address</label>
                <input
                  v-model="form.shipping_address"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="text"
                  placeholder="Door 1, Floor 2, Apartment 3"
                  aria-label="sub_address"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="flex w-full mt-2 text-sm">
              <div class="pr-2 ">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Baranggay"
                  rules="required"
                >
                  <label class="hidden text-sm block text-gray-600">Barangay</label>
                  <select
                    v-model="form.barangay_id"
                    class="w-full bg-gray-200 border rounded-full py-2 px-4 focus:outline-none active:outline-none"
                    placeholder="Select Baranggay:"
                    :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                  >
                    <option :value="null">
                      Please Select Baranggay
                    </option>
                    <option v-for="baranggay in baranggays" :key="baranggay.id" :value="baranggay.id">
                      {{ baranggay.name }}
                    </option>
                  </select>
                  <p class="text-red-500 text-xs italic">
                    {{ errors[0] }}
                  </p>
                </ValidationProvider>
              </div>
              <div class="pl-2 w-1/2">
                <label class="hidden text-sm block text-gray-600" for="cus_email">Barangay</label>
                <input
                  v-model="form.city_address"
                  class="w-full bg-gray-200 border rounded-full py-2 px-2 outline-none appearance-none focus:outline-none active:outline-none"
                  type="text"
                  disabled
                  value="Panabo City"
                  aria-label=""
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </div>
            </div>
            <div class="flex items-baseline space-x-2 mt-2">
              <input
                v-model="form.subscribe"
                type="checkbox"
                value="true"
                checked
                name=""
                class="inline-block"
              >
              <p class="text-gray-600 text-sm">
                Subscribe to our Newsletter and Get Notified with the Latest Products and Discounts.
              </p>
            </div>
            <div class="flex items-baseline space-x-2 mt-2">
              <input
                v-model="form.accept_terms"
                type="checkbox"
                checked
                name=""
                class="inline-block"
              >
              <p class="text-gray-600 text-sm">
                I Agree to the Terms and Condition which may apply.
              </p>
            </div>
            <div class="mt-4 flex w-full">
              <button class="flex justify-center w-full px-10 py-3 mt-6 tracking-wider font-medium text-sm text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none" @submit.prevent="handleSubmit(doPlaceOrder)">
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="credit-card"
                  class="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                ><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                <span class="ml-2 mt-5px">Review order</span>
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import moment from 'moment'
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    errors: {},
    form: {
      cp_first_name: '',
      cp_last_name: '',
      email: '',
      contact_no: '',
      shipping_address: '',
      barangay_id: null,
      city_address: 'Panabo City',
      accept_terms: true,
      subscribe: true
    }
  }),
  computed: {
    ...mapGetters('checkout', {
      contentProgress: 'contentProgress',
      step: 'step',
      note: 'note'
    }),
    ...mapGetters('order', {
      orders: 'orders'
    }),
    ...mapGetters('cart', {
      promos: 'promos',
      non_promos: 'non_promos',
      vendor_id: 'vendor_id'
    }),
    ...mapGetters({
      baranggays: 'baranggays'
    })
  },
  mounted () {
    const user = this.$store.state.auth.user
    this.form.cp_first_name = user.first_name
    this.form.cp_last_name = user.last_name
    this.form.contact_no = user.contact_no ? user.contact_no : null
    this.form.shipping_address = user.billing_address ? user.billing_address : null
    this.form.email = user.email
    this.form.barangay_id = user.barangay_id
  },
  methods: {
    doPlaceOrder () {
      try {
        const payload = this.form
        if (this.promos.length > 0) {
          const orders = this.promos.map((el) => {
            return {
              promo_product_id: el.id,
              quantity: el.quantity
            }
          })
          this.$set(payload, 'promo_order_items', orders)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
        if (this.non_promos.length > 0) {
          const orders = this.non_promos.map((el) => {
            return {
              product_id: el.id,
              quantity: el.quantity
            }
          })
          this.$set(payload, 'order_items', orders)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
        this.$set(payload, 'note', this.note)
        this.$set(payload, 'vendor_id', this.vendor_id)
        this.$set(payload, 'payment_method_id', 1)
        this.$set(payload, 'delivery_datetime_from', moment().format('YYYY-MM-DD hh:mm:ss'))
        this.$set(payload, 'delivery_datetime_to', moment().add(1, 'hours').format('YYYY-MM-DD hh:mm:ss'))
        this.$store.dispatch('order/addOrders', payload)
        this.$store.commit('checkout/orderForm', this.form)
        this.$store.commit('checkout/updateStep', this.step + 1)
        this.$store.commit('checkout/openContentProgress', this.contentProgress + 25)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } catch (error) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
