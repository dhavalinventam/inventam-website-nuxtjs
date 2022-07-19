<template>
  <div>
    <div class="our-service-sec-main-div hiring-process-div common-padding-div">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text">Hiring Process</h2>
        </div>
        <div class="our-service-sub-div">
          <div class="row">
            <div
              v-for="(item, index) of hiringprocess"
              :key="index"
              class="col-md-6 col-lg-3"
            >
              <div class="our-service-box-div">
                <div class="service-img">
                  <img
                    :src="item.img"
                    class="img-fluid"
                    alt="icon"
                    data-aos="flip-left" data-aos-delay="50" data-aos-duration="1500"
                  />
                </div>
                <h6 class="service-heading">{{ item.title }}</h6>
                <h6 class="service-para">
                  {{ item.description }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../static/image/resume-icon.png'
import img2 from '../static/image/skill-test-icon.png'
import img3 from '../static/image/technical-round-icon.png'
import img4 from '../static/image/hr-icon.png'

export default {
  name: 'HiringProcess',

  data() {
    return {
      hiringprocess: [
        {
          img: img1,
          title: 'Send Resume',
          description:
            'Send you formal resume at hr@inventam.com for our team to review your details.',
        },
        {
          img: img2,
          title: 'Small Skill Test',
          description:
            'Skill test can be include descriptive or code based tasks to perform which hardly take hour and we design this tasks based on candidate background only',
        },
        {
          img: img3,
          title: 'Technical Round',
          description:
            'It is technical interview in which our tech team asked you question based on your background only. It might be face to face or online',
        },
        {
          img: img4,
          title: 'HR Round',
          description:
            'Final stage for candidate is face to face or online interview with our management team',
        },
      ],
    }
  },
}
</script>
