<template>
  <section>
    <div class="flex flex-wrap items-center justify-center h-screen">
      <div class="w-3/5 hidden lg:block">
        <div class="bg-cover h-screen" lazy-background="images/nescafe.jpeg" />
      </div>
      <div class="w-full lg:w-2/5 p-2">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="bg-white px-8 pt-6 pb-4 mb-4" @submit.prevent="handleSubmit(doLogin)">
            <div class="flex flex-wrap">
              <div class="w-full shadow-inner bg-green-100 rounded px-2">
                <div class="p-4">
                  <img v-if="openLogin" v-lazy-load class="h-auto mx-auto mb-4" src="~/assets/images/logo.png">
                  <!---Login--->
                  <div v-if="openLogin" class="mb-4">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Username or Email"
                      rules="required"
                    >
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                        Username or Email Address
                      </label>
                      <input
                        id="username"
                        v-model="form.username"
                        type="text"
                        name="username"
                        placeholder="Username or Email Address"
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                      >
                      <p class="text-red-500 text-xs italic">
                        {{ errors[0] }}
                      </p>
                    </ValidationProvider>
                  </div>
                  <div v-if="openLogin" class="mb-6">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Password"
                      rules="required"
                    >
                      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                      <input
                        id="password"
                        v-model="form.password"
                        :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        type="password"
                        name="password"
                        placeholder="******************"
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      >
                      <p class="text-red-500 text-xs italic">
                        {{ errors[0] }}
                      </p>
                    </ValidationProvider>
                  </div>
                  <div class="flex items-center justify-end" />
                  <!------>
                  <button v-if="openLogin" type="submit" class="bg-green-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @submit.prevent="handleSubmit(doLogin)">
                    <span v-if="loginClicked">Login</span>
                    <span v-if="loginLoading">
                      <pulse-loader class="inline-flex" :btn-loading="loginLoading" :color="color" :size="size" />
                    </span>
                  </button>
                  <!------>
                  <p v-if="openLogin" class="text-center text-gray-600 font-base my-5">
                    OR
                  </p>
                  <button v-if="openLogin" type="button" class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full" :class="btnLoading ? 'cursor-not-allowed': ''" @click="socialLogin">
                    <span v-if="clicked">
                      <svg class="fill-current inline-flex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                      &nbsp;Connect with Facebook
                    </span>
                    <span v-if="btnLoading">
                      <pulse-loader class="inline-flex" :btn-loading="btnLoading" :color="color" :size="size" />
                    </span>
                  </button>
                  <div v-if="openLogin" class="mt-2 text-sm text-blue-600">
                    <span class="text-gray-600">Don't have an Account ? </span>
                    <a class="cursor-pointer" @click="toggleForm()">
                      Click Here
                    </a>
                  </div>
                  <div v-if="openSignup" class="text-sm text-blue-600">
                    <div class=" text-xl text-opacity-75 text-gray-800 font-semibold p-2">
                      Registration Form
                    </div>
                    <form class="bg-white px-2" @submit.prevent="handleSubmit(doRegister)">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="First Name"
                        rules="required"
                      >
                        <label for="first_name" class="block text-gray-700 text-sm font-bold mb-2">
                          First Name
                        </label>
                        <input
                          id="first_name"
                          v-model="reg_form.first_name"
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                      </ValidationProvider>
                      <label for="middle_name" class="block text-gray-700 text-sm font-bold mb-2">
                        Middle Name
                      </label>
                      <input
                        id="middle_name"
                        v-model="reg_form.middle_name"
                        type="text"
                        name="middle_name"
                        placeholder="Middle Name"
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Last Name"
                        rules="required"
                      >
                        <label for="last_name" class="block text-gray-700 text-sm font-bold mb-2">
                          Last Name
                        </label>
                        <input
                          id="last_name"
                          v-model="reg_form.last_name"
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required"
                      >
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          v-model="reg_form.email"
                          type="text"
                          name="email"
                          placeholder="Email Address"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Contact Number"
                        rules="required"
                      >
                        <label for="contact_no" class="block text-gray-700 text-sm font-bold mb-2">
                          Contact Number
                        </label>
                        <input
                          id="contact_no"
                          v-model="reg_form.contact_no"
                          type="number"
                          name="contact_no"
                          placeholder="Contact Number"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required"
                      >
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                          Password
                        </label>
                        <input
                          id="password"
                          v-model="reg_form.password"
                          type="password"
                          name="password"
                          placeholder="Password"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Confirm Password"
                        rules="required"
                      >
                        <label for="password_confirmation" class="block text-gray-700 text-sm font-bold mb-2">
                          Confirm Password
                        </label>
                        <input
                          id="password_confirmation"
                          v-model="reg_form.password_confirmation"
                          type="password"
                          name="password_confirmation"
                          placeholder="Confirm Password"
                          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          :class="(errors.length > 0) ? 'border-red-400' : 'border-green-500'"
                        >
                        <p class="text-red-500 text-xs italic">
                          {{ errors[0] }}
                        </p>
                        <p class="text-red-500 text-xs italic">
                          {{ password_message }}
                        </p>
                      </ValidationProvider>
                      <div class="py-2 pt-5">
                        <button :class="reg_loading ? 'cursor-not-allowed': ''" type="submit" class="bg-green-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @submit.prevent="handleSubmit(doRegister)">
                          <span v-if="reg_loading">
                            <pulse-loader class="inline-flex" :btn-loading="reg_loading" :color="color" :size="size" />
                          </span>
                          <span v-else>Register</span>
                        </button>
                        <p class="text-center text-gray-600 font-base my-5">
                          OR
                        </p>
                        <button type="button" class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full" :class="btnLoading ? 'cursor-not-allowed': ''" @click="socialLogin">
                          <span v-if="clicked">
                            <svg class="fill-current inline-flex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            &nbsp;Connect with Facebook
                          </span>
                          <span v-if="btnLoading">
                            <pulse-loader class="inline-flex" :btn-loading="btnLoading" :color="color" :size="size" />
                          </span>
                        </button>
                      </div>
                    </form>
                    <span class="text-gray-600">Already have an Account ? </span>
                    <a class="cursor-pointer" @click="toggleForm()">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  middleware: 'guest',
  layout: 'blank',
  components: {
    ValidationObserver,
    ValidationProvider,
    PulseLoader
  },
  data () {
    return {
      color: '#FFFFFF',
      reg_loading: false,
      btnLoading: false,
      loginLoading: false,
      loginClicked: true,
      clicked: true,
      password_message: '',
      openLogin: true,
      openSignup: false,
      reg_form: {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        contact_no: null,
        password: '',
        password_confirmation: ''
      },
      form: {
        username: '',
        password: '',
        loading: true,
        color: '#000'
      }
    }
  },
  mounted () {
  },
  methods: {
    async doRegister () {
      try {
        this.reg_loading = true
        this.password_message = null
        if (this.reg_form.password === this.reg_form.password_confirmation) {
          await this.$axios.post('api/public/register', this.reg_form)
            .then(async (res) => {
              this.form.username = this.reg_form.email
              this.form.password = this.reg_form.password
              await this.doLogin()
            })
        } else {
          this.password_message = 'Password and Confirm Password does not match.'
        }
      } catch (error) {
        this.$notify({
          group: 'notify',
          type: 'error',
          title: 'Error',
          duration: 3000,
          text: 'Something went wrong!'
        })
      } finally {
        this.reg_loading = false
      }
    },
    async doLogin () {
      try {
        this.loginLoading = !this.loginLoading
        this.loginClicked = !this.loginClicked
        const data = {
          username: this.form.username,
          password: this.form.password,
          grant_type: process.env.GRANT_TYPE,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET
        }
        const res = await this.$axios.post('oauth/token', data)
        const user = await this.$axios.get('api/authorized/auth-details', {
          headers: {
            Authorization: res.data.token_type + ' ' + res.data.access_token
          }
        })
        const expiresIn = moment().add(res.data.expires_in / 86400, 'days')

        this.$cookies.set('expires_in', expiresIn.toDate(), {
          path: '/',
          expires: expiresIn.toDate()
        })
        this.$cookies.set('auth', user.data.data, {
          path: '/',
          expires: expiresIn.toDate()
        })
        this.$cookies.set('token_type', res.data.token_type, {
          path: '/',
          expires: expiresIn.toDate()
        })
        this.$cookies.set('token', res.data.access_token, {
          path: '/',
          expires: expiresIn.toDate()
        })

        this.$store.commit('auth/setBearerToken', res.data)
        this.$store.commit('auth/setAuth', user.data.data)
        this.$store.commit('auth/setExpiresIn', expiresIn.toDate())
        this.$store.commit('auth/setLogin', true)

        this.$notify({
          group: 'notify',
          type: 'success',
          title: 'Success',
          duration: 3000,
          text: 'Successfully Login!'
        })
        this.$router.push('/')
      } catch (err) {
        this.$notify({
          group: 'notify',
          type: 'error',
          title: 'Error',
          duration: 3000,
          text: 'Invalid Credentials!'
        })
      } finally {
        this.loginLoading = !this.loginLoading
        this.loginClicked = !this.loginClicked
      }
    },
    async socialLogin () {
      this.btnLoading = !this.btnLoading
      this.clicked = !this.clicked
      await window.location.assign(process.env.BASE_URL + '/login/facebook')
    },
    toggleForm () {
      this.openLogin = !this.openLogin
      this.openSignup = !this.openSignup
    }
  }
}
</script>
