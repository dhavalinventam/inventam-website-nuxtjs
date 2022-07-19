<template>
  <div>
    <AppHeader />
    <InnerBanner
      :title="bannerTitle"
      :deskbannerImg="deskbannerImg"
      :mobbannerImg="mobbannerImg"
    />
    <!-- About Us -->
     <RightSideFormat
        :RightSectiontitle="rightsection1title1"
        :Rightparagraph1="rightsection1para1"
        :Rightparagraph2="rightsection1para2"
        :RightSectionImg="rightsection1img1"
        :isSubPoints="isSubPoints"
        :SubPoints1="SubPoints1"
        :SubPoints2="SubPoints2"
        :SubPoints3="SubPoints3"
        :SubPoints4="SubPoints4"
        :SubPoints5="SubPoints5"
        :isButton="isButton"
      />

    <div class="bg-gray">
      <LeftSideFormat
      :lefttitle="section1title1"
      :leftpara1="section1para1"
      :leftpara2="section1para2"
      :leftbutton="section1button1"
      :leftimg="section1img1"
      :link="link1"
    />
    </div>

     <div class="vision-mission-div">
        <TechnologyBox :technologyBox="TechnologyBox" />
    </div>
    
    <!-- Our Instructor -->
    <div class="team-member-div bg-gray common-padding-div">
      <div class="shape-divider">
        <img src="image/wave-icon.svg" alt="">
      </div>
      <div class="container">
        <div class="common-heading-div">
        <h2 class="common-heading-text">Meet Our Instructor</h2>
        <!-- <p class="common-hight-text"></p> -->
      </div>
        <div class="row">
          <div class="col-md-3">
            <div class="user-div"> 
              <img src="image/ishani-desai.jpg" alt="" class="img-fluid">
              <h4>Ishani Desai</h4>
              <p>CEO & Co-Founder</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user-div"> 
              <img src="image/hareen-desai.jpg" alt="" class="img-fluid">
              <h4>Hareen Desai</h4>
              <p>CTO & Co-Founder</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user-div"> 
              <img src="image/mrugesh-hr.jpg" alt="" class="img-fluid">
              <h4>Mrugesh Tailor</h4>
              <p>HR Executive</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user-div"> 
              <img src="image/shivangi-hr.jpg" alt="" class="img-fluid">
              <h4>Shivangi Jariwala</h4>
              <p>HR Executive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import InnerBanner from '../components/InnerBanner.vue'
import LeftSideFormat from '../components/LeftSideFormat.vue'
import RightSideFormat from '../components/RightSideFormat.vue'
import AppFooter from '../components/AppFooter'
import DeskBanner from '../static/image/about-us-desk-banner.jpg'
import MobBanner from '../static/image/about-us-mob-banner.jpg'
import leftsectionimg1 from '../static/image/who-we-are-img.jpg'
import rightsideimg1 from '../static/image/about-us-page-img.png'
import TechnologyBox from '../components/TechnologyBox.vue'
import icon1 from '../static/image/our-vision-icon.png'
import icon2 from '../static/image/our-mission-icon.png'
import icon3 from '../static/image/our-value-icon.png'



export default {
  name: 'AboutUs',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Us - Inventam Tech Solution ( OPC ) PVT. LTD',
        },
      ],
    }
  },

  components: {
    AppHeader,
    AppFooter,
  RightSideFormat,
    InnerBanner,
    LeftSideFormat,
    TechnologyBox,
  },

  data() {
    return {
      // SEO Page Title
      title: 'About Us - Inventam Tech Solution ( OPC ) PVT. LTD',

      bannerTitle: 'About Us',
      deskbannerImg: DeskBanner,
      mobbannerImg: MobBanner,

      section1title1: 'Why choose us?',
      section1para1:
        'We have dive deeper into Cloud services and solutions such as SaaS, IaaS, and various backend solutions based on Node.js & Laravel. Our experience provides you the best business-specific solutions that the clients need.',
      section1para2:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer',
      section1button1: 'Contact Us',
      section1img1: leftsectionimg1,
      link1: '/contactus',

      rightsection1title1: 'More than 5+ years we provide IT Solution',
        rightsection1para1:
          'We are Team of talented IT Experts, With more than 5 years of working experience in the field of Information Technology',
        rightsection1para2:
          'We are working with clients across the globe, we have completed more than 94 projects and deal with more than 40 clients who belong to 10 different countries.',
        rightsection1img1: rightsideimg1,
        link: '/contactus',
        isSubPoints: true,
        isButton: false,
        SubPoints1: 'Experienced and Certified Developers Team',
        SubPoints2: 'Significant 5+ Years Experience in Business',
        SubPoints3: 'Agile approach to Mobile App Development',
        SubPoints4: 'Earned Clients from more than 20 Countries',
        SubPoints5: 'Flexible Delivery and Commercial Models',

        TechnologyBox: {
        secTitle: 'Our Vision & Mission',
        data: [
          {
            icon: icon1,
            heading: 'Vision',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            icon: icon2,
            heading: 'Mission',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            icon: icon3,
            heading: 'Value',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },


    }
  },
}
</script>
