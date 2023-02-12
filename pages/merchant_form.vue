<template>
  <div class="bg-gray-300">
    <div class="flex flex-wrap w-full justify-center items-center lg:px-10 md:px-10 px-0 py-10 lg:mt-20 md:mt-20 mt-12">
      <div class="flex w-3/4 bg-green-600 rounded-t-lg px-10 py-2" />
      <div class="flex flex-wrap w-3/4 shadow-xl justify-between items-center bg-green-100 rounded-b-lg lg:px-10 md:px-10 px-2 py-2">
        <div class="flex lg:w-3/4 md:w-3/4 w-full text-2xl font-bold text-green-600 text-center">
          Register as a Vendor
        </div>
        <div class="flex lg:w-1/4 md:w-1/4 w-full justify-center items-center">
          <img src="~assets/svg/shops.svg" class="w-1/2">
        </div>
      </div>
      <div class="flex w-3/4 shadow-xl justify-center items-center bg-green-100 rounded-lg lg:px-10 md:px-10 px-2 py-2 mt-4">
        <img src="~assets/images/logo.png" class="lg:w-1/2 md:w-1/2 w-full">
      </div>
      <div class="flex flex-wrap w-3/4 shadow-xl justify-start items-center bg-green-100 rounded-lg lg:px-10 md:px-10 px-4 py-2 mt-4">
        <div class="w-full text-green-900">
          <b>Privacy Notice:</b> We will be collecting your personal information such as name, contact details, and other relevant data that will be used for our Merchant records. By checking this box, you agree to let the team store your information in our database and to contact you for <b>Pamalengke</b> Merchant initiatives, until such a time as the project is terminated or you revoke the given consent by reaching out to us. Your personal information will not be disclosed to other external sources without your further future consent.
        </div>
        <div class="flex items-center py-4">
          <input type="checkbox" class="w-4 h-4 mr-2">
          <span class="text-green-900">Yes, I Agree.</span>
        </div>
      </div>
      <div class="flex flex-wrap w-3/4 shadow-xl justify-start items-center bg-green-100 rounded-lg px-10 py-2 mt-4">
        <div class="w-full text-green-900">
          <b>Terms and Conditions:</b> If you do not agree to these Terms and Conditions, please do not use this site. <i>PLEASE NOTE:</i> We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes.
        </div>
        <div class="flex items-center py-4">
          <input type="checkbox" class="w-4 h-4 mr-2">
          <span class="text-green-900">Yes, I Agree.</span>
        </div>
      </div>
      <div class="flex flex-wrap w-3/4 shadow-xl justify-start items-center bg-green-100 rounded-lg lg:px-10 md:px-10 px-4 py-4 mt-4">
        <div class="block lg:w-1/2 md:w-1/2 w-full items-center px-2 py-10">
          <label class="text-lg text-green-600 font-semibold">FirstName</label>
          <input type="text" placeholder="ex. Jane" class="w-full bg-transparent border-b-2 border-green-600 px-3 py-1 text-gray-700 focus:outline-none">
        </div>
        <div class="block lg:w-1/2 md:w-1/2 w-full items-center px-2 py-10">
          <label class="text-lg text-green-600 font-semibold">LastName</label>
          <input type="text" placeholder="ex. Jane" class="w-full bg-transparent border-b-2 border-green-600 px-3 py-1 text-gray-700 focus:outline-none">
        </div>
        <div class="block lg:w-1/2 md:w-1/2 w-full items-center px-2 py-10">
          <label class="text-lg text-green-600 font-semibold">Email Address</label>
          <input type="text" placeholder="ex. Jane" class="w-full bg-transparent border-b-2 border-green-600 px-3 py-1 text-gray-700 focus:outline-none">
        </div>
        <div class="block lg:w-1/2 md:w-1/2 w-full items-center px-2 py-10">
          <label class="text-lg text-green-600 font-semibold">Mobile Number</label>
          <input type="text" placeholder="ex. Jane" class="w-full bg-transparent border-b-2 border-green-600 px-3 py-1 text-gray-700 focus:outline-none">
        </div>
        <div class="block w-full justify-start text-left items-center py-6">
          <p class="text-lg text-green-600 font-semibold">
            Are you a registered entity with the Department of Trade and Industry (“DTI”) or Securities and Exchange Commission (“SEC”)?
          </p>
          <div class="flex pt-6">
            <div class="flex items-center mb-2 mr-4">
              <input id="radio-example-1" type="radio" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2">
              <label for="radio-example-1" class="text-lg text-green-600 font-semibold">Yes</label>
            </div>
            <div class="flex items-center mb-2">
              <input id="radio-example-2" type="radio" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2">
              <label for="radio-example-2" class="text-lg text-green-600 font-semibold">No</label>
            </div>
          </div>
        </div>
        <div class="block w-full justify-start text-left items-center py-6">
          <p class="text-lg text-green-600 font-semibold">
            Do you have a valid health certificate for handling of food items?
          </p>
          <div class="flex pt-6">
            <div class="flex items-center mb-2 mr-4">
              <input id="radio-example-3" type="radio" name="radio1" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2">
              <label for="radio-example-3" class="text-lg text-green-600 font-semibold">Yes</label>
            </div>
            <div class="flex items-center mb-2">
              <input id="radio-example-4" type="radio" name="radio1" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2">
              <label for="radio-example-4" class="text-lg text-green-600 font-semibold">No</label>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center items-center py-10">
          <button class="focus:outline-none bg-yellow-600 text-white px-4 py-2 rounded-full transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
