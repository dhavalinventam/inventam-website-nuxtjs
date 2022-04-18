<template>
  <div>
    <AppHeader />
    <InnerBanner :title="title" :deskbannerImg="deskbannerImg" :mobbannerImg="mobbannerImg" />
  </div>
</template>

<script>
import InnerBanner from '../components/InnerBanner.vue'
import AppHeader from '../components/AppHeader.vue'
import DeskBanner from '../static/image/contact-us-desk-banner.jpg'
import MobBanner from '../static/image/contact-us-mob-banner.jpg'

export default {
  name: 'ConatctUs',
  components: { AppHeader, InnerBanner },
  data() {
    return {
      title: 'Contact Us',
      deskbannerImg: DeskBanner,
      mobbannerImg: MobBanner,
    }
  },
}
</script>
