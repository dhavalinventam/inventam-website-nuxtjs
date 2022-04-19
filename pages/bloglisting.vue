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
    components: {
        AppHeader,
        AppFooter,
        BlogListingComp,
    },
}
</script>

