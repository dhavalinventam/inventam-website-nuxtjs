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

import leftsectionimg1 from '../static/image/web-application-development-img1.png'
import rightsectionimg1 from '../static/image/web-application-development-img2.png'
import leftsectionimg2 from '../static/image/web-application-development-img4.png'
import icon1 from '../static/image/web-application-icon.png'
import icon2 from '../static/image/cms-web-application-icon.png'
import icon3 from '../static/image/enterprise-web-application-icon.png'
import icon4 from '../static/image/support-web-application-icon.png'
import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'WebApplicationDevelopmentCompany',
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
        section1title1: 'One Of Rising Web App Development Company',
        section1para1:
          'Inventam Tech Solution is the name as one of the best Web App Development Company in Surat, India with significant (5+ Years) experience to transform the different industries. Our web app developers provide end-to-end web-based solutions covering UI/UX, front-end development, Feature enhancement, API development & integration, back-end development, Security, Deployment, and maintenance.',
        section1para2:
          'We are a team of web developers, experienced in delivering scalable, secure, and reliable web-based solutions with performing consistently well across all browsers to achieve widespread success. We provide a powerful delivery mechanism for your products and services with the advent of Cloud technologies. As an established web application development company, we build robust and scalable web apps focused on your business objectives.',
        section1img1: leftsectionimg1,
        isButton: false,
      },
      rigthtSide1: {
        rightsection1title1:
          'Why Inventam Best for Web App Development Services',
        rightsection1para1:
          'Our web app development services offer a wide range of web application development in building world-class B2B and B2C solutions focusing on video delivery, RTC, adtech, eLearning, and data analytics for our global clients as per their unique needs. Our team crafts tailored strategies to meet customer expectations by aligning it to industry standards. From consulting to web design and development, we cover all your technology requirements.',
        rightsection1para2:
          'Our web expert’s team use high-fidelity, interactive prototypes to establish design and usability standards before we write a line of code. That means there are no surprises. Your app functions exactly as you need it too, and looks just the way you expected. Our website application development team has a thorough understanding of the client’s objectives and works with them in close collaboration to come up with the most appropriate web application development solutions.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },
      leftSide2: {
        section2title1: 'Custom Web Application Development',
        section2para1:
          'The core team of web app developers offers custom web application development solutions that help your business grow exponentially by deepening and enriching your relationship with your customers and scaling your operations 24×7 with monitoring and management by involving the best technologies and processes to create and maintain the finest revenue-generating solutions for every business. Throughout the process, we use our QA team, UI/UX designers, and custom web developers to create and design intuitive applications with a clean code.',
        section2para2:
          'Our process may seem drawn-out, but we leave no rock unturned when it comes to meeting the demands of your business through our custom web applications made in Surat, India. We understand your business needs and help to grow exponentially by deepening and enriching your relationship with your customers and scaling your operations.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: false,
      },
      CoreValue: {
        secTitle: 'What Makes Our Process Stand Out From The Rest?',
        data: [
          {
            icon: icon1,
            heading: 'Web Portal Development',
            description:
              'We develop customer-focused web portals that comprise all the necessary functionalities.',
          },
          {
            icon: icon2,
            heading: 'CMS Web Development',
            description:
              'Our developers develop CMS based web applications which are technically complex easy-to-use.',
          },
          {
            icon: icon3,
            heading: 'Enterprise Web Development',
            description:
              'We develop custom B2B & B2C portals, intranets, media & Enterprise Information Systems.',
          },
          {
            icon: icon4,
            heading: 'Support & Maintenance',
            description:
              'We provide unmatched maintenance services to enhance your web application performance.',
          },
        ],
      },
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'We can develop custom websites, web applications & software on a wide range of technology platforms. We hold expertise in offering minimum maintenance / support & generating business value, so that we remain the client’s partner of choice for custom Web application development, helping them make smart business moves. We are a Web application development company with hands-on experience in creating top-performing web applications along with custom web applications. We understand the requirements of custom website application development tasks and use leading-edge technologies so that need-based Web applications & technology solutions may have longer shelf-life and evolve with the client’s business.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
      },
    }
  },
}
</script>
