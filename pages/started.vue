<template>
  <div>
    <div class="flex flex-wrap w-full mx-auto justify-center bg-green-100">
      <div class="flex flex-wrap lg:w-3/4 md:w-3/4 w-full mx-auto justify-center rounded-lg px-4 my-8 z-20">
        <div class="flex w-full bg-green-500 bg-circle shadow-2xl mx-auto justify-center py-2">
          <div class="flex w-1/2 px-4 py-4 text-white">
            <h1 class="flex lg:text-xl md:text-base text-sm lg:font-bold font-semibold">
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              ><path d="M19.957 4.035c-.345-.024-.682-.035-1.012-.035-7.167 0-11.248 5.464-12.732 9.861l3.939 3.938c4.524-1.619 9.848-5.549 9.848-12.639 0-.367-.014-.741-.043-1.125zm-9.398 11.815l-2.402-2.402c1.018-2.383 3.91-7.455 10.166-7.767-.21 4.812-3.368 8.276-7.764 10.169zm4.559 1.282c-.456.311-.908.592-1.356.842-.156.742-.552 1.535-1.126 2.21-.001-.48-.135-.964-.369-1.449-.413.187-.805.348-1.179.49.551 1.424-.01 2.476-.763 3.462 1.08-.081 2.214-.61 3.106-1.504.965-.962 1.64-2.352 1.687-4.051zm-9.849-5.392c-.482-.232-.965-.364-1.443-.367.669-.567 1.453-.961 2.188-1.121.262-.461.556-.915.865-1.361-1.699.046-3.09.723-4.054 1.686-.893.893-1.421 2.027-1.503 3.106.986-.753 2.039-1.313 3.463-.762.145-.391.305-.785.484-1.181zm6.448.553c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.854 0 1.179-.326.325-.853.325-1.178-.001zm4.124-4.125c-.65-.65-1.706-.65-2.356 0-.651.651-.651 1.707 0 2.357.65.651 1.706.651 2.357 0 .65-.65.65-1.706-.001-2.357zm-1.591 1.592c-.228-.228-.228-.598 0-.825.227-.228.598-.228.826 0 .227.227.226.597 0 .825-.228.227-.598.227-.826 0zm-12.609 10.555l-.755-.755 4.341-4.323.755.755-4.341 4.323zm4.148 1.547l-.755-.755 3.03-3.054.756.755-3.031 3.054zm-5.034 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z" /></svg>
              &nbsp;Let's Get Started
            </h1>
          </div>
          <div class="flex w-1/2 px-4 justify-end">
            <img src="~assets/images/logo.png" class="h-16 object-scale-down">
          </div>
        </div>
        <div class="flex w-full bg-green-200 shadow-2xl py-2 lg:text-base text-xs">
          <div class="flex w-1/2 px-4">
            <label class="font-bold text-base text-gray-700">Profile Information</label>
          </div>
          <div class="flex w-1/2">
            <label class="font-bold text-base text-gray-700">Shipping Address</label>
          </div>
        </div>
        <form class="w-full bg-white py-2">
          <div class="flex w-full  shadow-2xl py-1">
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
            </div>
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. janedoe123@mail.com">
            </div>
          </div>
          <div class="flex w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Middle Name
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="---">
            </div>
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Purok No. / Purok Name
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. Purok 1 Tambis">
            </div>
          </div>
          <div class="flex w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Last Name
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Doe">
            </div>
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Barangay
              </label>
              <select class="block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                <option selected>
                  New Visayas
                </option>
                <option>San Francisco</option>
                <option>Santo Nino</option>
              </select>
            </div>
          </div>
          <div class="flex w-full bg-white shadow-2xl py-1">
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Mobile Number
              </label>
              <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="ex. 09958272465">
            </div>
            <div class="flex flex-wrap w-1/2 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                City
              </label>
              <input id="grid-first-name" disabled class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" value="Panabo City">
            </div>
          </div>
          <div class="flex w-full mx-auto bg-white justify-center pb-2">
            <label class="block text-gray-700 font-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="lg:text-sm text-xs">
                I agree to the terms and conditions.
              </span>
            </label>
          </div>
          <!---->
        </form>
        <div class="flex w-full bg-green-600 shadow-2xl mx-auto justify-center py-2">
          <button class="rounded-full focus:outline-none bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="lg:w-1/4 md:w-1/3 absolute z-40 bottom-0 right-0 lg:block md:block py-4 lg:mr-2 md:-mr-4 md:pr-0 pr-10 hidden">
      <img src="~assets/images/bg_shop.png" class="w-full">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style>
.bg-circle {
  background: linear-gradient(
    90deg,
    rgba(56,161,105,1) 0%,
    rgba(133,218,173,1) 35%,
    rgba(255,255,255,1) 100%
  );
}

</style>
