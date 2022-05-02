<template>
  <div>
    <div class="developer-information-main-div common-padding-div">
      <div class="container">
        <h2 class="postion-heading">{{ mainTitle }}</h2>
        <div class="common-ul-li-div">
          <h4 class="postion-sub-heading">{{smallHeading1}}</h4>
          <ul>
            <li>{{section1Point1}}</li>
            <li>{{section1Point2}}</li>
            <li>{{section1Point3}}</li>
            <li>{{section1Point4}}</li>
            <li>{{section1Point5}}</li>
          </ul>
        </div>
        <div class="common-ul-li-div">
          <h4 class="postion-sub-heading">
            {{smallHeading2}}
          </h4>
          <ul>
            <li>
              {{section2Point1}}
            </li>
            <li>
              {{section2Point2}}
            </li>
          </ul>
        </div>
        <div class="current-position-div">
          <h4 class="postion-sub-heading">
            {{smallHeading3}} : <label class="pos-value">{{designation}}</label>
          </h4>
          <p class="openings-text">
            <i class="fa fa-briefcase" aria-hidden="true"></i><b>Job Type:</b>
            <label class="pos-value">{{jobType}}</label>
          </p>
          <p class="openings-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i
            ><b>Job Location:</b> <label class="pos-value">{{location}}</label>
          </p>
          <p class="openings-text">
            <i class="fa fa-user" aria-hidden="true"></i><b>Openings:</b>
            <label class="pos-value">{{opening}}</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentOpeningsDetailsComp',
  props: {
    mainTitle: {
      type: String,
      default: '',
    },
    smallHeading1: {
      type: String,
      default: '',
    },
    section1Point1: {
      type: String,
      default: '',
    },
    section1Point2: {
      type: String,
      default: '',
    },
    section1Point3: {
      type: String,
      default: '',
    },
    section1Point4: {
      type: String,
      default: '',
    },
    section1Point5: {
      type: String,
      default: '',
    },
    section1Point6: {
      type: String,
      default: '',
    },
    smallHeading2: {
      type: String,
      default: '',
    },
    section2Point1: {
      type: String,
      default: '',
    },
    section2Point2: {
      type: String,
      default: '',
    },
    smallHeading3: {
      type: String,
      default: '',
    },
    designation: {
      type: String,
      default: '',
    },
    jobType: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    opening: {
      type: String,
      default: '',
    },
  },
}
</script>
