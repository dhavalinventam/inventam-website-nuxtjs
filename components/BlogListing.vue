<template>
  <div>
    <div class="blog-section-div common-padding-div bg-gray">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text mb-0">Blog</h2>
        </div>
        <div class="row">
          <div v-for="(item, index) of bloglisting"
            :key="index" class="col-md-4">
            <div class="blog-box-main-div">
              <div class="blog-img-div">
                <img 
                :src="item.img"
                class="img-fluid" />
              </div>
              <div class="blog-contain-div">
                <div class="blog-dates-div">
                  <a href="#"
                    ><p class="blog-small-txt">{{ item.designation }}</p></a
                  >
                  <a href="#"><p class="blog-small-txt">{{ item.date }}</p></a>
                </div>
                <h5 class="blog-small-heading">
                  <a href="#"
                    >{{ item.title }}</a
                  >
                </h5>
                <p class="common-para">
                  {{ item.desc }}
                </p>
                <div class="blog-btn-div">
                  <a href="#" class="btn">{{ item.button }}</a>
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

import img1 from '../static/image/blog-img1.jpg'

export default {
  name: 'BlogListing',
  data() {
    return {
      bloglisting: [
        {
          img: img1,
          designation: 'Full Stack Developer',
          date: 'March 8, 2020',
          title: 'What is the Scope Of Full Stack Development in Future?',
          desc: 'Today, while we are talking about the Full Stack Development, it refers to the front-end and back-end development of an application. And the full stack developers are in high demand because they are managing..',
          button: 'Know More'
        },
        {
          img: img1,
          designation: 'Web Designer',
          date: 'April 10, 2021',
          title: 'What is the Scope Of Full Stack Development in Future?',
          desc: 'Today, while we are talking about the Full Stack Development, it refers to the front-end and back-end development of an application. And the full stack developers are in high demand because they are managing..',
          button: 'Know More'
        },
        {
          img: img1,
          designation: 'Vue Js Developer',
          date: 'May 20, 2022',
          title: 'What is the Scope Of Full Stack Development in Future?',
          desc: 'Today, while we are talking about the Full Stack Development, it refers to the front-end and back-end development of an application. And the full stack developers are in high demand because they are managing..',
          button: 'Know More'
        },
      ],
    }
  },
}
</script>
