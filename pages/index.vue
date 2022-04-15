<template>
  <div>
    <AppHeader />
    <HomeBanner />
    <HomeHireDev />
    <CoreServices />
    <TechWeUse />
    <OurApproach />
    <HowWeDo />
    <BlogListing />
    <SatisfiedClients />
    <AppFooter />
  </div>
</template>






<script>
import AppHeader from '../components/AppHeader.vue'
import HomeBanner from '../components/HomeBanner.vue'
import HomeHireDev from '../components/HomeHireDev.vue'
import CoreServices from '../components/CoreServices.vue'
import TechWeUse from '../components/TechWeUse.vue'
import OurApproach from '../components/OurApproach'
import HowWeDo from '../components/HowWeDo'
import BlogListing from '../components/BlogListing'
import SatisfiedClients from '../components/SatisfiedClients'
import AppFooter from '../components/AppFooter'

export default {
  components: { AppHeader , HomeBanner , HomeHireDev , CoreServices , TechWeUse , OurApproach , HowWeDo , BlogListing , SatisfiedClients , AppFooter },
  name: 'IndexPage',
}
</script>
