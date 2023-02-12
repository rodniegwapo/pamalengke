<template>
  <div>
    <div class="flex flex-wrap w-full lg:px-10 px-4 text-gray-800">
      <div class="container w-full">
        <Table class="w-full" show-remove="true" />
      </div>
      <div class="flex w-full">
        <div class="flex w-full pb-2 -mx-2 lg:flex">
          <div class="lg:px-2 lg:w-full">
            <div class="p-4 mt-4 bg-gray-200 rounded-full">
              <h1 class="ml-2 font-bold uppercase">
                Instruction for seller
              </h1>
            </div>
            <div class="p-4">
              <p class="mb-4 italic">
                If you have some information for the seller you can leave them in the box below
              </p>
              <textarea :value="value" class="w-full h-24 p-2 bg-gray-200 rounded" @input="$emit('input', $event.target.value)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '~/components/checkout/Table.vue'
export default {
  components: {
    Table
  }
}
</script>
