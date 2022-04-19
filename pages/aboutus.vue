<template>
  <div>
    <AppHeader />
    <InnerBanner :title="title" :deskbannerImg="deskbannerImg" :mobbannerImg="mobbannerImg" />
    <div class="bg-gray">
      <LeftSideFormat :lefttitle="section1title1" :leftpara1="section1para1" :leftpara2="section1para2" :leftbutton="section1button1" :leftimg="section1img1" />
    </div>
    <TechWeUse />
    <div class="bg-gray">
      <LeftSideFormat :lefttitle="section2title1" :leftpara1="section2para1" :leftbutton="section2button1" :leftimg="section2img1" />
    </div>
    <SatisfiedClients />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import InnerBanner from '../components/InnerBanner.vue'
import LeftSideFormat from '../components/LeftSideFormat.vue'
import TechWeUse from '../components/TechWeUse.vue'
import SatisfiedClients from '../components/SatisfiedClients'
import AppFooter from '../components/AppFooter'
import DeskBanner from '../static/image/about-us-desk-banner.jpg'
import MobBanner from '../static/image/about-us-mob-banner.jpg'
import leftsectionimg1 from '../static/image/who-we-are-img.png'


export default {
  name: 'AboutUs',
  components: {
    AppHeader,
    TechWeUse,
    AppFooter,
    SatisfiedClients,
    InnerBanner,
    LeftSideFormat,
  },
  data() {
    return {
      title: 'About Us',
      deskbannerImg: DeskBanner,
      mobbannerImg: MobBanner,

      section1title1: 'Who we are!',
      section1para1: 'We are Team of talented IT Experts, With more than 5 years of working experience in the field of Information Technology',
      section1para2: 'We are working with clients across the globe, we have completed more than 94 projects and deal with more than 40 clients who belong to 10 different countries.',
      section1button1: 'Contact Us',
      section1img1: leftsectionimg1,

      section2title1: 'Why choose us?',
      section2para1: 'We have dive deeper into Cloud services and solutions such as SaaS, IaaS, and various backend solutions based on Node.js & Laravel. Our experience provides you the best business-specific solutions that the clients need.',
      section2button1: 'Contact Us',
      section2img1: leftsectionimg1,
      
    }
  },
}
</script>
