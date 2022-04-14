<template>
  <div>
    <AppHeader />
    <HomeBanner />
    <HomeHireDev />
    <CoreServices />
    <TechWeUse />
    <OurApproach />
  </div>
</template>









<script>
import AppHeader from '../components/AppHeader.vue'
import HomeBanner from '../components/HomeBanner.vue'
import HomeHireDev from '../components/HomeHireDev.vue'
import CoreServices from '../components/CoreServices.vue'
import TechWeUse from '../components/TechWeUse.vue'
import OurApproach from '../components/OurApproach'

export default {
  components: { AppHeader , HomeBanner , HomeHireDev , CoreServices , TechWeUse , OurApproach },
  name: 'IndexPage',
}
</script>
