<template>
  <div class="bg-green-100">
    <MiniHeader />
    <Nuxt />
    <MiniFooter />
  </div>
</template>

<script>
import MiniHeader from '~/components/navigation/MiniHeader.vue'
import MiniFooter from '~/components/navigation/MiniFooter.vue'

export default {
  components: {
    MiniHeader,
    MiniFooter
  }
}
</script>
