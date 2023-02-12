<template>
  <div v-if="modal">
    <div class="flex w-full h-screen fixed pin top-0 left-0 overflow-x-hidden">
      <div class="z-50 in-right w-full bg-green overflow-auto">
        <div class="bg-green-700 w-full flex justify-between px-4 py-4 text-3xl font-bold">
          <img src="~/assets/images/logow.png" class="object-fit h-12">
          <span @click="closeThis">
            <svg class="fill-current text-white mt-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
          </span>
        </div>
        <div class="mt-6">
          <div v-for="menu in menus" :key="menu.id" class="group flex w-full">
            <div class="flex w-full mt-4 justify-between text-white bg-green-600 py-5 px-8 rounded-full cursor-pointer">
              <span class="pr-1 flex">{{ menu.name }}</span>
              <span class="flex">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                ><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </div>
            <ul class="right-0 mr-10 mt-20 pb-10 shadow-lg cursor-pointer bg-white text-green-600 rounded-b-full transform list-none scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
              <li v-for="cat in menu.product_categories" :key="cat.id" class="relative px-3 py-1" @click="handleClicked">
                <nuxt-link :to="'/products/' + cat.slug" class="w-full text-left flex items-center outline-none focus:outline-none">
                  <span class="pr-1 flex-1">{{ cat.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showChildren: false,
      modal: true
    }
  },
  computed: {
    ...mapGetters({
      menus: 'menus'
    })
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    },
    closeModal () {
      this.modal = !this.modal
    },
    handleClicked () {
      setTimeout(() => this.closeModal('close'), 500)
    },
    closeThis () {
      this.closeModal('close')
    }
  }
}
</script>

<style>
@-webkit-keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
@-moz-keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
@keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
.in-right {
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-name: fadeInRight;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .1s;
    -moz-animation-duration: .1s;
    -o-animation-duration: .1s;
    animation-duration: .1s;
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -o-animation-duration:.1s;
    animation-delay: .1s;
}
</style>
