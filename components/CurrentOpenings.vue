<template>
  <div>
    <div class="current-openings-main-div common-padding-div">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text">Current Openings</h2>
        </div>
        <div class="openings-dropdon-div">
          <div class="form-group">
            <select class="form-control">
              <option>All Job Category</option>
              <option>Back End</option>
              <option>Front End</option>
              <option>Full Stack</option>
              <option>Mobile Dev</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control">
              <option>All Job Type</option>
              <option>Full Time</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(item, index) of currentopenings"
            :key="index"
            class="col-md-6"
          >
            <div class="current-openings-box-div">
              <h4 class="openings-heading">
                {{ item.title }}
              </h4>
              <div class="current-position-div">
                <p class="openings-text">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  {{ item.jobtiming }}
                </p>
                <p class="openings-text">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{ item.location }}
                </p>
                <p class="openings-text">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  {{ item.vacancy }}
                </p>
              </div>
              <div class="common-btn-div">
                <a href="/CurrentOpeningsDetails" class="btn"
                  >{{ item.button }}
                  <i
                    class="fa fa-arrow-right left-right-move"
                    aria-hidden="true"
                  ></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentOpenings',

  data() {
    return {
      currentopenings: [
        {
          title: 'Flutter Developer | 6 Months – 3 Years Exp.',
          jobtiming: 'Full Time',
          location: 'Surat',
          vacancy: '2',
          button: 'More Details',
        },
        {
          title: 'Front-End Developer | React | Vue | 6 Months – 3 Years Exp.',
          jobtiming: 'Full Time',
          location: 'Surat',
          vacancy: '5',
          button: 'More Details',
        },
        {
          title: 'Backend Developer | Node | Python | 1 – 3 Year(S) Exp.',
          jobtiming: 'Full Time',
          location: 'Surat',
          vacancy: '5',
          button: 'More Details',
        },
        {
          title: 'Full-Stack Developer | React | Vue | Node | 3-5 Year(S) Exp.',
          jobtiming: 'Full Time',
          location: 'Surat',
          vacancy: '2',
          button: 'More Details',
        },
        {
          title: 'Full-Stack Developer | React | Vue | Node | 1-2 Year(S) Exp.',
          jobtiming: 'Full Time',
          location: 'Surat',
          vacancy: '3',
          button: 'More Details',
        },
      ],
    }
  },
}
</script>
