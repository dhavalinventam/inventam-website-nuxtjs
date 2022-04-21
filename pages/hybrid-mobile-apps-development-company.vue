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

import leftsectionimg1 from '../static/image/hybrid-app-img2.png'
import rightsectionimg1 from '../static/image/hybrid-app-img1.png'
import leftsectionimg2 from '../static/image/hybrid-app-img3.png'
import icon1 from '../static/image/analysis-icon.png'
import icon2 from '../static/image/design-development-icon.png'
import icon3 from '../static/image/hybird-development-icon.png'
import icon4 from '../static/image/qa-testing-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'HybridMobileAppsDevelopmentCompany',
  components: {
    AppHeader,
    AppFooter,
    LeftSideFormat,
    RightSideFormat,
    CoreValue,
  },
  data() {
    return {
      leftSide1: {
        section1title1: 'India’s Leading Hybrid App Development Company',
        section1para1:
          'Inventam Tech Solution is the leading name as best Hybrid App Development Company in Surat, India with significant (5+ Years) experience to transform the different industries. Our Hybrid developers delivered 100+ Hybrid mobile apps for 60+ clients by using React Native, Flutter, Xamarin, Ionic and PhoneGap frameworks to build the apps that look like native ones on all the major platforms including iOS, Android and Windows devices.',
        section1para2:
          'We are a team of We are the team of Hybrid developers, experienced in delivering the hand-codes, scalable cross-platform framework to help you reach a wide range of audiences in the quickest time and with reduced development cost. We offer complete end-to-end solutions covering everything from requirement gathering, UI/UX designing, code testing to product maintenance and support. The final result is a client-satisfaction and maximum return on investment.',
        section1img1: leftsectionimg1,
        isButton: false,
      },
      rigthtSide1: {
        rightsection1title1:
          'Why Inventam Best for Hybird App Development Services',
        rightsection1para1:
          'Our Hybrid development services offer a wide range of world-class app development services for our global clients as per their unique needs. Building quality solutions in a cost-effective manner are always a tricky challenge. But, Inventam Tech Solution makes that possible by combining its vast domain knowledge and technological expertise. Our Hybrid expert’s team proficient in the hybrid platforms viz. JavaScript, HTML5, PhoneGap, Cordova, and AdobeAir, and many others.',
        rightsection1para2:
          'We leverage our strong experience in cross-platform development technologies like HTML5, jQuery, CSS3, AngularJS, and Angular Material to design & develop mobile applications for multi-platform accessibility. Our end-to-end hybrid application development services have been used by businesses from all around the world. You won’t have to worry about the future either, as our developers will always here to help you maintain, update, and modernize your app as needed.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },
      leftSide2: {
        section2title1: 'Cross Platform App Development',
        section2para1:
          'The core team of hybrid developers offers cross-platform app development solutions 24×7 with monitoring and management by involving the best technologies and processes in cross-platform framework to create and maintain the finest revenue-generating solutions for any business. Our team develops your product in modules, wraps under the cross-platform hybrid mobile app development frameworks which work great for blending a wide array of web technologies like HTML 5, CSS3, and native languages like Javascript tests it on real devices, and delivers you the feature-rich cross-platform app.',
        section2para2:
          'We build products with optimized performance. As a cross-platform mobile app development company, we know how to use the right APIs and make data processing quick to deliver hybrid applications with native alike performance. We understand your business needs and build applications with a single code base for greater market penetration.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: false,
      },
      CoreValue: {
        secTitle: 'What Makes Our Process Stand Out From The Rest?',
        data: [
          {
            icon: icon1,
            heading: 'Analysis',
            description:
              'We analysis the business & technical needs and document the scope for a smooth execution.',
          },
          {
            icon: icon2,
            heading: 'Design',
            description:
              'Creating a sketch and proceed the designing a rich user interface with the end user experience.',
          },
          {
            icon: icon3,
            heading: 'Development',
            description:
              'Creating a database model, developing the functionalities to conducting unit tests of application.',
          },
          {
            icon: icon4,
            heading: 'QA Testing',
            description:
              'QA / QC practices to ensure the application meets quality standards as per your requirement.',
          },
        ],
      },
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We have dive deeper experience in web and native apps to develop high-performance cross-platform mobile apps that behave like native on iOS, Android and Windows mobile platforms. Our experience provides you the best business-specific solutions that the clients need. We are a Hybrid application development company with hands-on experience in creating top-performing mobile applications along with cross platform frameworks. We take each work as unique and custom, keeping the process very personalized for the product. Establishing a digital image of your business ideals to become smoother and efficiently done by getting hybrid app development services.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
      },
    }
  },
}
</script>
