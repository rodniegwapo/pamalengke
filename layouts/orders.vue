<template>
  <div class="bg-green-100">
    <MiniHeader />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import MiniHeader from '~/components/navigation/MiniHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    MiniHeader,
    Footer
  }
}
</script>
