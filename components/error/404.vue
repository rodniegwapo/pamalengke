<template>
  <div class="">
    <div class="flex flex-wrap px-10 py-24 justify-center">
      <img src="~/assets/svg/404.svg" class="object-fit lg:h-64 w-full">
      <div class="flex w-full justify-center text-center">
        <label class="lg:text-2xl md:text-2xl text-sm py-2">
          It seems like the page you are looking for is not found.
          <!-- Ang panid nga imong gipangita kay dili makit-an. -->
        </label>
      </div>
      <div class="flex w-full justify-center">
        <nuxt-link to="/">
          <button class="flex justify-center  w-full px-10 py-3 mt-6 tracking-wider font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none" @click="contentProgress = 0">
            <svg
              class="fill-current w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            ><path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" /></svg>
            <span class="ml-2 mt-5px">Back to Home</span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
