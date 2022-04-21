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

import leftsectionimg1 from '../static/image/devops-services-img1.png'
import rightsectionimg1 from '../static/image/devops-services-img2.png'
import leftsectionimg2 from '../static/image/devops-services-img3.png'


import icon1 from '../static/image/technology-docker-icon.png'
import icon2 from '../static/image/circleci-tech-icon.png'
import icon3 from '../static/image/technology-kubernetes-icon.png'
import icon4 from '../static/image/jenkins-tech-icon.png'
import icon5 from '../static/image/git-tech-icon.png'

import icon6 from '../static/image/assessment-planning-icon.png'
import icon7 from '../static/image/process-implementation-icon.png'
import icon8 from '../static/image/monitoring-backup-icon.png'
import icon9 from '../static/image/release-management-icon.png'

import leftsectionimg3 from '../static/image/why-choose-us-img.png'

export default {
  name: 'DevopsServicesAndSolutions',
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
        section1title1: 'India’s Leading Devops Solution Company',
        section1para1:
          'Hire DevOps developer with extensive knowledge of software and application codes and features as well as security and compliance of this process. Inventam Tech Solution is the leading name as best Devops solution company of Surat, India with significant experience (5+ Years) to transform the different industries.',
        section1para2:
          'Our DevOps solution adopts an approach that emphasizes communication, collaboration, integration, and automation through planning, implementation, scaling, and ensuring agile delivery of software and application innovation at affordable prices. We are the team of DevOps, experienced in delivering the DevOps solutions using the best DevOps practices, cloud features, and innovative tools to design, implement and manage cost-efficient cloud infrastructure along with continuous integration and automation of workflows.',
        section1img1: leftsectionimg1,
        isButton: false,
      },

      rigthtSide1: {
        rightsection1title1:
          'Why Inventam Best for DevOps Services',
        rightsection1para1:
          'Our DevOps services, improve deployment frequency, leading to faster time to market, the lower failure rate of new releases, the shortened lead time between fixes and faster time to recovery. Our DevOps developers team is proficient in solving the issues on resource optimization, reassigning the load, and adjusting the scale.',
        rightsection1para2: 'They also help with project creation, configuration, and support of secure environments, remote configuration, and security recommendations. Whether architecting an IT environment or building a fully-fledged DevOps solution from scratch to advance, our DevOps team possesses the know-how, custom frameworks, and proven toolchains to complete the project of any complexity.',
        rightsection1img1: rightsectionimg1,
        isButton: false,
      },

      leftSide2: {
        section2title1: 'Our Agile Azur Devops Services',
        section2para1:
          'Our expert Azur Devops developers have expertise for everything you need to build your software or application product from beginning to end or integration with popular open source and third-party tools and services across the entire DevOps workflow. So, if you have specific technology in mind or you want automating software or application delivery to provide continuous value to your users.',
        section2para2: 'We can assure you of the best quality services to plan projects using agile tools, manage code using Git, test the application, and deploy code using the best CI/CD system on the behest of Inventam’s azur devops developers. Get in touch with us to hire azur devops developers to bring together people, processes, and technology, automating software delivery to provide continuous value to your users.',
        section2img1: leftsectionimg2,
        isButton: false,
        isSubHeading: false,
        // section2btn: 'Know More',
      },

      CoreValue: {
        secTitle: 'Our Core Values',
        data: [
          {
            icon: icon6,
            heading: 'Assessment And Planning',
            description: 'Creating a DevOps Assessment roadmap by visualizing the desired state and identifying the traceable metrics.',
          },
          {
            icon: icon7,
            heading: 'Process Implementation',
            description: 'Proceed with the analysis, design, construction, automation and implementation in the identified areas.',
          },
          {
            icon: icon8,
            heading: 'Monitoring & Backup',
            description: 'Infrastructure monitoring & predicting possible changes with the Zabbix, Nagios, Graphite, NewRelic, etc.',
          },
          {
            icon: icon9,
            heading: 'Release Management',
            description: 'Providing efficient cooperation channels that include Project Management systems, Release & Delivery Planning.',
          },
        ],
      },
      

      TechnologyBox: {
        secTitle: 'Stack Of Inventam',
        data: [
          {
            icon: icon1,
            heading: 'Docker',
            description:
              "Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers.",
          },
          {
            icon: icon2,
            heading: 'Circle CI',
            description:
              "CircleCI is Continuous Integration, a development practice which is being used by software teams allowing them to to build, test and deploy applications easier and quicker on multiple platforms.",
          },
          {
            icon: icon3,
            heading: 'Kubernetes',
            description:
              "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation.",
          },
          {
            icon: icon4,
            heading: 'Jenkins',
            description:
              "Jenkins is a free and open source automation server. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.",
          },
          {
            icon: icon5,
            heading: 'Git',
            description:
              "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
          },
        ],
      },
      
      leftSide3: {
        section3title1: 'Why choose us?',
        section2para1:
          'Our services encompass several capabilities such as iterative and incremental development, workload management on demand, lightweight architecture, security and automated testing techniques. The agile approach to software development, allowing our compact teams to build enterprise-level, high-delivery products faster ensuring business continuity and stability. Your organization can make simple processes programmable and dynamic, helping to maximize operational predictability, efficiency, security and maintainability.',
        section3img1: leftsectionimg3,
        section3btn: 'Contact Us',
      },
    }
  },
}
</script>
