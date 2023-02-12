<template>
  <div>
    <div class="flex w-full lg:px-20 lg:-mt-8 -mt-4">
      <div class="flex flex-wrap pb-10">
        <div class="flex lg:w-1/3 md:w-1/2 w-full lg:pr-1 md:pr-2">
          <div class="container block w-full ">
            <div class="bg-white rounded  shadow-2xl rounded-lg">
              <div class="flex px-5 py-5 bg-green-500 justify-between">
                <h5 class="text-white  font-bold lg:text-lg md:text-sm text-base pr-5 py-2">
                  Personal Information
                </h5>
                <nuxt-link to="/profile/profileEdit" href="#" class="flex lg:text-md text-sm transition duration-500 ease-in-out  py-3 px-4  leading-none text-white hover:text-md bg-gray-900 hover:bg-white hover:text-black rounded  lg:mt-0 transform hover:-translate-y-0 hover:scale-105" @click="Updateprofile">
                  <svg class="fill-current pointer-events-none text-grey-darkest w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" /></svg>
                  Edit
                </nuxt-link>
              </div>
              <div class="container w-full px-2 py-4">
                <table class="table-fixed w-full mx-auto border">
                  <tbody class="text-sm">
                    <tr class="border-b border-t bg-gray-100">
                      <td class="px-2 py-2">
                        Firstname:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.first_name }}
                      </td>
                    </tr>
                    <tr>
                      <td class=" px-2 py-2">
                        Middlename:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.middle_name ? this.$store.state.auth.user.middle_name : '' }}
                      </td>
                    </tr>
                    <tr class="border-b border-t bg-gray-100">
                      <td class=" px-2 py-2">
                        Lastname:
                      </td>
                      <td class=" py-2">
                        {{ this.$store.state.auth.user.last_name }}
                      </td>
                    </tr>
                    <tr>
                      <td class=" px-2 py-2">
                        Email Address:
                      </td>
                      <td class=" py-2">
                        {{ this.$store.state.auth.user.email }}
                      </td>
                    </tr>
                    <tr class="border-b border-t bg-gray-100">
                      <td class=" px-2 py-2">
                        Mobile Number:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.contact_no }}
                      </td>
                    </tr>
                    <tr>
                      <td class=" px-2 py-2">
                        Address:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.billing_address }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="bg-white rounded shadow-2xl rounded-lg">
              <div class="flex px-5 py-5 bg-green-500 justify-between">
                <h5 class="text-white  font-bold lg:text-lg text-sm pr-5 py-2">
                  Shipping Address
                </h5>
                <nuxt-link to="/profile/shipEdit" class="text-md transition duration-500 ease-in-out inline-block  py-3 px-4  leading-none text-white hover:text-md bg-gray-900 hover:bg-white hover:text-black rounded  lg:mt-0 transform hover:-translate-y-0 hover:scale-105" @click="Updateprofile">
                  <svg class="fill-current pointer-events-none text-grey-darkest w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" /></svg>
                  Edit
                </nuxt-link>
              </div>
              <div class="container w-full px-2 py-4">
                <table class="table-fixed w-full mx-auto border">
                  <tbody class="text-sm">
                    <tr class="border-b border-t bg-gray-100">
                      <td class="px-2 py-2">
                        Shipping Address:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.billing_address }}
                      </td>
                    </tr>
                    <tr>
                      <td class=" px-2 py-2">
                        Baranggay:
                      </td>
                      <td class="  py-2">
                        {{ this.$store.state.auth.user.baranggay_id }}
                      </td>
                    </tr>
                    <tr class="border-b border-t bg-gray-100">
                      <td class=" px-2 py-2">
                        City:
                      </td>
                      <td class=" py-2">
                        Panabo City
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex lg:w-2/3 md:w-1/2 w-full">
          <div class="flex flex-wrap mx-auto w-full rounded-lg shadow-2xl bg-white">
            <iframe
              class="object-fill w-full lg:h-full md:h-full h-screen"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpamalengke.ph%2Fposts%2F135377621536887&show_text=true&width=552&appId=722668108109324&height=634"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import OrderHistory from '~/components/profile/OrderHistory.vue'

export default {
  components: {
    // OrderHistory
  },
  data () {
    return {
      isEdit: false,
      isBio: true
    }
  },
  methods: {
    Updateprofile () {
      this.isEdit = true
      this.isBio = false
      window.scrollTo(0, 0)
    },
    back () {
      this.isEdit = false
      this.isBio = true
      // this.$router.back()
      window.scrollTo(0, 0)
    }
  }
}
</script>
