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

import leftsectionimg1 from '../static/image/serverless-application-development-img1.png'
import rightsectionimg1 from '../static/image/serverless-application-development-img2.png'
import leftsectionimg2 from '../static/image/serverless-application-development-img3.png'
import icon1 from '../static/image/scalable-icon.png'
import icon2 from '../static/image/hybird-development-icon.png'
import icon3 from '../static/image/web-application-icon.png'
import icon4 from '../static/image/cost-effectiveness-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'ServerlessApplicationDevelopmentCompany',

  // SEO Code
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hire Serverless developer in Surat, India from Inventam Tech Solution, the best Serverless Application development company offers custom web and app development services using AWS Lambda and API Gateway, Azure Functions and Google Cloud Functions',
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
      title: "Hire Serverless Application Development Company's Developer for Web &amp; App Services in Surat, India",

      leftSide1: {
        section1title1: 'India’s Leading Serverless App Development Company',
        section1para1:
          'Inventam Tech Solution is the leading name as best Serverless Application Development Company in Surat, India with significant experience (5+ Years) to develop, deploy, monitor, and secure serverless applications on any cloud. Our Serverless developer offers greater scalability, more flexibility, and quicker time to release the app through planning, implementation, scaling, and builds something that will solve the challenges at affordable prices.',
        section1para2:
          'We are the team of Serverless developers, experienced in delivering the custom web and app development services using AWS Lambda, API Gateway, Azure Functions, and Google Cloud Functions. The serverless architecture enables you to manage cloud-hosted applications and services, server-side logic, a state with serverless. We do not need to worry about purchasing, provisioning, and managing backend servers.',
        section1img1: leftsectionimg1,
        isButton: false,
      },
      rigthtSide1: {
        rightsection1title1: 'Why Inventam Best for Serverless Development Services',
        rightsection1para1:
          'Our Serverless development services offer serverless consulting, AWS architectural consulting, development, build offline capabilities, office integration, testing, and much more. We optimize the entire development process in a serverless framework which helps in crafting robust and unfailing serverless apps that can readily scale to your needs.',
        rightsection1para2:
          'Our serverless expert team proficient in technologies like AWS Lambda, Google Cloud Functions, Azure Functions, OpenWhisk, and many others that support different languages such as Node.js, C#, Java, Go, Python, etc. We build and deploy your apps on the world’s foremost serverless platforms and save your time, money, and effort.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },
      leftSide2: {
        section2title1: 'AWS Lambda and Serverless Architecture',
        section2para1:
          'AWS Lambda is an ideal example of a serverless architecture computing platform that allows you to run code without depending on any servers means total serverless architecture and it manages the computing resources automatically. We take care of everything from running to calling your code with high availability.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: true,
        subheadingtitle1: 'Why AWS Lambda used for Serverless App Development',
        subheadingpara1:
          'AWS Lambda has greater availability while implementing Serverless applications in the cloud where providers manage the resources. Our developers make use of the AWS lambda as a logic layer of the serverless application and develop the most scalable applications with the right architecture.',
        subheadingtitle2: 'Key Features of AWS Lambda',
        subheadingpara2:
          'We create a complete serverless website or application with the help of user-facing content or static web content for platforms which are user-friendly and have unique features and specifications. The key features of AWS Lambda are automatic scaling, integrated security model, easy code, security patch deployment, easier operational management with managing a serverless environment.',
      },
      CoreValue: {
        secTitle: 'Benefits of Serverless App Development',
        data: [
          {
            icon: icon1,
            heading: 'Better Scalability',
            description: 'Applications can automatically scaled up by adjusting its capacity through toggling the units of consumption rather than units of individual servers.',
          },
          {
            icon: icon2,
            heading: 'Quick Deployments & Updates',
            description: 'No need to do any backend configuration. Just need to make some changes & upload bits of code to quickly update patch, add or release new products.',
          },
          {
            icon: icon3,
            heading: 'No Server Management',
            description: 'No need to provision or maintain any servers. All are managed by the vendor. We take care of all the runtime to install, maintain, & administer services.',
          },
          {
            icon: icon4,
            heading: 'Low Operational Cost',
            description: 'Take care of infrastructure so developers focus on the server-side code that matters & takes less computing power & human resources to reduce cost.',
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
