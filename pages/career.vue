<template>
  <div>
    <AppHeader />
    <InnerBanner
      :title="title"
      :deskbannerImg="deskbannerImg"
      :mobbannerImg="mobbannerImg"
    />
    <div class="bg-gray">
      <LeftSideFormat
        :lefttitle="section1title1"
        :subheading="section1subheading1"
        :leftbutton="section1button1"
        :leftimg="section1img1"
      />
    </div>
    <RightSideFormat
      :RightSectiontitle="rightsection1title1"
      :Rightparagraph1="rightsection1para1"
      :Rightparagraph2="rightsection1para2"
      :Rightparagraph3="rightsection1para3"
      :Rightparagraph4="rightsection1para4"
      :RightSectionImg="rightsection1img1"
      :isButton="isButton"
    />
    <div class="bg-gray">
      <HiringProcess />
    </div>
    <CurrentOpenings />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import InnerBanner from '../components/InnerBanner.vue'
import LeftSideFormat from '../components/LeftSideFormat.vue'
import RightSideFormat from '../components/RightSideFormat.vue'
import HiringProcess from '../components/HiringProcess.vue'
import CurrentOpenings from '../components/CurrentOpenings.vue'

import DeskBanner from '../static/image/career-desk-img.jpg'
import MobBanner from '../static/image/career-mob-img.jpg'
import leftsectionimg1 from '../static/image/advanced-technologies-img.png'
import rightsectionimg1 from '../static/image/work-culture-img.png'

export default {
  name: 'CareerPage',
  components: {
    AppHeader,
    AppFooter,
    InnerBanner,
    LeftSideFormat,
    RightSideFormat,
    HiringProcess,
    CurrentOpenings,
  },
  data() {
    return {
      title: 'Career',
      deskbannerImg: DeskBanner,
      mobbannerImg: MobBanner,

      section1title1: 'Looking For Work On Advanced Technologies?',
      section1subheading1: 'Join The Rasing Start-up Inventam Tech Solution!',
      section1button1: 'Contact Us',
      section1img1: leftsectionimg1,

      rightsection1title1: 'Work Culture?',
      rightsection1para1:
        'We are young blood and cool culture people, Simple, Semi-formal & Responsive towards our work and team',
      rightsection1para2:
        'We believe in Skills and experience more than formal education. If you have enough experience or skills for the job then you good go your formal education doesn’t matter to work for Inventam Tech Solution. The same thing applied to promotion and increment we have a simple performance-oriented policy.',
      rightsection1para3:
        'Supportiveness is an essential part of Inventam Tech Solution. We are providing environment and time for a team member to learn and adopt new technical skills. The same thing is applied to new members if a person has enough experience or a strong logical foundation will provide an environment and time to learn a certain skill.',
      rightsection1para4: 'Working Time. 5 Days a week | 9 AM to 6 PM',
      rightsection1img1: rightsectionimg1,
      isButton: false,
    }
  },
}
</script>
