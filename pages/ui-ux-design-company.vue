<template>
  <div>
    <AppHeader />
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="leftSide1.section1title1"
        :leftpara1="leftSide1.section1para1"
        :leftpara2="leftSide1.section1para2"
        :leftimg="leftSide1.section1img1"
        :isButton="leftSide1.isButton"
      />
    </div>
    <div>
      <RightSideFormat
        :RightSectiontitle="rigthtSide1.rightsection1title1"
        :Rightparagraph1="rigthtSide1.rightsection1para1"
        :Rightparagraph2="rigthtSide1.rightsection1para2"
        :RightSectionImg="rigthtSide1.rightsection1img1"
        :isButton="rigthtSide1.isButton"
      />
    </div>
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="leftSide2.section2title1"
        :leftpara1="leftSide2.section2para1"
        :leftpara2="leftSide2.section2para2"
        :leftimg="leftSide2.section2img1"
        :isButton="leftSide2.isButton"
        :isSubHeading="leftSide2.isSubHeading"
      />
    </div>
    <CoreValue :coreValue="CoreValue" />
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="leftSide3.section3title1"
        :leftpara1="leftSide3.section2para1"
        :leftimg="leftSide3.section3img1"
        :leftbutton="leftSide3.section3btn"
        :link="leftSide3.link"
      />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import LeftSideFormat from '../components/LeftSideFormat.vue'
import RightSideFormat from '../components/RightSideFormat.vue'
import CoreValue from '../components/CoreValue.vue'

import leftsectionimg1 from '../static/image/ui-ux-developer-img1.png'
import rightsectionimg1 from '../static/image/ui-ux-developer-img2.png'
import leftsectionimg2 from '../static/image/ui-ux-developer-img3.png'
import icon1 from '../static/image/mobile-developement-icon.png'
import icon2 from '../static/image/web-apps-website-development-icon.png'
import icon3 from '../static/image/effective-strategies-icon.png'
import icon4 from '../static/image/cost-effectiveness-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'HybridMobileAppsDevelopmentCompany',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Inventam Tech Solution is the best UI UX Design Company in Surat, India. Our agency is widely known for innovative and creative Web and App Designing Services at lowest price',
        },
      ],
    }
  },

  components: {
    AppHeader,
    AppFooter,
    LeftSideFormat,
    RightSideFormat,
    CoreValue,
  },
  data() {
    return {
      // SEO Page Title
      title: 'Best UI UX Design Company for Web and App Designing Services in Surat, India',

      leftSide1: {
        section1title1: 'India’s Best UI UX Design Company',
        section1para1:
          'Inventam Tech Solution is the best UI UX Design Company in Surat, India. We understand the power of User Interface (UI) and User Experience (UX) engineering with significant 5+ years of web and application design experience to provide you specially-crafted UI UX design services that can help your app and idea stand out. Our UI/UX designers team can work as your extended team, bringing a mix of strategy, design, and technology to the table for enterprises and startups who wish to build products with great user experience at an affordable price.',
        section1para2:
          'We are the team of UI UX Designers experienced in delivering a wide variety of designs to understand the needs of the users and give enough space for their expectations. We build creative and impressive designs that are helpful, functional, and desirable and within your means with the latest technology trends in your business.',
        section1img1: leftsectionimg1,
        isButton: false,
      },
      rigthtSide1: {
        rightsection1title1:
          'Why Inventam Best for UI UX Design Services',
        rightsection1para1:
          'Our expert team of graphic designers has expertise in flexible and creative in everything you need to design and help in assisting clients in a diverse range of sectors from beginning to end. Our User Interface (UI) and User Experience (UX) designers ensure that your mobile or web app reflects your brand by following the existing brand guidelines or creating one to develop an engaging UI and UX that resonates with the intended target audience.',
        rightsection1para2:
          'We help organizations evolve their creative idea into a successful business. Being the top UI UX Design Company, we deliver hassle-free and cost-effective designs of your product to bring a high rate of user conversion to your online business. Our team believes that the system should speak the language of the user.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },
      leftSide2: {
        section2title1: 'We Specialized in UI UX Web Design',
        section2para1:
          'We specialized in UI UX web design and web application for website user interface and user experience design company for B2B solutions in healthcare, education, IT, and many other industries. We believe that everything which affects an end user is part of the design process. That’s why we provide ongoing UI/UX design, remote staff augmentation, and constant iterative design improvements.',
        section2para2:
          'We work closely with our clients to identify key performance indicators at all stages of the process, from wireframe and information architecture development to UI and UX design and ongoing integration support. Our entire go-to-market process for web and app design, crafting a UI/UX experience for our clients that can get excited about and can’t wait to put into their users’ hands.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: false,
      },
      CoreValue: {
        secTitle: 'Our Core Values',
        data: [
          {
            icon: icon1,
            heading: 'Mobile UI UX Design',
            description:
              'Design human-centric mobile application interfaces that provide customers with a unified and engaging user experience and increase ROI.',
          },
          {
            icon: icon2,
            heading: 'Web UI UX Design',
            description:
              'We are leading web UI and UX Design Company services that can increase user satisfaction, reduce development costs and deliver a high ROI.',
          },
          {
            icon: icon3,
            heading: 'Visual Design',
            description:
              'Our visual design services are based on creative and original concepts that speak to your audience by articulating corporate culture and style.',
          },
          {
            icon: icon4,
            heading: 'Affordable Pricing',
            description:
              'Our deep understanding of UI UX design process enables us to design web and app that are highly functional, so you can aviod costly re-works.',
          },
        ],
      },
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We deliver beautiful and high-functioning UI UX design to our clients. From implementing visual graphics and using the user interface (UI) and user experience (UX) design methods, Inventam stays ahead of the curve in UI/UX design services. Our top notch designers are committed to create magic! We create exclusively branded user interfaces and user experience that actually represent your web and app without compromising with its usability. We keep up a proper UI/UX balance to create a system which is both flexible and practical. We will help you uphold your values and achieve your goals through interactive designs that captivate the visitor’s attention.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
        link: '/contactus',
      },
    }
  },
}
</script>
