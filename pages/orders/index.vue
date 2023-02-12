<template>
  <div>
    <div class="flex flex-wrap mx-auto w-full mt-4 pb-20">
      <div class="container flex mx-auto w-full px-4 py-4">
        <ProfileHeader class=" w-full" />
      </div>
      <div class="container flex flex-wrap mx-auto w-full lg:px-24 px-4 rounded-lg py-4 -mt-6">
        <div class="flex w-full py-4 px-2 bg-green-500 text-white">
          <h1 class="flex lg:text-lg text-base lg:font-bold font-semibold">
            <svg
              class="fill-current"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ><path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" /></svg>
            &nbsp;My Orders
          </h1>
        </div>
        <div class="flex flex-wrap w-full py-1 lg:px-4 px-2 lg:mb-2 border-t bg-white border-b border-gray-400 ">
          <div class="container">
            <div class="">
              <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                  <div class="relative">
                    <select
                      v-model="limit"
                      class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option :value="5">
                        Last 5 Orders
                      </option>
                      <option :value="10">
                        Last 10 Orders
                      </option>
                      <option :value="15">
                        Last 15 Orders
                      </option>
                      <option :value="20">
                        Last 20 Orders
                      </option>
                      <option :value="25">
                        Last 25 Orders
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="relative">
                    <label class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      Status:</label>
                  </div>
                  <div class="relative">
                    <select
                      v-model="status"
                      class="appearance-none h-full rounded-r border-t sm:rounded-r-none border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                    >
                      <option
                        v-for="status in type"
                        :key="status.id"
                        :value="status.value"
                      >
                        {{ status.label }}
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <!-- LG MD screen visible -->
              <div class="flex items-center justify-center lg:block md:block hidden">
                <div class="container">
                  <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 lg:text-base md:text-base text-sm">
                    <thead class="text-white">
                      <tr class="bg-green-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                        <th v-for="menu in tableMenu" :key="menu.i" class="py-3 lg:px-3 md:px-3 px-2 text-left" width="150px">
                          {{ menu.name }}
                        </th>
                      </tr>
                    </thead>
                    <tbody class="flex-1 sm:flex-none">
                      <tr v-for="order in orders_by_user.data" :key="order.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2">
                          {{ order.tracking_number }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2 truncate">
                          {{ dateFormatFormat(order.created_at) }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 p-3 py-3 lg:px-3 md:px-3 px-2 truncate">
                          {{ moneyFormat(order.total_price + order.delivery_charge, '₱ ') }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2 truncate">
                          <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-600 leading-tight"
                          >
                            <button @click="showOrderDetails(order)">
                              <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"
                                />
                              </svg>
                            </button>
                          </span>
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2 truncate">
                          <div
                            :class="returnBg(order.status)"
                            class="text-white text-center uppercase p-1 rounded shadow"
                          >
                            <p v-if="order.status === 'ready_to_pick_up'">
                              ready to pick up
                            </p>
                            <p v-else-if="order.status === 'to_be_delivered'">
                              to be delivered
                            </p>
                            <p v-else>
                              {{ order.status }}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- mobile visible -->
              <div class="flex items-center justify-center lg:hidden md:hidden block">
                <div class="container">
                  <table v-for="order in orders_by_user.data" :key="order.id" class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 lg:text-base md:text-base text-sm">
                    <thead class="text-white">
                      <tr class="bg-green-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                        <th v-for="menu in tableMenu" :key="menu.i" class="py-3 lg:px-3 md:px-3 px-2 text-left" width="150px">
                          {{ menu.name }}
                        </th>
                      </tr>
                    </thead>
                    <tbody class="flex-1 sm:flex-none">
                      <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2">
                          {{ order.tracking_number }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2 truncate">
                          {{ dateFormatFormat(order.created_at) }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 p-3 py-3 lg:px-3 md:px-3 px-2 truncate">
                          {{ moneyFormat(order.total_price + order.delivery_charge, '₱ ') }}
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-1 lg:px-3 md:px-3 px-2 truncate">
                          <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-600"
                          >
                            <button @click="showOrderDetails(order)">
                              <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"
                                />
                              </svg>
                            </button>
                          </span>
                        </td>
                        <td class="border-grey-light border hover:bg-gray-100 py-3 lg:px-3 md:px-3 px-2 truncate">
                          <div
                            :class="returnBg(order.status)"
                            class="text-white text-center uppercase p-1 rounded shadow"
                          >
                            <p v-if="order.status === 'ready_to_pick_up'">
                              ready to pick up
                            </p>
                            <p v-else-if="order.status === 'to_be_delivered'">
                              to be delivered
                            </p>
                            <p v-else>
                              {{ order.status }}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!------>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileHeader from '~/components/profile/ProfileHeader.vue'

export default {
  middleware: 'auth',
  layout: 'orders',
  components: {
    ProfileHeader
  },
  data: () => ({
    page: 1,
    limit: 5,
    type: [
      { value: 'to_be_delivered', label: 'To be delivered' },
      { value: 'ready_to_pick_up', label: 'Ready to Pick Up' },
      { value: 'created', label: 'Created' },
      { value: 'pending', label: 'Pending' },
      { value: 'returned', label: 'Returned' },
      { value: 'cancelled', label: 'Cancelled' },
      { value: 'processed', label: 'Processed' }
    ],
    status: null,
    tableMenu: [
      { name: 'Tracking Number' },
      { name: 'Date Ordered' },
      { name: 'Total Amount' },
      { name: 'View' },
      { name: 'Status' }
    ]
  }),
  computed: {
    ...mapGetters('order', {
      orders_by_user: 'orders_by_user'
    })
  },
  watch: {
    limit () {
      this.page = 1
      this.getChoicesLimitOrders()
    },
    status () {
      this.page = 1
      this.getChoicesLimitOrders()
    },
    page () {
      this.getChoicesLimitOrders()
    }
  },
  mounted () {
    this.getChoicesLimitOrders()
  },
  methods: {
    returnBg (status) {
      switch (status) {
        case 'pending':
          return 'bg-yellow-600'
        case 'created':
          return 'bg-yellow-600'
        case 'processed':
          return 'bg-blue-600'
        case 'ready_to_pick_up':
          return 'bg-blue-600'
        case 'to_be_delivered':
          return 'bg-orange-500'
        case 'fulfilled':
          return 'bg-green-500'
        case 'returned':
          return 'bg-red-500'
        case 'cancelled':
          return 'bg-red-300'
        default:
          return ''
      }
    },
    async getChoicesLimitOrders () {
      this.$nuxt.$loading.start()
      const payload = {
        page: this.page,
        limit: this.limit,
        include: 'products.image',
        status: this.status
      }
      const orders = await this.$axios.get('api/authorized/customer/order', {
        params: payload
      })
      this.$store.commit('order/setOrdersByUser', orders.data)
      this.$nuxt.$loading.finish()
    },
    async showOrderDetails (data) {
      await this.$store.commit('order/setOrderDetails', data)
      this.$router.push('/orders/order_details')
    }
  }
}
</script>

<style>
.kill {
  border-radius: 50%;
  -webkit-transition: -webkit-transform .8s ease-in-out;
          transition:         transform .8s ease-in-out;
}
.kill:hover {
  -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
}

 @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
