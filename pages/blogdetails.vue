<template>
  <div>
    <AppHeader />
    <div class="blog-details-main-div common-padding-div">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <BlogDescription />
          </div>
          <div class="col-md-4">
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import BlogCategories from '../components/BlogCategories.vue'
import BlogDescription from '../components/BlogDescription.vue'

export default {
  name: 'BlogDetails',
  components: {
    AppHeader,
    AppFooter,
    BlogCategories,
    BlogDescription,
  },
}
</script>
