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
        :isButton="leftSide1.isButton"
      />
    </div>
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="leftSide2.section2title1"
        :leftpara1="leftSide2.section2para1"
        :leftpara2="leftSide2.section2para2"
        :leftimg="leftSide2.section2img1"
        :isButton="leftSide1.isButton"
        :isSubHeading="leftSide2.isSubHeading"
      />
    </div>
    <CoreValue :coreValue="CoreValue" />
    <div class="bg-gray">
        <TechnologyBox :technologyBox="TechnologyBox" />
    </div>
    <div>
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

import CoreValue from '../components/CoreValue.vue'
import TechnologyBox from '../components/TechnologyBox.vue'

import leftsectionimg1 from '../static/image/api-development-img1.png'
import rightsectionimg1 from '../static/image/api-development-img2.png'
import leftsectionimg2 from '../static/image/api-development-img3.png'


import icon1 from '../static/image/technology-node-icon.png'
import icon2 from '../static/image/hapi-tech-icon.png'
import icon3 from '../static/image/technology-graphql-icon.png'

import icon4 from '../static/image/api-integration-icon.png'
import icon5 from '../static/image/api-consulting-icon.png'
import icon6 from '../static/image/web-apps-website-development-icon.png'
import icon7 from '../static/image/mobile-developement-icon.png'

import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'CustomApiDevelopmentCompany',
  components: {
    AppHeader,
    AppFooter,
    LeftSideFormat,
    
    CoreValue,
    TechnologyBox,
  },
  data() {
    return {
      leftSide1: {
        section1title1: 'India’s Leading API Development Company',
        section1para1:
          'Inventam Tech Solution is the leading name as best Rest API Development Company in Surat, India offers Custom and Third Party API Integration Services with significant experience (5+ Years) to transforming the different industries. Our API developers using C, C++, Java, Python, and PHP to create powerful, secure, and easily maintainable APIs.',
        section1para2:
          'We are the team of API developers, experienced in delivering the API integration services to provide the access to well-designed backend solutions at a competitive price with no compromising on the quality. The benefits of this delivery method to create high-performance yet light APIs that can draw a large amount of traffic for your web and mobile app, flexible integrations and customization of existing products, enabling developers to enrich and enhance services in new and creative ways.',
        section1img1: leftsectionimg1,
        isButton: false,
      },

      rigthtSide1: {
        rightsection1title1:
          'Our Fluent Rest API Development Services',
        rightsection1para1:
          'Our Rest API development services offer cloud-based backends to give our customers access for their products on any device from anywhere in the world. We specialize in developing enterprise-grade REST APIs that are easy to consume, well documented, and truly reliable.',
        rightsection1para2: 'Our Rest API expert team proficient in a faster path to deployment, easier integration with other applications, and the more flexible GUI is tuning for worker support. We reduce the management complexity of a business and help to startups, SMBs and Fortune 500 companies build, extend, and maintain private APIs that power mobile apps, responsive websites and microservices.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },

      leftSide2: {
        section2title1: 'Custom API Development & Integration Solutions',
        section2para1:
          'Our expert team of API developers offers custom API development & integration solutions 24×7 with monitoring and management along with delivering scalable and secure cloud-based APIs for our clients. We provide clean and well-structured programming code, using best development tools, and build high-performance APIs for your needs that create and maintain the finest revenue-generating solutions for any business.',
        section2para2: 'We integrate disparate business systems and processes, add web service functionality to existing applications, and synchronize data across applications. You just need to explain your needs and we will have them taken care of here at Inventam Tech Solution.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: false,
        // section2btn: 'Know More',
      },

      CoreValue: {
        secTitle: 'Our Core Values',
        data: [
          {
            icon: icon4,
            heading: 'API Integration',
            description: 'Smooth Integration with Google, Yahoo!, PayPal, Amazon, Skype, Facebook and Twitter.',
          },
          {
            icon: icon5,
            heading: 'API Consulting',
            description: 'Make the right choice of API Management & API Integration solutions to meet your needs.',
          },
          {
            icon: icon6,
            heading: 'Web API Development',
            description: 'Creating mashups and Web APIs for social media latest representational state transfer (REST).',
          },
          {
            icon: icon7,
            heading: 'Mobile API Development',
            description: 'Creating APIs that makes payments, appointments, find geolocation etc., to enrich mobile apps.',
          },
        ],
      },
      

      TechnologyBox: {
        secTitle: 'Stack Of Inventam',
        data: [
          {
            icon: icon1,
            heading: 'Node/Express',
            description:
              "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
          },
          {
            icon: icon2,
            heading: 'Node/Hapi',
            description:
              "Build powerful, scalable applications, with minimal overhead and full out-of-the-box functionality - your code, your way",
          },
          {
            icon: icon3,
            heading: 'GraphQL',
            description:
              "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
          },
        ],
      },
      
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We develop specialized APIs for new and legacy enterprise applications. Our APIs facilitate access to application data, functionality and business logic, as well as web services. Our web design and protocols include the use of HTTP/HTTPS, XML, XHTML, JSON, Java, SOAP, EDI, AJAX, TCP/IP and/or REST API development services. We are in Rest API Development Company with hands-on experience in creating top-performing APIs for desktop, mobile, and cloud apps, web sockets, Service Oriented Architectures (SOA), firmware/middleware, browsers, databases and operating systems. We also design Hardware Platform Interfaces (HPI) for managing computer systems.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
      },
    }
  },
}
</script>
