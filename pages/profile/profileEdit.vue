<template>
  <div class="pb-20">
    <div class="flex flex-wrap mx-auto w-full mt-4">
      <div class="flex mx-auto w-full px-4 py-4">
        <ProfileHeader class="w-full" />
      </div>
    </div>
    <div class="flex flex-wrap w-full mx-auto justify-center lg:-mt-4 md:-mt-2 lg:px-24 px-4">
      <div class="flex w-full bg-circle py-4 px-2">
        <h1 class="flex lg:text-lg text-base lg:font-bold font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          ><path d="M24 4h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2zm-4 9.193v.807h-2v-.984c0-1.329.085-1.713-1.208-2.013-2.479-.572-4.822-1.112-5.714-3.067-.333-.728-.556-1.921.266-3.473 1.646-3.109 2.075-5.746 1.179-7.235-.644-1.069-1.856-1.228-2.523-1.228-.672 0-1.896.163-2.546 1.254-.9 1.511-.464 4.132 1.194 7.191.839 1.547.622 2.744.292 3.476-.887 1.966-3.318 2.526-5.67 3.068-1.348.309-1.27.675-1.27 2.011v1h-1.996l-.004-.833c-.009-2.224.088-3.495 2.647-4.086 2.805-.647 5.573-1.227 4.242-3.682-3.943-7.275-1.123-11.399 3.111-11.399 4.154 0 7.042 3.971 3.111 11.398-1.292 2.44 1.375 3.02 4.242 3.682 2.569.594 2.657 1.873 2.647 4.113z" /></svg>
          &nbsp;Edit Profile Information
        </h1>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="flex flex-wrap w-full bg-white py-2" @submit.prevent="handleSubmit(updateProfile)">
          <div class="flex flex-wrap w-full  shadow-2xl py-1">
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="First Name"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input
                  v-model="form.first_name"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Jane"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="Email"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Email
                </label>
                <input
                  v-model="form.email"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ex. janedoe123@mail.com"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Middle Name
              </label>
              <input
                v-model="form.middle_name"
                class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="---"
              >
            </div>
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="Address"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Street Address
                </label>
                <input
                  v-model="form.billing_address"
                  class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ex. Purok 1 Tambis"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="Last Name"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Last Name
                </label>
                <input
                  v-model="form.last_name"
                  class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Doe"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="Baranggay"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Barangay</label>
                <select
                  v-model="form.barangay_id"
                  class="w-full bg-gray-200 border rounded-full py-2 px-4 focus:outline-none active:outline-none"
                  placeholder="Select Baranggay:"
                >
                  <option v-for="baranggay in baranggays" :key="baranggay.id" :value="baranggay.id">
                    {{ baranggay.name }}
                  </option>
                </select>
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <ValidationProvider
                v-slot="{ errors }"
                name="Contact Number"
                rules="required"
                class="w-full"
              >
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Mobile Number
                </label>
                <input
                  v-model="form.contact_no"
                  class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ex. 09958272465"
                  :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                >
                <p class="text-red-500 text-xs italic">
                  {{ errors[0] }}
                </p>
              </ValidationProvider>
            </div>
            <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                City
              </label>
              <input id="grid-first-name" disabled class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" value="Panabo City">
            </div>
          </div>
          <!-- <div class="flex w-full mx-auto bg-white justify-center pb-2">
            <label class="block text-gray-700 font-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="lg:text-sm text-xs">
                I agree to the terms and conditions.
              </span>
            </label>
          </div> -->
          <!---->
          <div class="lg:flex w-full bg-green-500 justify-between py-4 px-2">
            <div class="py-2 px-4 font-bold">
              <div v-if="message" class="flex">
                <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" /></svg>
                <div class="text-white px-4">
                  Successfully Updated !
                </div>
              </div>
              <div v-if="error_message" class="flex">
                <svg class="fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" /></svg>
                <div class="text-red-700 px-4">
                  The given data was invalid !
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="flex px-4">
                <nuxt-link to="/profile" class="rounded-full focus:outline-none text-white bg-green-700 hover:bg-green-600 px-8 py-2 transform ease-in hover:scale-110">
                  Cancel
                </nuxt-link>
              </div>
              <div class="flex px-4 pr-10">
                <button :class="loading ? 'cursor-not-allowed': ''" class="rounded-full focus:outline-none text-white bg-yellow-700 hover:bg-yellow-600 px-8 py-2 transform ease-in hover:scale-110" @submit.prevent="handleSubmit(updateProfile)">
                  <span v-if="loading">
                    <pulse-loader class="inline-flex" :btn-loading="loading" />
                  </span>
                  <span v-else class="ml-2 mt-5px">Update Profile</span>
                </button>
              </div>
              <div class="lg:w-1/6 lg:block md:hidden hidden absolute z-40 bottom-0 -mb-48 -mr-4 right-0">
                <img src="~assets/images/bg_shop.png" class="w-full">
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import ProfileHeader from '~/components/profile/ProfileHeader'
export default {
  middleware: 'auth',
  layout: 'orders',
  name: 'ImageUpload',
  components: {
    ProfileHeader,
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      message: false,
      error_message: false,
      item: {
        // ...
        image: null,
        imageUrl: null
      },
      loading: false,
      form: {
        first_name: '',
        middle_name: '',
        last_name: '',
        contact_no: '',
        email: '',
        billing_address: '',
        barangay_id: null
      }
    }
  },
  computed: {
    ...mapGetters({
      baranggays: 'baranggays'
    })
  },
  mounted () {
    const user = this.$store.state.auth.user
    this.form.first_name = user.first_name
    this.form.middle_name = user.middle_name
    this.form.last_name = user.last_name
    this.form.contact_no = user.contact_no
    this.form.email = user.email
    this.form.billing_address = user.billing_address
    this.form.barangay_id = user.barangay_id
  },
  methods: {
    async updateProfile () {
      this.loading = true
      try {
        const payload = {
          first_name: this.form.first_name,
          middle_name: this.form.middle_name,
          last_name: this.form.last_name,
          billing_address: this.form.billing_address,
          barangay_id: this.form.barangay_id

        }
        // this.$set(payload, '_method', 'put')
        if (this.form.email !== this.$store.state.auth.user.email) {
          this.$set(payload, 'email', this.form.email)
        }
        if (this.form.contact_no !== this.$store.state.auth.user.contact_no) {
          this.$set(payload, 'contact_no', this.form.contact_no)
        }
        const response = await this.$axios.post('api/authorized/update-profile', payload)
        if (response.status === 200) {
          this.message = true
          this.error_message = false
        }
      } catch (error) {
        this.error_message = true
        this.message = false
      } finally {
        this.loading = false
      }
    },
    onChange (e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
    }
  }
}
</script>

<style>
.this {
  clip-path: circle(90px at center);
}
.bg-circle {
  background: linear-gradient(
    90deg,
    rgba(255,255,255,1) 0%,
    rgba(133,218,173,1) 35%,
    rgba(56,161,105,1) 100%
  );
}
</style>
