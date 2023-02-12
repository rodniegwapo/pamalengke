<template>
  <div>
    <div class="flex flex-wrap w-full bg-white py-4 rounded-lg shadow-2xl">
      <div class="flex flex-wrap w-full mx-auto">
        <div class="flex flex-wrap w-full justify-start">
          <table class="table-responsive w-full lg:text-sm text-xs">
            <thead class="bg-gray-200 text-black">
              <th class="px-2 py-2 text-left pl-4">
                Product
              </th>
              <th class="px-2 py-2">
                Unit Price
              </th>
              <th class="px-2 py-2">
                Action
              </th>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td class="flex border-b px-4 py-2">
                  <img
                    v-lazy-load
                    :src="product.src"
                    class="w-12 object-scale-down"
                  >{{ product.description }}
                </td>
                <td class="border-b px-4 py-2">
                  {{ product.price }}
                </td>
                <td class="border-b px-4 py-2">
                  <button class="flex bg-yellow-600 text-white text-sm lg:px-2 pl-1 py-1 rounded-lg focus:outline-none">
                    <svg
                      class="fill-current w-8"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    ><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
                    &nbsp;<lable class="lg:block md:hidden hidden">
                      Add to Cart
                    </lable>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex w-full mx-auto justify-center">
            <ProfilePagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePagination from '~/components/profile/ProfilePagination.vue'
export default {
  components: {
    ProfilePagination
  },
  data () {
    return {
      openTable: true,
      openProduct: false,
      products: [
        {
          id: 1,
          title: 'Coca Cola',
          description: '1.5 Liters',
          price: 69,
          sale: true,
          discount: 50,
          src: 'images/bev1.jpg',
          variations: [
            {
              color: 'bg-blue-900'
            },
            {
              color: 'bg-green-600'
            },
            {
              color: 'bg-pink-500'
            },
            {
              color: 'bg-yellow-500'
            }
          ]
        },
        {
          id: 1,
          title: 'Loaf Bread',
          description: 'Gardenia Classic more description here',
          price: 55,
          sale: false,
          discount: 0,
          src: 'images/bread1.jpg',
          variations: [
            {
              color: 'bg-yellow-900'
            },
            {
              color: 'bg-blue-600'
            },
            {
              color: 'bg-red-500'
            },
            {
              color: 'bg-gray-500'
            }
          ]
        },
        {
          id: 1,
          title: 'Corn Beef',
          description: 'Purefoods',
          price: 80,
          sale: true,
          discount: 20,
          src: 'images/can1.jpg',
          variations: [
            {
              color: 'bg-blue-900'
            },
            {
              color: 'bg-green-600'
            },
            {
              color: 'bg-pink-500'
            },
            {
              color: 'bg-yellow-500'
            }
          ]
        },
        {
          id: 1,
          title: 'Loaf Bread',
          description: 'Gardenia Classic',
          price: 55,
          sale: true,
          discount: 10,
          src: 'images/bread1.jpg',
          variations: [
            {
              color: 'bg-yellow-900'
            },
            {
              color: 'bg-blue-600'
            },
            {
              color: 'bg-red-500'
            },
            {
              color: 'bg-gray-500'
            }
          ]
        },
        {
          id: 1,
          title: 'Loaf Bread',
          description: 'Gardenia Classic',
          price: 55,
          sale: false,
          discount: 0,
          src: 'images/bread1.jpg',
          variations: [
            {
              color: 'bg-yellow-900'
            },
            {
              color: 'bg-blue-600'
            },
            {
              color: 'bg-red-500'
            },
            {
              color: 'bg-gray-500'
            }
          ]
        }
      ]
    }
  }
}
</script>
