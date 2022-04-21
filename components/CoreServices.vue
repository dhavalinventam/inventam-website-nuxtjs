<template>
  <div>
    <div class="our-service-sec-main-div common-padding-div bg-gray">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text">Core Services</h2>
          <p class="common-hight-text">Here’s What We Do Best</p>
        </div>
        <div class="our-service-sub-div">
          <div class="row">
            <div
              v-for="(item, index) of service"
              :key="index"
              class="col-md-6 col-lg-3"
            >
              <div class="our-service-box-div">
                <div class="service-img">
                  <img
                    :src="item.img"
                    class="img-fluid"
                  />
                </div>
                <h6 class="service-heading">{{ item.title }}</h6>
                <h6 class="service-para">
                  {{ item.description }}
                </h6>
                <div class="circle-arrow-div pulse-effects">
                  <a href="#" class="circle-box">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../static/image/sass-applicatin-icon.png'
import img2 from '../static/image/web-apps-website-development-icon.png'
import img3 from '../static/image/mobile-app-development-icon.png'
import img4 from '../static/image/ui-ux-design-icon.png'

export default {
  name: 'CoreServices',
  data() {
    return {
      service: [
        {
          img: img1,
          title: 'SAAS Application Development',
          description:
            'We are the team of SaaS developers, experienced in delivering the SAAS solutions with multi-tenant support, configurability, scalability, security and monitoring.',
        },
        {
          img: img2,
          title: 'Web Apps & Website Development',
          description:
            'Creative web solutions blended with latest technologies form the right base for innovative businesses. Our focus is on building & delivering excellence at each level.',
        },
        {
          img: img3,
          title: 'Mobile App Development',
          description:
            'Turning your ideas into working applications, we create custom mobile app solutions by utilising latest technologies to solve unique & challenging business problems.',
        },
        {
          img: img4,
          title: 'Premium UI & UX Design',
          description:
            'We build creative & impressive designs that are helpful, functional and desirable of a website or mobile application with the latest technology trends in your business.',
        },
      ],
    }
  },
}
</script>
