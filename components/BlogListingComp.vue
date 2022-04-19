<template>
  <div>
    <div class="blog-main-div common-padding-div">
      <div class="container">
        <div class="row">
          <div v-for="(item, index) of bloglistingcomp"
            :key="index" class="col-md-6">
            <div class="blog-box-main-div">
              <div class="blog-banner-img-div">
                <img :src="item.img" class="img-fluid" />
              </div>
              <div class="blog-cat-date-div">
                <div class="blog-cal-div">
                  <a href="#" class="blog-links">{{item.designation}}</a>
                </div>
                <div class="blog-date-div">
                  <a href="#" class="blog-links">{{item.date}}</a>
                </div>
              </div>
              <div class="blog-contains-div">
                <h3 class="blog-title-text">
                  {{item.heading}}
                </h3>
                <p class="blog-para-text">
                  {{item.description}}
                </p>
                <div class="blog-btn-div mt-4">
                  <a href="/blogdetails" class="btn">{{item.button}}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-12">
            <div class="common-btn-div text-center mt-4">
              <a href="#" class="btn"
                >Load More
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
</template>

<script>

import img1 from '../static/image/blog-nodejs-banner.png'
import img2 from '../static/image/blog-devops.jpg'
import img3 from '../static/image/blog-react-cycle.jpg'
import img4 from '../static/image/api-design-banner.jpg'
import img5 from '../static/image/server-less-development.jpg'
import img6 from '../static/image/blog-mobile-development.jpg'

export default {
  name: 'BlogListingComp',
  data() {
    return {
      bloglistingcomp: [
        {
          img: img1,
          designation: 'Full Stack Development',
          date: 'January 18, 2021',
          heading: 'How Node.js is The Right Choice for Enterprise Software?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        },
        {
          img: img2,
          designation: 'DevOps Services',
          date: 'January 11, 2021',
          heading: 'Major DevOps Trends That Rule in 2021',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        },
        {
          img: img3,
          designation: 'Full Stack Development',
          date: 'January 4, 2021',
          heading: 'The Lifecycle of ReactJs – Initialization, Mounting & Updating',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        },
        {
          img: img4,
          designation: 'API Development',
          date: 'July 6, 2020',
          heading: 'Massive RESTful API Design Guideline to Make Your Users Happy',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        },
        {
          img: img5,
          designation: 'SAAS',
          date: 'June 22, 2020',
          heading: 'Advantages of Serverless Development – A Complete Guidelines',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        },
        {
          img: img6,
          designation: 'Mobile App Development',
          date: 'June 15, 2020',
          heading: 'How to Select the Right One Between the Web, Native & Hybrid App for Your Application',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
          button: 'Read More'
        }
      ]
    }
  }
}
</script>
