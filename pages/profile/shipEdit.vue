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
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z" /></svg>
          &nbsp;Edit Shipping Address
        </h1>
      </div>
      <form class="w-full bg-white py-2">
        <div class="flex flex-wrap w-full  shadow-2xl py-1">
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
          </div>
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Email
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. janedoe123@mail.com">
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Middle Name
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="---">
          </div>
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Purok No. / Purok Name
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. Purok 1 Tambis">
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Last Name
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Doe">
          </div>
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Barangay
            </label>
            <Barangays class="block w-full" />
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white shadow-2xl py-1">
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Mobile Number
            </label>
            <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. 09958272465">
          </div>
          <div class="flex flex-wrap lg:w-1/2 md:1/2 w-full px-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              City
            </label>
            <input id="grid-first-name" disabled class="appearance-none block w-full bg-gray-200 text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" value="Panabo City">
          </div>
        </div>
      </form>
      <div class="flex w-full bg-green-600 justify-end py-4 px-2">
        <div class="flex px-4">
          <nuxt-link to="/profile" class="rounded-full focus:outline-none text-white bg-green-700 hover:bg-green-600 px-8 py-2 transform ease-in hover:scale-110">
            Cancel
          </nuxt-link>
        </div>
        <div class="flex px-4">
          <nuxt-link to="/profile" class="rounded-full focus:outline-none text-white bg-yellow-700 hover:bg-yellow-600 px-8 py-2 transform ease-in hover:scale-110">
            Update Profile
          </nuxt-link>
        </div>
        <div class="lg:w-1/6 lg:block md:hidden hidden absolute z-40 bottom-0 -mb-48 -mr-4 right-0">
          <img src="~assets/images/bg_shop.png" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/profile/ProfileHeader'
import Barangays from '~/components/Barangays'
export default {
  layout: 'orders',
  name: 'ImageUpload',
  components: {
    ProfileHeader,
    Barangays
  },
  data () {
    return {
      item: {
        // ...
        image: null,
        imageUrl: null
      }
    }
  },
  methods: {
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
