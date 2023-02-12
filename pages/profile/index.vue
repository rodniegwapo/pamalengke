<template>
  <div>
    <div class="flex flex-wrap mx-auto w-full mt-4">
      <div class="container flex mx-auto w-full px-4 py-4">
        <ProfileHeader class="w-full" />
      </div>
      <div class="container flex mx-auto w-full px-4 py-4">
        <ProfileInfo class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/profile/ProfileHeader.vue'
import ProfileInfo from '~/components/profile/ProfileInfo.vue'

export default {
  middleware: 'auth',
  layout: 'orders',
  components: {
    ProfileHeader,
    ProfileInfo
  }
}
</script>
