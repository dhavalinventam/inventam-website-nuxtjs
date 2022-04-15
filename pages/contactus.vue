<template>
<div>
    <AppHeader />
  <InnerBanner :title="title"/>
</div>
</template>

<script>
import InnerBanner from '../components/InnerBanner.vue'
import AppHeader from '../components/AppHeader.vue'
export default {
    name: "ConatctUs",
    components: {AppHeader,  InnerBanner },
      data(){
    return {
      title: "Contact Us"
    }
  }
}
</script>
