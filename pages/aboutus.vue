<template>
  <div>
     <AppHeader />
    <InnerBanner :title="title" /> 
    <!-- :aboutbanner="aboutbanner" -->
     <TechWeUse />
     <SatisfiedClients />
     <AppFooter />
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue'
import InnerBanner from '../components/InnerBanner.vue'
import TechWeUse from '../components/TechWeUse.vue'
import SatisfiedClients from '../components/SatisfiedClients'
import AppFooter from '../components/AppFooter'


export default {
    name: "AboutUs",
    components: { AppHeader , TechWeUse , AppFooter , SatisfiedClients , InnerBanner },
    data(){
    return {
      title: "About Us"
    }
  }
    // data() {
    //     return {
    //         aboutbanner: [
    //             {
    //             title: 'About Us',
    //             },
    //         ],
    //     }
    // }
}
</script>
