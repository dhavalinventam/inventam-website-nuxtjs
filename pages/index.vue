<template>
  <div>
    <AppHeader />
    <HomeBanner />
    <div class="why-hire-developers-main-div">
      <RightSideFormat
        :RightSectiontitle="rigthtSide1.rightsection1title1"
        :Rightparagraph1="rigthtSide1.rightsection1para1"
        :Rightparagraph2="rigthtSide1.rightsection1para2"
        :RightSectionImg="rigthtSide1.rightsection1img1"
        :link="rigthtSide1.link"
        :leftbutton="rigthtSide1.section1btn"
        :isSubPoints="rigthtSide1.isSubPoints"
        :SubPoints1="rigthtSide1.SubPoints1"
        :SubPoints2="rigthtSide1.SubPoints2"
        :SubPoints3="rigthtSide1.SubPoints3"
        :SubPoints4="rigthtSide1.SubPoints4"
        :SubPoints5="rigthtSide1.SubPoints5"
      />
      <div class="world-icon-div">
        <img
          src="image/world-icon.png"
          class="img-fluid world-icon image-move"
        />
      </div>
    </div>
    <CoreServices />
    <TechWeUse />
    <div class="bg-gray our-approach-sec-main-div common-padding-div">
      <div class="common-heading-div">
        <h2 class="common-heading-text">Our Approach</h2>
        <p class="common-hight-text">We Follow Agile Methodology</p>
      </div>
      <LeftSideFormat
        :leftpara1="leftSide1.section1para1"
        :leftpara2="leftSide1.section1para2"
        :leftimg="leftSide1.section1img1"
        :leftbutton="leftSide1.leftsection1btn"
        :link="leftSide1.link"
        :isLeftSubPoints="leftSide1.isLeftSubPoints"
        :LeftSubPoints1="leftSide1.LeftSubPoints1"
        :LeftSubPoints2="leftSide1.LeftSubPoints2"
        :LeftSubPoints3="leftSide1.LeftSubPoints3"
        :LeftSubPoints4="leftSide1.LeftSubPoints4"
        :LeftSubPoints5="leftSide1.LeftSubPoints5"
      />
    </div>
    <HowWeDo />
    <!-- <BlogItems /> -->
    <SatisfiedClients />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import HomeBanner from '../components/HomeBanner.vue'
import CoreServices from '../components/CoreServices.vue'
import TechWeUse from '../components/TechWeUse.vue'
import HowWeDo from '../components/HowWeDo'
// import BlogItems from '../components/BlogItems'
import SatisfiedClients from '../components/SatisfiedClients'
import AppFooter from '../components/AppFooter'
import RightSideFormat from '../components/RightSideFormat.vue'
import rightsectionimg1 from '../static/image/hire-developers.png'
import LeftSideFormat from '../components/LeftSideFormat.vue'
import leftsectionimg1 from '../static/image/our-approach-img.png'

export default {
  name: 'IndexPage',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hire Web and Mobile Application developer in Surat, India from Inventam Tech Solution. Best Web and Mobile Apps development company offers SAAS application, Web Application, Serverless Applications, Hybrid Mobile Apps, Full Stack, Devops, Custom API development with UI UX Design services.',
        },
      ],
    }
  },

  components: {
    AppHeader,
    HomeBanner,
    CoreServices,
    TechWeUse,
    HowWeDo,
    // BlogItems,
    SatisfiedClients,
    AppFooter,
    RightSideFormat,
    LeftSideFormat,
  },

  data() {
    return {
      // SEO Page Title
      title: "Hire Web and Mobile Application Development Company's Developer for Web and Mobile Apps Services in Surat, India",

      rigthtSide1: {
        rightsection1title1: 'Why Hire Developers from Inventam Tech?',
        rightsection1para1:
          'We are Team of talented IT Experts, With more than 5 years of working experience in the field of Information Technology',
        rightsection1para2:
          'We are working with clients across the globe, we have completed more than 94 projects and deal with more than 40 clients who belong to 10 different countries.',
        rightsection1img1: rightsectionimg1,
        section1btn: 'Contact Us', 
        link: '/contactus',
        isSubPoints: true,
        SubPoints1: 'Experienced and Certified Developers Team',
        SubPoints2: 'Significant 5+ Years Experience in Business',
        SubPoints3: 'Agile approach to Mobile App Development',
        SubPoints4: 'Earned Clients from more than 20 Countries',
        SubPoints5: 'Flexible Delivery and Commercial Models',
      },
      leftSide1: {
        section1para1:
          'We delicately follow the Agile + iterative approach for enterprise software development company. The development teams effectively work as per the agile methodology under the powerful guidance of the agile master.',
        isLeftSubPoints: true,
        section1para2:
          'From start to completion of every project we undertake, Innovare applies the knowledge gained from years of experience working with development projects. Giving you time to time update of each step.',
        section1img1: leftsectionimg1,
        isButton: true,
        leftsection1btn: 'Contact Us',
        link: '/contactus',
        LeftSubPoints1:
          'We create concepts based on the logical approach & ensure its feasibility with major technologies.',
        LeftSubPoints2:
          'Technical models get life through architecture, coding, developing, designing and testing.',
        LeftSubPoints3:
          'Development has a complex procedure. Therefore, we refine the project before deployment.',
        LeftSubPoints4:
          'Our Concepts are turned down into technical models with the help of innovative ideas.',
        LeftSubPoints5:
          'Project is thoroughly examined on different parameters including the core client requirements.',
      },
    }
  },
}

// AOS.init();
</script>
