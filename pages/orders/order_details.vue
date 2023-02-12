<template>
  <div>
    <div class="flex flex-wrap mx-auto w-full mt-4 text-xs">
      <div class="container flex-wrap mx-auto w-full lg:px-24 px-2 py-4 pb-20">
        <div class="flex flex-wrap shadow-2xl">
          <div class="flex w-full mx-auto bg-green-600 px-4 py-2 rounded-t-lg">
            <div class="flex lg:w-1/2 w-3/4 justify-start">
              <div class="flex text-white py-4 px-4 text-lg font-bold block">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" /></svg>
                &nbsp;Order Details
              </div>
            </div>
            <div class="flex lg:w-1/2 w-1/4 justify-end">
              <nuxt-link to="/orders" class="flex text-white py-4 px-4 text-lg font-bold block hover:text-green-200 focus:outline-none">
                <label class="lg:block hidden">Back to Orders List</label>&nbsp;
                <svg
                  class="kill fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" /></svg>
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-wrap w-full mx-auto bg-white px-4 py-2 rounded-b-lg">
            <div class="flex flex-wrap lg:w-1/2 w-full">
              <div class="flex w-full text-gray-600 text-base font-bold">
                Shipping Address
              </div>
              <div class="flex w-full">
                <div class="flex w-1/4 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Full name
                </div>
                <div class="flex w-3/4 text-gray-900 text-base  ml-2 mt-2">
                  {{ this.$store.state.auth.user.full_name }}
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex w-1/4 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Contact Number
                </div>
                <div class="flex w-3/4 text-gray-900 text-base  ml-2 mt-2">
                  {{ this.$store.state.auth.user.contact_no }}
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex w-1/4 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Address
                </div>
                <div class="flex w-3/4 text-gray-900 text-base  ml-2 mt-2">
                  {{ this.$store.state.auth.user.billing_address + ', ' + baranggay + ' ' }} Panabo City
                </div>
              </div>
            </div>
            <div class="flex flex-wrap lg:w-1/2 w-full mb-4">
              <div class="flex w-full text-gray-600 text-base font-bold">
                Shipping Status
              </div>
              <div class="flex w-full">
                <div class="flex w-1/2 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Status
                </div>
                <div class="flex w-1/2 text-white text-base ml-2 mt-2 mx-auto justify-start">
                  <label class="rounded-full bg-yellow-500 px-4 py-1">{{ order_details.status }}</label>
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex w-1/2 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Payment Method
                </div>
                <div class="flex w-1/2 text-gray-900 text-base font-semibold ml-2 mt-2">
                  <svg
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  ><path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" /></svg>
                  &nbsp;Cash on Delivery
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex w-1/2 text-gray-900 text-base font-semibold ml-2 mt-2">
                  Delivery Charge
                </div>
                <div class="flex w-1/2 text-gray-900 text-base font-semibold ml-2 mt-2">
                  {{ moneyFormat(order_details.delivery_charge, '₱ ') }}
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex w-1/2 text-red-600 text-lg font-bold ml-2 mt-2">
                  Total Price
                </div>
                <div class="flex w-1/2 text-red-600 text-lg font-semibold ml-2 mt-2">
                  {{ moneyFormat(order_details.total_price, '₱ ') }}
                </div>
              </div>
            </div>
            <div class="flex w-full py-2">
              <table class="w-full mx-auto rounded-lg table-auto bg-white">
                <thead class="bg-gray-600 text-white">
                  <tr>
                    <th class="px-4 py-2">
                      Product Description
                    </th>
                    <th class="px-4 py-2">
                      Quantity
                    </th>
                    <th class="px-4 py-2">
                      Price
                    </th>
                    <th class="px-4 py-2">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in order_details.products" :key="product.id">
                    <td class="flex border p-2 flex-wrap">
                      <div class="w-10">
                        <img :src="product.image" class="rounded">
                      </div>
                      <div class="pt-3 pl-5">
                        {{ product.name }}
                      </div>
                    </td>
                    <td class="border px-4 py-2 text-center">
                      {{ product.quantity }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                      {{ moneyFormat(product.price, '₱ ') }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                      {{ moneyFormat(product.price * product.quantity, '₱ ') }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="flex w-full py-2 border-t-2 border-b-2">
              <div class="flex w-full justify-end px-4">
                Change of Mind?
                <button class="flex px-4 py-1 ml-2 bg-red-600 rounded-full text-white text-sm">
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" /></svg>
                  &nbsp;Cancel Order
                </button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',
  layout: 'orders',
  data: () => ({
    baranggay: ''
  }),
  computed: {
    ...mapGetters('order', {
      order_details: 'order_details'
    }),
    ...mapGetters({
      baranggays: 'baranggays'
    })
  },
  mounted () {
    if (this.$store.state.auth.user.barangay_id !== null) {
      this.baranggay = this.baranggays.find(el => el.id === this.$store.state.auth.user.barangay_id)
    }
    this.order_details.products = this.order_details.products ? this.order_details.products.data.map((el) => {
      return {
        quantity: el.quantity,
        name: el.name,
        image: el.image.data.medium_image,
        price: el.price
      }
    }) : ''
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
</style>
