<template>
  <div>
    <div class="flex flex-wrap w-full lg:px-20 md:px-4 py-4 lg:text-base lg:text-sm md:text-sm text-xs text-gray-800">
      <div class="w-full ">
        <div class="-ml-4 p-4 bg-gray-200 rounded-full">
          <h1 class="px-2 font-bold uppercase">
            Your Orders
          </h1>
        </div>
        <Table class="w-full" can-input="true" />
        <form class="w-full text-base pb-10 mt-4">
          <div class="-ml-4 p-4 bg-gray-200 rounded-full">
            <h1 class="px-2 font-bold uppercase">
              Customer information
            </h1>
          </div>
          <div class="mt-2">
            <label class="block lg:text-base md:text-sm text-xs text-gray-700 font-bold" for="cus_name">Name</label>
            <div class="w-full p-2 lg:text-base md:text-sm text-xs">
              {{ form.cp_first_name + ' ' + form.cp_last_name }}
            </div>
          </div>
          <div class="flex w-full mt-2">
            <div class="pr-2 lg:w-1/2 md:w-1/2 w-full">
              <label class="block lg:text-base md:text-sm text-xs text-gray-700 font-bold" for="cus_email">Email</label>
              <div class="w-full p-2 lg:text-base md:text-sm text-xs">
                {{ form.email }}
              </div>
            </div>
            <div class="pr-2 lg:w-1/2 md:w-1/2 w-full">
              <label class="block lg:text-base md:text-sm text-xs text-gray-700 font-bold" for="cus_email">Contact Number</label>
              <div class="w-full p-2 lg:text-base md:text-sm text-xs">
                {{ form.contact_no }}
              </div>
            </div>
          </div>
          <div class="mt-2">
            <label class=" block lg:text-base md:text-sm text-xs text-gray-700 font-bold" for="sub_address">Address</label>
            <div class="w-full p-2 lg:text-sm md:text-sm text-xs">
              {{ form.shipping_address + ', ' + baranggay.name + ', ' + form.city_address }}
            </div>
          </div>
          <div v-if="form.note" class="mt-2">
            <label class=" block lg:text-base md:text-sm text-xs text-gray-700 font-bold">Note</label>
            <div class="w-full p-2 lg:text-base md:text-sm text-xs">
              {{ form.note }}
            </div>
          </div>
          <div class="mt-4 hidden">
            <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none">
              <svg
                aria-hidden="true"
                data-prefix="far"
                data-icon="credit-card"
                class="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              ><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
              <span class="px-2 mt-5px">Procceed to checkout</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Table from '~/components/checkout/Table.vue'
export default {
  components: {
    Table
  },
  data: () => ({
    baranggay: ''
  }),
  computed: {
    ...mapGetters('checkout', {
      form: 'form'
    }),
    ...mapGetters({
      baranggays: 'baranggays'
    })
  },
  mounted () {
    this.baranggay = this.baranggays.find(el => el.id === this.form.barangay_id)
  }
}
</script>
