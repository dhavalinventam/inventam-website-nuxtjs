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
        :RightSectionImg="rigthtSide1.rightsection1img1"
        :isButton="leftSide1.isButton"
      />
    </div>
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="leftSide2.section2title1"
        :leftpara1="leftSide2.section2para1"
        :leftimg="leftSide2.section2img1"
        :leftbutton="leftSide2.section2btn"
        :isSubHeading="leftSide2.isSubHeading"
      />
    </div>
    <div>
      <RightSideFormat
        :RightSectiontitle="rigthtSide2.rightsection2title1"
        :Rightparagraph1="rigthtSide2.rightsection2para1"
        :RightSectionImg="rigthtSide2.rightsection2img1"
        :leftbutton="rigthtSide2.section2btn"
        
      />
    </div>
    <!-- <CoreValue :coreValue="CoreValue" /> -->
    <div class="bg-gray">
        <TechnologyBox :technologyBox="TechnologyBox" />
    </div>
    <div>
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
// import CoreValue from '../components/CoreValue.vue'
import TechnologyBox from '../components/TechnologyBox.vue'

import leftsectionimg1 from '../static/image/full-stack-development-img1.png'
import rightsectionimg1 from '../static/image/full-stack-development-img2.png'
import leftsectionimg2 from '../static/image/full-stack-development-img3.png'
import rightsectionimg2 from '../static/image/full-stack-development-img4.png'


import icon1 from '../static/image/technology-react-icon.png'
import icon2 from '../static/image/technology-angular-icon.png'
import icon3 from '../static/image/technology-vue-icon.png'
// import icon4 from '../static/image/qa-testing-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'FullStackDevelopmentCompany',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hire Full stack developer in Surat, India from Inventam Tech Solution, the best Full stack development company offers custom web and application development services.',
        },
      ],
    }
  },


  components: {
    AppHeader,
    AppFooter,
    LeftSideFormat,
    RightSideFormat,
    // CoreValue,
    TechnologyBox,
  },
  data() {
    return {
      // SEO Page Title
      title: "Hire Full Stack Development Company's Developer for Web and App Services in Surat, India",

      leftSide1: {
        section1title1: 'India’s Leading Full Stack Development Company',
        section1para1:
          'Hire full stack developer with extensive knowledge of backend and front-end development has become the high priority needs. Inventam Tech Solution is the leading name as best Full Stack Development company of Surat, India with significant experience (5+ Years) to transform the different industries. Our rich Full Stack development process includes development, unit testing, and integration through planning, implementation, scaling, and builds something that will solve the challenges at affordable prices.',
        section1para2:
          'We are the team of full stack developers, experienced in delivering the full stack solutions in front-end & back-end development, and deliver end-to-end solutions to our clients. The benefits of this delivery method include lower overall development costs, centralized upgrades, improved integration, and lower initial setup costs.',
        section1img1: leftsectionimg1,
        isButton: false,
      },

      rigthtSide1: {
        rightsection1title1:
          'Why Inventam Best for Full Stack Development Services',
        rightsection1para1:
          'Our Full Stack development services offer a full spectrum of technologies from simple static front- end prototyping to the high-performing back-end services. Our full stack developers team proficient in managing front-tend and the back-end while working with different technologies like React JS, Angular JS, Backbone JS, Ember JS, and Polymer JS along with databases like MySQL, NO SQL, Mongo DB, Postgre SQL and Microsoft SQL Server and server-side technologies like PHP to MEAN Stack, Node.js, Angular.JS, Ruby on Rails, ReactJS, Laravel, Vue.js, jQuery and others. The full-stack work we deliver to you is SEO-friendly, intelligent, and growth-oriented to make your business more efficient, more productive, and ultimately more profitable.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },

      leftSide2: {
        section2title1: 'Hire Full Stack Developers for Front End Development',
        section2para1:
          'Our expert full stack developers have expertise for all the latest front-end development languages, like AngularJS, React JS, HTML5, JavaScript, etc, to execute the most complex of projects across the all industries. So, if you have specific technology in mind or you know what you want your app to do, we can assure you of the best code quality at the behest of Inventam’s front end developers and designers. Get in touch with us to hire full stack developers to find the correct structure and curate the right framework, language, and database for you.',
        section2img1: leftsectionimg2,
        isButton: true,
        isSubHeading: false,
        section2btn: 'Know More',
      },

      rigthtSide2: {
        rightsection2title1:
          'Hire Full Stack Developers for Back End Development',
        rightsection2para1:
          'Our skilled full stack developers especially known for their inventive and initiative custom back end development to innovate with new technologies. Choosing our back-end developers will get you to create stable back-ends that are efficient and adept at dealing with all types of content as well as being extremely quick. We have in-depth knowledge and broad experience in both advanced cloud-based and standard equipment hosting. We assure airtight security in our backend development that your project meets the highest standards possible.',
        rightsection2img1: rightsectionimg2,
        isButton: true,
        section2btn: 'Know More',
      },

      TechnologyBox: {
        secTitle: 'Stack Of Inventam',
        data: [
          {
            icon: icon1,
            heading: 'MERN',
            description:
              "The MERN stack is a JavaScript stack that's designed to make the development process smoother. MERN includes four open-source components: MongoDB, Express, React, and Node. js. These components provide an end-to-end framework for developers to work in.",
          },
          {
            icon: icon2,
            heading: 'MEAN',
            description:
              "The term MEAN stack refers to a collection of JavaScript based technologies used to develop web applications. MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node. js. From client to server to database, MEAN is full stack JavaScript.",
          },
          {
            icon: icon3,
            heading: 'MEVN',
            description:
              "The MEVN stack is a JavaScript stack that's designed to make the development process smoother. MEVN includes four open-source components: MongoDB, Express, Vue, and Node. js. These components provide an end-to-end framework for developers to work in.",
          },
        ],
      },
      
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We believe that the foundation of our relationship with our clients is mutual Growth. Full stack developers at Inventam Tech Solution take full-stack development services to another level. We are a full stack front end and back end development company with having in- depth knowledge, and extensive experience in building any type of web, mobile, or desktop application start from scratch. Our Full Stack development process covers planning, designing & development, testing, 3rd party integration, and ongoing support/maintenance.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
        link: '/contactus',
      },
    }
  },
}
</script>
