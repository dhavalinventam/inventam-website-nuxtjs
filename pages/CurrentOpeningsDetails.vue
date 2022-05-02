<template>
  <div>
    <AppHeader />
    <CurrentOpeningsDetailsComp 
      :mainTitle="CurrentOpeningsData.maintitle"
      :smallHeading1="CurrentOpeningsData.smallheading1"
      :section1Point1="CurrentOpeningsData.section1Point1"
      :section1Point2="CurrentOpeningsData.section1Point2"
      :section1Point3="CurrentOpeningsData.section1Point3"
      :section1Point4="CurrentOpeningsData.section1Point4"
      :section1Point5="CurrentOpeningsData.section1Point5"
      :section1Point6="CurrentOpeningsData.section1Point6"
      :smallHeading2="CurrentOpeningsData.smallheading2"
      :section2Point1="CurrentOpeningsData.section2Point1"
      :section2Point2="CurrentOpeningsData.section2Point2"
      :smallHeading3="CurrentOpeningsData.smallheading3"
      :designation="CurrentOpeningsData.designation"
      :jobType="CurrentOpeningsData.jobType"
      :location="CurrentOpeningsData.location"
      :opening="CurrentOpeningsData.opening"
    />
    
    <!-- Inquiry -->
    <section class="inquiry-main-div common-padding-div bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="inquiry-img-div padding-right-div">
              <img src="image/inquiry-img.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6">
            <InqueryForm />
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import InqueryForm from '../components/InqueryForm.vue'
import CurrentOpeningsDetailsComp from '../components/CurrentOpeningsDetailsComp.vue'

export default {
  name: 'CurrentOpeningsDetails',
  components: {
    AppHeader,
    AppFooter,
    InqueryForm,
    CurrentOpeningsDetailsComp,
  },
   data() {
    return {
      CurrentOpeningsData: {
        maintitle: 'Flutter Developer| 6 Months – 3 Years Exp.',
        smallheading1: 'Skills Required:',
        section1Point1: 'Dart, Flutter framework,',
        section1Point2: 'State management Getx, BLoC & Provider',
        section1Point3: 'Material-UI',
        section1Point4: 'Rest API Integration',
        section1Point5: 'The basic fundamental of mobile App development',
        section1Point6: 'It will be an advantage if you have knowledge of Firebase, GraphQL, Socket.io Integration',
        smallheading2: 'Please Take Note For Few Points Before Apply',
        section2Point1: 'If you have enough experience or skills for this job your formal education doesn’t matter.',
        section2Point2: 'If you have experience of 1 plus but if you don’t have the above skills or only have a few of them but you willing to adopt/learn will provide you environment and time for the same*',
        smallheading3: 'Job Category',
        designation: 'Mobile Dev',
        jobType: 'Full Time',
        location: 'Surat',
        opening: '2',
      },  
    }
  },
}
</script>
