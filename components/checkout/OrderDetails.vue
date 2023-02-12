<template>
  <div v-if="allOrders.length > 0" class="flex-1 w-full text-sm px-4 py-4 shadow-md">
    <div class="p-4 bg-gray-200 rounded-full">
      <h1 class="px-2 font-bold uppercase">
        Order Details
      </h1>
    </div>
    <div class="p-4">
      <p class="mb-2 italic">
        Estimated delivery Date and Time:
      </p>
      <p class="uppercase font-bold mb-6">
        {{ date }}
      </p>
      <div class="flex justify-between">
        <div class="flex w-full p-4 bg-gray-200 rounded-full font-bold uppercase">
          Payment Method
        </div>
      </div>
      <div class="flex w-full mx-auto mb-4">
        <div class="flex w-full py-4 text-base font-bold text-right text-green-600">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          ><path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" /></svg>
          <span class="px-1">Cash on Delivery</span>
        </div>
      </div>
      <div class="flex justify-between border-b">
        <div class="lg:px-4 lg:py-2 m-2 text-base font-bold text-center text-gray-800">
          Subtotal
        </div>
        <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
          {{ moneyFormat(grand_total, '₱ ') }}
        </div>
      </div>
      <div class="flex justify-between pt-4 border-b">
        <div class="lg:px-4 lg:py-2 m-2 text-base font-bold text-center text-gray-800">
          Delivery Charge
        </div>
        <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-600">
          + {{ this.$store.state.auth.user.free_delivery ? 0 : moneyFormat(delivery_charge, '₱ ') }}
        </div>
      </div>
      <div class="flex justify-between pt-4 border-b">
        <div class="lg:px-4 lg:py-2 m-2 text-base font-bold text-center text-gray-800">
          Grand Total
        </div>
        <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
          {{ moneyFormat((grand_total + delivery_charge), '₱ ') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  data: () => ({
    date: ''
  }),
  computed: {
    ...mapGetters('cart', {
      grand_total: 'grand_total',
      delivery_charge: 'delivery_charge',
      promos: 'promos',
      non_promos: 'non_promos'
    }),
    allOrders () {
      const data = [...this.promos, ...this.non_promos]
      return data
    }
  },
  watch: {
    allOrders: {
      deep: true,
      handler () {
        if (this.allOrders.length > 0) {
          this.solveGrandTotal()
        }
      }
    }
  },
  mounted () {
    this.getDate()
    if (this.allOrders.length > 0) {
      this.solveGrandTotal()
    }
  },
  methods: {
    getDate () {
      const date = moment().format('a')
      if (date === 'am') {
        this.date = moment().format('MMMM Do YYYY') + ' 8:00 am - 12:00 pm'
      } else {
        this.date = moment().format('MMMM Do YYYY') + ' 1:00 pm - 11:00 pm'
      }
    },
    solveGrandTotal () {
      const total = []
      this.allOrders.map((el) => {
        total.push(el.total)
      })
      const grandTotal = total.reduce((a, b) => a + b)
      this.$store.commit('cart/pushGrandTotal', grandTotal)
    }
  }
}
</script>
