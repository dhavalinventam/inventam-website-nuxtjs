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
        :leftimg="leftSide2.section2img1"
        :isButton="leftSide2.isButton"
        :isSubHeading="leftSide2.isSubHeading"
        :subheadingtitle1="leftSide2.subheadingtitle1"
        :subheadingpara1="leftSide2.subheadingpara1"
        :subheadingtitle2="leftSide2.subheadingtitle2"
        :subheadingpara2="leftSide2.subheadingpara2"
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

import leftsectionimg1 from '../static/image/sass-development-img1.png'
import rightsectionimg1 from '../static/image/sass-development-img3.png'
import leftsectionimg2 from '../static/image/sass-development-img2.png'
import icon1 from '../static/image/effective-strategies-icon.png'
import icon2 from '../static/image/design-development-icon.png'
import icon3 from '../static/image/proactive-management-icon.png'
import icon4 from '../static/image/cost-effectiveness-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'SaasApplicationDevelopmentCompany',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hire SaaS developer in Surat, India from Inventam Tech Solution, the best SaaS Application development company offers custom web and app development services.',
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
      title: "Hire SaaS Application Development Company's Developer for Web &amp; App Services in Surat, India",

      leftSide1: {
        section1title1: 'Raising SAAS Development Company',
        section1para1:
          'Inventam Tech Solution is the leading name as best SAAS Application Development company of Surat, India with significant experience (5+ Years) to transform the different industries. Our rich SaaS development process includes development, unit testing, and integration through planning, implementation, scaling, and builds something that will solve the challenges at affordable prices.',
        section1para2:
          'We are a team of SaaS developers, experienced in delivering SAAS solutions with multi-tenant support, configurability, scalability, security, and monitoring. The benefits of this delivery method include lower overall development costs, centralized upgrades, improved integration, and lower initial setup costs. Essentially, all these advantages translate into a lower-cost alternative for every client.',
        section1img1: leftsectionimg1,
        isButton: false,
      },
      rigthtSide1: {
        rightsection1title1: 'Why Inventam Best for SAAS Development Services',
        rightsection1para1:
          'Our SAAS development services offer SAAS consulting, architectural consulting, development, build offline capabilities, office integration, SOA integration, testing, SAAS migration, and much more. We optimize the entire development process in SAAS Model and provide cutting-edge hardware, software, infrastructure technologies, security, customization, integration, and much more.',
        rightsection1para2:
          'Our SaaS expert team proficient in technologies like Java, Microsoft ASP.NET, SQL Server, Oracle, My SQL, Ruby on Rails, Python and Perl, LAMP, and many others. We reduce the management complexity of a business and help to free up a business’ IT personnel and budgets to focus on more business-critical functions.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },
      leftSide2: {
        section2title1: 'Customized SAAS Development Solutions',
        section2para1:
          'The core team of SAAS developers offers customized SaaS solutions 24×7 with monitoring and management by involving the best technologies and processes in the SAAS arena to create and maintain the finest revenue-generating solutions for any business.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: true,
        subheadingtitle1: 'SAAS Application Development',
        subheadingpara1:
          'SAAS applications have greater availability to customers and ensure better accessibility for proper communication. Our developers are determined to develop the most scalable applications with the right architecture.',
        subheadingtitle2: 'SAAS Mobile Application Development',
        subheadingpara2:
          'We are the team of SaaS mobile application development expert in developing all mobile application platforms which are user-friendly and have unique features and specifications.',
      },
      CoreValue: {
        secTitle: 'Our Core Values',
        data: [
          {
            icon: icon1,
            heading: 'Effective Strategies',
            description: 'Leverage Proven Roadmap Ready For Your Saas Project',
          },
          {
            icon: icon2,
            heading: 'Design & Development',
            description: 'Start With Design And Development For Your Saas App',
          },
          {
            icon: icon3,
            heading: 'Proactive Management',
            description: 'Deliver a Contemporary & Immersive Software Solution',
          },
          {
            icon: icon4,
            heading: 'Cost Effectiveness',
            description: 'Save Through Cost Effective Global Delivery Model',
          },
        ],
      },
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We have dive deeper into Cloud services and solutions such as SaaS, IaaS, and various backend solutions based on Node.js & Laravel. Our experience provides you the best business-specific solutions that the clients need. We are a SaaS application development company with hands-on experience in creating top-performing softwares, websites along with cloud based applications. Our SaaS development process covers planning, designing & development, testing, 3rd party integration, and ongoing support/maintenance.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
        link: '/contactus',
      },
    }
  },
}
</script>
