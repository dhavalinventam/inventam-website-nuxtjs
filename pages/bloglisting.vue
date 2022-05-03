<template>
  <div>
    <AppHeader />
    <BlogListingComp />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BlogListingComp from '../components/BlogListingComp.vue'
export default {
  name: 'BlogListingPage',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog - Inventam Tech Solution ( OPC ) PVT. LTD',
        },
      ],
    }
  },

  components: {
    AppHeader,
    AppFooter,
    BlogListingComp,
  },

  data() {
    return {
      // SEO Page Title
      title: 'Blog - Inventam Tech Solution ( OPC ) PVT. LTD',

    }
  },

}
</script>
