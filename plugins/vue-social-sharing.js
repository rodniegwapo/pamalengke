import VueSocialSharing from 'vue-social-sharing'
import Vue from 'vue'

Vue.use(VueSocialSharing, {
  networks: {
    instagram: 'https://instagram.com/share?url=@url&title=@title'
  }
})
